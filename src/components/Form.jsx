import { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import {baseURL, config} from '../services'

function Form(props) {
  const [name, setName] = useState('')
  const [targeted, setTargeted] = useState('')
  const [intensity, setIntensity] = useState('')
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
      <h1>Add an exercise</h1>
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
      <input
        type="number"
        name='intensity'
        value={intensity}
        onChange={(e) => setIntensity(Number(e.target.value))}></input>
      <label htmlFor="directions">Steps/Instructions</label>
      <textarea
        name='directions'
        value={directions}
        onChange={(e) => setDirections(e.target.value)} ></textarea>
      <label htmlFor="reps">#Reps</label>
      <input
        name='reps'
        value={reps}
        type="number"
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