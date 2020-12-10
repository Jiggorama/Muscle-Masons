import { useState, useEffect } from 'react'
import { baseURL, config } from './services'
import { Route, Switch } from 'react-router-dom';
import ExerciseList from './components/ExerciseList'
import ExerciseDisplay from './components/ExerciseDisplay';
import Home from './components/Home'
import Form from './components/Form'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import './App.css';

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
      <Switch>
      <Route exact path = '/'>
        <Home/>
      </Route>
        <Route path='/exercise-list'>
          <div className='h-full w-screen flex flex-col justify-between'>            
        <Header />
      <div className='bg-gray-800 bg-gradient-to-b from-gray-800 via-gray-200 pt-8 flex-auto flex flex-wrap justify-evenly'>
        {exercises.map(exercise => {
          return <ExerciseList key={exercise.id} setToggler={setToggler} exercise={exercise}/>
        })}
          </div>
          <Footer/>
        </div>
      </Route>
        <Route path='/exercise/:id'>
          <div>
        <Header />
          <ExerciseDisplay setToggler={setToggler} exercises={exercises} />
          <Footer/>
          </div>
      </Route>
        <Route path="/new">
          <div>
        <Header />
          <Form setToggler={setToggler} />
          <Footer/>
          </div>
      </Route>
        <Route path="/edit/:id">
          <div>
        <Header />
        <Form exercises={exercises} setToggler={setToggler}/>
          <Footer/>
          </div>
      </Route>
     
      </Switch>
    </div>
  );
}

export default App;
