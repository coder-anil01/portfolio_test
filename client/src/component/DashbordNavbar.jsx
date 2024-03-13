import React from 'react'
import { NavLink } from 'react-router-dom'
import Navlogo from "../images/Navlogo.png"

const DashbordNavbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' className='navbar-image-card'><img className='navbar-image' src={Navlogo} alt="Navlogo" /></NavLink>
      <div className='navbar-item-box'>
        <NavLink to='/admin' className='navbar-item'>Messages</NavLink>
        <NavLink to='/admin/blog' className='navbar-item'>Blogs</NavLink>
        <NavLink to='/admin/services' className='navbar-item'>Service</NavLink>
      </div>
    </div>
  )
}

export default DashbordNavbar
