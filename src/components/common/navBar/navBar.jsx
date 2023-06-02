import React from 'react'
import './navBarStyle.scss'
function NavBar() {
  return (
   <nav>
    <h1>Astu</h1>
    <div className="nav-links">
        <a href="">Home</a>
        <a href="">Curriculum</a>
        <a href="">Register</a>
        <a href="">Contact us</a>
    </div>
   </nav>
  )
}

export default NavBar
