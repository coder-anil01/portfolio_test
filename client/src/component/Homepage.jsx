import React, { useEffect, useState } from 'react'
import '../style/Homepage.css'
import { FaTwitter, FaInstagram, FaLinkedinIn,FaFacebook, FaGithub } from "react-icons/fa";
import Selfipic from "../images/anil ppp.png"
import Typing from './Typing';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Homepage = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='homepage'>
    <div className="homepage-container">
      <div className='homepage-left'>
        <div className='homepage-small-text'>HEY THERE !</div>
        <div className='homepage-name'>I Am Anil</div>
        <div className='homepage-text-work'><Typing/></div>
        <div className='homepage-small-text-contact'>Contact Me For Mern Stack web App Devlopment</div>
        <div className='homepage-icons'>
          <a href='https://github.com/coder-anil01' target='_blank' rel="noreferrer" className='homepage-icon'><FaGithub/></a>
          <a href='https://www.instagram.com/anil_kumar62034' className='homepage-icon'><FaInstagram/></a>
          <a href='' className='homepage-icon'><FaLinkedinIn/></a>
          <a href='' className='homepage-icon'><FaTwitter/></a>
          <a href='' className='homepage-icon'><FaFacebook/></a>
        </div>
        <button className='homepage-button-hire'>Hire me</button>
      </div>
      {isVisible ? <img className='homepage-image' src={Selfipic} alt="profile" /> : <div className='top-arrow' onClick={() => scrollToTop()}><MdKeyboardDoubleArrowUp/></div>}
    </div>
    </div>
  )
}

export default Homepage
