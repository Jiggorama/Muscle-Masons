import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>      
      <Link to='/new'>Add Excercise</Link>
      <Link to='/routine'>Routine</Link>
    </nav>
  )
}

export default Nav