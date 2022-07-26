import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout}) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li><Link to="/lectures">Home</Link></li>
            <li><Link to="/add-lecture">Add Lecture</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
