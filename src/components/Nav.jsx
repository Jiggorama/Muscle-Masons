import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className = 'self-end text-gray-100 pb-3 text-sm sm:text-xl'>
      <Link className='hover:bg-orange-400 hover:text-coolGray-800 p-2' to='/'>Home</Link> 
      <Link className='hover:bg-orange-400 hover:text-coolGray-800 p-2' to='/exercise-list'>Exercises</Link> 
      <Link className='hover:bg-orange-400 hover:text-coolGray-800 p-2' to='/new'>Add-Exercise</Link>
      <Link className='hover:bg-orange-400 hover:text-coolGray-800 p-2 mr-4' to='/routine'>Routine</Link>
    </nav>
  )
}

export default Nav