import { useState, useEffect } from 'react'
import { baseURL, config } from './services'
import { Route } from 'react-router-dom';
import ExerciseList from './components/ExerciseList'
import ExerciseDisplay from './components/ExerciseDisplay';
import Home from './components/Home'
import Form from './components/Form'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
// import './App.css';

function App() {
  const [exercises, setExercises] = useState([])
  const [toggler, setToggler] = useState(false)

  useEffect(() => {
    const getExercise = async () => {
      const res = await axios.get(baseURL,config)
      setExercises(res.data.records)
      // console.log(exercises);
    } 
    getExercise()
  }, [toggler]) 
  return (
    <div className="App">
      <Header />
      <Route exact path = '/'>
        <Home/>
      </Route>
      <Route path='/exercise-list'>
      <div className='listPage'>
        {exercises.map(exercise => {
          return <ExerciseList key={exercise.id} setToggler={setToggler} exercise={exercise}/>
        })}
      </div>
      </Route>
      <Route path = '/exercise/:id'>
        <ExerciseDisplay setToggler={setToggler} exercises={exercises}/>
      </Route>
      <Route path="/new">
        <Form setToggler={setToggler}/>
      </Route>
      <Route path="/edit/:id">
        <Form exercises={exercises} setToggler={setToggler}/>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
