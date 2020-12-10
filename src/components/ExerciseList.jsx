import { Link } from 'react-router-dom'
// import '../styling/exerciseList.css'

let ExerciseList = (props) => {
  const star = '⭐️'

  return (
    <div className='bg-gray-700 bg-gradient-to-br from-gray-600 via-gray-400 h-48 w-36 m-6' >
        <Link to={`/exercise/${props.exercise.id}`}>
    <div className="">
          <h3>{props.exercise.fields.name}</h3>
          <h4>Target Muscle:</h4>
          <p><em>{props.exercise.fields.targeted}</em></p>
          <h4 className ='text-xl md:text-2xl'>Intensity:</h4>
          <p>{star.repeat(Number(props.exercise.fields.intensity))}</p>
      </div>
        </Link>
    </div>
  )
}

export default ExerciseList