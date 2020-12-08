import { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import { baseURL, config } from '../services'
import '../styling/form.css'

function Form(props) {
  const [name, setName] = useState('')
  const [targeted, setTargeted] = useState('')
  const [intensity, setIntensity] = useState(0)
  const [directions, setDirections] = useState('')
  const [reps, setReps] = useState('')
  const [equipment, setEquipment] = useState('')

  const {id} = useParams()
  const history = useHistory()
  // console.log(history);

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
    history.push('/')
  }
  return (
    <div className='form'>
      {id ? <h1>The {name}</h1> : <h1>Add An Exercise</h1>}
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name='name'
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)} />
      <label htmlFor="targeted">Target Muscle</label>
      <input
        name='targeted'
        value={targeted}
        type="text"
        onChange={(e) => setTargeted(e.target.value)} />
      <label htmlFor="intensity">Intensity</label>
      <select
        type="number"
        name='intensity'
        // value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}>
          <option value={intensity}>{intensity}</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option> 
        </select>
      <label htmlFor="directions">Directions</label>
      <textarea
        name='directions'
        value={directions}
        onChange={(e) => setDirections(e.target.value)} ></textarea>
      <label htmlFor="reps">#Reps</label>
      <input
        name='reps'
        value={reps}
          type="number"
          min = '0'
          onChange={(e) => setReps(Number(e.target.value))} />
      <label htmlFor="equipment">Equipment</label>
      <input
        name='equipment'
        value={equipment}
        type="text"
        onChange={(e) => setEquipment(e.target.value)} />
      <button type='submit'>Submit!</button>
      </form>
      </div>
  )
}

export default Form