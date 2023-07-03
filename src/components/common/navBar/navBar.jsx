import React from 'react'
import './navBarStyle.scss'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'
function NavBar() {
  return (
    <nav className='nav-bar-menu'>
      <div className="logo-header">
        <img src={Logo} alt="" />
      <h1>Astu</h1>
      </div>
      <div className="nav-links">
        <Link className='hero nav1' to='/'>Home</Link>
        <Link className='curriculum nav1' to='/curriculum'>Curriculum</Link>
        <Link className='register nav1' to='/register'>Register</Link>
        <Link className='contact-us nav1' to='/contact-us'>Contact us</Link>
        <Link className='admin nav1' to='/admin'>Admin</Link>
        
      </div>
    </nav>
  )
}

export default NavBar
