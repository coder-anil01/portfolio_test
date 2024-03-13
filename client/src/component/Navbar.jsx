import React, { useRef, useState } from 'react'
import Navlogo from "../images/Navlogo.png"
import { NavLink } from 'react-router-dom'
import About from '../pages/About';
import Homepage from './Homepage';
import Services from '../pages/Services';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const home = useRef();
  const about = useRef();
  const skills = useRef();
  const services = useRef();
  const blogs = useRef();
  const contact = useRef();
  const[menuopen, setMenuopen] = useState(false);

  const scrollHandler = (elementRef) => {
    setMenuopen(false)
    window.scrollTo({
      top: elementRef.current.offsetTop - 70,
      behavior: 'smooth'
    })
  }

    return (
    <>
    <div className='navbar'>
    <div className="navbar-container">
      <img className='navbar-image' src={Navlogo} alt="Navlogo" />
      <div className='navbar-item-box'>
        <NavLink onClick={() => scrollHandler(home)} >Home</NavLink>
        <NavLink onClick={() => scrollHandler(about)} >About</NavLink>
        <NavLink onClick={() => scrollHandler(skills)} >Skills</NavLink>
        <NavLink onClick={() => scrollHandler(services)} >Service</NavLink>
        <NavLink onClick={() => scrollHandler(blogs)} >Blogs</NavLink>
        <NavLink onClick={() => scrollHandler(contact)} >Contacts</NavLink>
      </div>
      <div className="navbar-menu">
      {menuopen ?
      <div onClick={() => setMenuopen(false)} className='res-navbar-menu-cross'><IoClose/></div> :
      <div onClick={() => setMenuopen(true)} className='res-navbar-menu'><IoMenu/></div>}
      </div>
    </div>
    </div>

    <div>
    </div>
    {menuopen &&
      <div className='res-navbar-item-box'>
        <NavLink onClick={() => scrollHandler(home)} >Home</NavLink>
        <NavLink onClick={() => scrollHandler(about)} >About</NavLink>
        <NavLink onClick={() => scrollHandler(skills)} >Skills</NavLink>
        <NavLink onClick={() => scrollHandler(services)} >Service</NavLink>
        <NavLink onClick={() => scrollHandler(blogs)} >Blogs</NavLink>
        <NavLink onClick={() => scrollHandler(contact)} >Contacts</NavLink>
      </div>}

      <div>
      <div ref={home}><Homepage /></div>
      <div ref={about}><About /></div>
      <div ref={skills}><Skills /></div>
      <div ref={services}><Services /></div>
      <div ref={blogs}><Blogs /></div>
      <div ref={contact}><Contact /></div>
    </div>
    
    </>
  )
}

export default Navbar
