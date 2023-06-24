import React from 'react'
import './navBarStyle.scss'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <nav>
      <h1>Astu</h1>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/curriculum'>Curriculum</Link>
        <Link to='/register'>Register</Link>
        <Link to='/contact-us'>Contact us</Link>
        <Link to='/admin'>Admin</Link>
        
      </div>
    </nav>
  )
}

export default NavBar
