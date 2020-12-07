import { useState, useEffect } from 'react'
import { baseURL, config } from './services'
import { Route } from 'react-router-dom';
import ExerciseList from './components/ExerciseList'
import ExerciseDisplay from './components/ExerciseDisplay';
import Form from './components/Form'
import Nav from './components/Nav'
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
      <header>
        <h1>Muscle-Masons</h1>
        <h3>You are the marble and the sculptor</h3>
        <Nav/>
      </header>
      <Route exact path='/'>
      <div className='homePage'>
        {exercises.map(exercise => {
          return <ExerciseList key={exercise.id} setToggler={setToggler} exercise={exercise}/>
        })}
      </div>
      </Route>
      <Route path = '/exercise/:id'>
        <ExerciseDisplay exercises={exercises}/>
      </Route>
      <Route path="/new">
        <Form setToggler={setToggler}/>
      </Route>
      <Route path="/edit/:id">
        <Form exercises={exercises} setToggler={setToggler}/>
      </Route>
    </div>
  );
}

export default App;
