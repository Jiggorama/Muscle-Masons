import { Link } from 'react-router-dom'
// import '../styling/exerciseList.css'

let ExerciseList = (props) => {
  const star = '⭐️'

  return (
    <div className='bg-gray-700 bg-gradient-to-br from-gray-600 via-gray-400 h-48 w-60 sm:h-48 sm:w-40 lg:h-auto lg:w-60 xl:w-80 m-6 text-center transition duration-500 ease-in-out transform hover:scale-125'>
        <Link to={`/exercise/${props.exercise.id}`}>
    <div >
          <h3 className='text-gray-100 text-2xl lg:text-3xl xl:text-4xl pt-4'>{props.exercise.fields.name}</h3>
          <h4 className='pt-2 text-xl lg:text-2xl text-gray-800'>Target Muscle:</h4>
          <p className='lg:text-xl text-gray-700'>(<em>{props.exercise.fields.targeted}</em>)</p>
          <h4 className ='pt-4 text-xl lg:text-2xl text-gray-800'>Intensity:</h4>
          <p className='lg:text-xl mb-4'>{star.repeat(Number(props.exercise.fields.intensity))}</p>
      </div>
        </Link>
    </div>
  )
}

export default ExerciseList