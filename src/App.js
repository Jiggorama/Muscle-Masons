import { useState, useEffect } from 'react'
import { baseURL,routURL, config } from './services'
import { Route, Switch } from 'react-router-dom';
import ExerciseList from './components/ExerciseList'
import ExerciseDisplay from './components/ExerciseDisplay';
import Home from './components/Home'
import Form from './components/Form'
import Header from './components/Header'
import Footer from './components/Footer'
import Routine from './components/Routine'
import RoutineDisplay from './components/RoutineDisplay'
import axios from 'axios'
import './App.css';

function App() {
  const [exercises, setExercises] = useState([])
  const [routine, setRoutine] = useState([])
  const [toggler, setToggler] = useState(false)

  useEffect(() => {
    const getExercise = async () => {
      const res = await axios.get(baseURL,config)
      setExercises(res.data.records)
      const res2 = await axios.get(routURL, config)
      setRoutine(res2.data.records)
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
          <div className='min-h-screen h-full w-full flex flex-col justify-between bg-gray-500 bg-gradient-to-b from-gray-500 via-gray-100'>            
        <Header />
            <div className='flex justify-center'>
              <div className=' pt-8 flex-auto flex flex-wrap justify-evenly max-w-screen-2xl'>
        {exercises.map(exercise => {
          return <ExerciseList key={exercise.id} setToggler={setToggler} exercise={exercise}/>
        })}
              </div>
          </div>
          <Footer/>
        </div>
        </Route>
        <Route exact path='/routine'>
          <div className='min-h-screen h-full w-full flex flex-col justify-between bg-gray-500 bg-gradient-to-b from-gray-500 via-gray-100 '>            
        <Header />
            <div className='flex justify-center'>
              <div className=' pt-8 flex-auto flex flex-wrap justify-evenly max-w-screen-2xl'>
        {routine.map(exercise => {
          return <Routine key={exercise.id} setToggler={setToggler} exercise={exercise}/>
        })}
              </div>
          </div>
          <Footer/>
        </div>
      </Route>
        <Route path='/exercise/:id'>
          <div className='min-h-screen h-full w-full flex flex-col justify-between'>
        <Header />
          <ExerciseDisplay setToggler={setToggler} exercises={exercises} />
          <Footer/>
          </div>
        </Route>
        <Route path='/routine/:id'>
          <div className='min-h-screen h-full w-full flex flex-col justify-between'>
        <Header />
          <RoutineDisplay setToggler={setToggler} exercises={routine} />
          <Footer/>
          </div>
      </Route>
        <Route path="/new">
        <div className='min-h-screen h-full w-full flex flex-col justify-between'>
        <Header />
          <Form setToggler={setToggler} />
          <Footer/>
          </div>
      </Route>
        <Route path="/edit/:id">
          <div className='min-h-screen h-full w-full flex flex-col justify-between'>
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
