import React from 'react'
import axios from 'axios'
import { useParams, Link, useHistory } from "react-router-dom"
import { baseURL, config } from '../services'
// import '../styling/exerciseDisplay.css'

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
    <div className='bg-coolGray-300 bg-gradient-to-br from-coolGray-300 via-gray-100 flex-auto flex flex-col justify-center items-center'> 
      {exercise ?
        <div className = 'sm:bg-coolGray-500 sm:bg-opacity-40 rounded-lg h-auto m-8'>         
          <div className='m-8'>            
            <div className = ''>
            <h1 className='text-center text-2xl sm:text-4xl md:text-5xl'>The {exercise.fields.name}</h1>
            <em>
              <h4 className='text-center md:text-xl'>(Targets: {exercise.fields.targeted})</h4>
          </em>
          <h3 className='mt-4 pl-4 text-xl md:text-2xl'>Intensity: {star.repeat(Number(exercise.fields.intensity))}</h3>
            <div>
              <h3 className='mt-4 pl-4 text-xl md:text-2xl'>Equipment</h3>
              <p className='ml-4 pl-4 md:text-xl'>{exercise.fields.equipment}</p>
            </div> 
            </div>
            <div className= 'bg-coolGray-800 bg-gradient-to-br from-coolGray-800 via-gray-600 rounded-md mt-4 p-4 max-w-lg xl:max-w-2xl'>              
              <h3 className='text-orange-400 text-xl md:text-2xl'>Directions</h3>
            <p className='text-gray-300 md:text-xl'>{exercise.fields.directions}</p>
            <p className='text-gray-300 md:text-xl'>--For <strong>{exercise.fields.reps}</strong> Reps</p>
            </div>
          </div>
            <div className='flex justify-center mb-8'>              
            <Link to={`/edit/${exercise.id}`}>
              <button className='w-auto self-center text-xl lg:text-2xl bg-gray-700 p-4 rounded-md text-orange-400 hover:bg-orange-400 hover:text-gray-700 border-4 border-gray-700 hover:border-gray-700'>Edit</button>             
            </Link>                   
              <button onClick={handleDelete}
              className='w-auto self-center text-xl lg:text-2xl bg-gray-700 p-4 rounded-md text-orange-400 hover:bg-orange-400 hover:text-gray-700 border-4 border-gray-700 hover:border-gray-700 ml-8'>Delete</button>          
            </div>
        </div>
        : <h1>loading.....</h1>}
    </div>  
  )
}

export default ExerciseDisplay