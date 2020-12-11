import { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import { baseURL, config } from '../services'

function Form(props) {
  const [name, setName] = useState('')
  const [targeted, setTargeted] = useState('')
  const [intensity, setIntensity] = useState(0)
  const [directions, setDirections] = useState('')
  const [reps, setReps] = useState('')
  const [equipment, setEquipment] = useState('')

  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    if (id && props.exercises.length) {
      const exercise = props.exercises.find((exercise) => exercise.id === id)
      setTargeted(exercise.fields.targeted)
      setIntensity(exercise.fields.intensity)
      setReps(exercise.fields.reps)
      setDirections(exercise.fields.directions)
      setName(exercise.fields.name)
      setEquipment(exercise.fields.equipment)
    }
  },[props.exercises, id])


  let handleSubmit = async (e) => {
    e.preventDefault()
  

    let fields = {
      targeted,
      reps,
      name,
      directions,
      intensity,
      equipment,
    }

    if (id) {
      const exerciseURL = `${baseURL}/${id}`
      await axios.put(exerciseURL,{ fields }, config)
    } else {
      await axios.post(baseURL,{ fields }, config)
    }

    props.setToggler((prev) => !prev)
    history.push('/exercise-list')
  }
  return (
    <div className='bg-gray-300 bg-gradient-to-b from-gray-300 via-gray-100 flex-auto flex flex-col items-center'>
      {id ? <h1 className='mt-4 text-xl sm:text-4xl text-coolGray-800'>The {name}</h1> : <h1 className='mt-4 text-xl sm:text-4xl text-coolGray-800'>Add An Exercise</h1>}
      
    <form onSubmit={handleSubmit} className='flex flex-col self-center p-4 mt-4 mb-8 rounded-lg sm:bg-coolGray-800 sm:bg-gradient-to-br from-coolGray-800 via-gray-600 w-full sm:w-3/4 sm:max-w-lg'>
        <label className="text-coolGray-800 sm:text-warmGray-200 sm:text-xl lg:text-2xl"
          htmlFor="name">Name</label>
        <input
          className='focus:bg-orange-400 focus:text-gray-700 text-center sm:text-xl lg:text-2xl'
        name='name'
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)} />
        <label className="text-coolGray-800 sm:text-warmGray-200 sm:text-xl lg:text-2xl"
          htmlFor="targeted">Target Muscle</label>
        <input
          className='focus:bg-orange-400 focus:text-gray-700 text-center sm:text-xl lg:text-2xl'
        name='targeted'
        value={targeted}
        type="text"
        onChange={(e) => setTargeted(e.target.value)} />
        <label className="text-coolGray-800 sm:text-warmGray-200 sm:text-xl lg:text-2xl"
          htmlFor="intensity">Intensity</label>
        <select
          className='focus:bg-orange-400 focus:text-gray-700 text-center sm:text-xl lg:text-2xl'
        type="number"
        name='intensity'
          onChange={(e) => setIntensity(Number(e.target.value))}>
          <option value={intensity}>{intensity}</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option> 
        </select>
        <label className="text-coolGray-800 sm:text-warmGray-200 sm:text-xl lg:text-2xl"
          htmlFor="directions">Directions</label>
        <textarea
          className='focus:bg-orange-400 focus:text-gray-700 sm:text-xl  sm:h-24'
        name='directions'
        value={directions}
        onChange={(e) => setDirections(e.target.value)} ></textarea>
        <label className="text-coolGray-800 sm:text-warmGray-200 sm:text-xl lg:text-2xl"
          htmlFor="reps">#Reps</label>
        <input
          className='focus:bg-orange-400 focus:text-gray-700 text-center sm:text-xl lg:text-2xl'
        name='reps'
        value={reps}
          type="number"
          min = '0'
          onChange={(e) => setReps(Number(e.target.value))} />
        <label className="text-coolGray-800 sm:text-warmGray-200 sm:text-xl lg:text-2xl"
          htmlFor="equipment">Equipment</label>
        <input
          className='focus:bg-orange-400 focus:text-gray-700 text-center sm:text-xl lg:text-2xl'
        name='equipment'
        value={equipment}
        type="text"
          onChange={(e) => setEquipment(e.target.value)} />
        <div className='w-auto self-center text-xl lg:text-2xl bg-gray-700 p-2 mt-6 rounded-xl text-orange-400 hover:bg-orange-400 hover:text-gray-700 border-4 border-gray-700 hover:border-gray-700 sm:bg-gray-300 sm:text-orange-500'>
      <button type='submit'>Submit!</button>
        </div>
      </form>
      </div>
  )
}

export default Form