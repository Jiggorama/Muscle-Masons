import React from 'react'
import axios from 'axios'
import { useParams, Link, useHistory } from "react-router-dom"
import { baseURL, config } from '../services'
import '../styling/exerciseDisplay.css'

let ExerciseDisplay = (props) => {
  let { id } = useParams()
  let exercise = props.exercises.filter(element => {
    return element.id === id
  })[0]
  const star = '⭐️'
  let history = useHistory()
  
  const handleDelete = async () => {
    const exerciseURL = `${baseURL}/${exercise.id}`
    await axios.delete(exerciseURL, config)
    props.setToggler((prev) => !prev)
    history.push('/')
  } 

  return (   
    <div className='exerciseDisplay'> 
      {exercise ?
        <div>         
          <div className='container'>            
            <div className = 'exercise'>
            <h1>The {exercise.fields.name}</h1>
            <em>
              <h4>(Targets: {exercise.fields.targeted})</h4>
          </em>
          <h3>Intensity: {star.repeat(Number(exercise.fields.intensity))}</h3>
            <div>
              <h3>Equipment</h3>
              <p>{exercise.fields.equipment}</p>
            </div> 
            </div>
            <div className= 'directions'>              
              <h3>Directions</h3>
            <p>{exercise.fields.directions}</p>
            <p>For <strong>{exercise.fields.reps}</strong> Reps</p>
            </div>
          </div>
            <div className='buttons'>              
          <Link to={`/edit/${exercise.id}`}>
      <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
        : <h1>loading.....</h1>}
    </div>  
  )
}

export default ExerciseDisplay