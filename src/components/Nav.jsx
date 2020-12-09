import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className = 'self-end'>
      <Link to='/'>Home</Link> 
      <Link to='/exercise-list'>Exercises</Link> 
      <Link to='/new'>Add Excercise</Link>
      <Link to='/routine'>Routine</Link>
    </nav>
  )
}

export default Nav