import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedinIn,FaFacebook, FaGithub } from "react-icons/fa";
import Navlogo from "../images/Navlogo.png"
import '../style/Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-card'>
          <img className='footer-logo' src={Navlogo} alt="Profile-logo" />
          <div className='footer-icon'>
            <Link to='https://github.com/coder-anil01' target='_blank' rel="noreferrer"><FaGithub/></Link>
            <Link to='https://www.instagram.com/anil_kumar62034' target='_blank' rel="noreferrer"><FaInstagram/></Link>
            <Link to=''><FaFacebook/></Link>
            <Link to=''><FaLinkedinIn/></Link>
            <Link to=''><FaTwitter/></Link>
          </div>
        </div>
        <div className='footer-card'>
          <div className='footer-m-title'>My Services</div>
            <p>Website Creating</p>
            <p>Website Seo</p>
            <p>Debuding</p>
        </div>
        <div className='footer-card'>
          <div className='footer-m-title'>Contact Me</div>
            <Link to=''><FaLocationDot/> India, Bihar, Vaishali</Link>
            <Link to="mailto:anilkumar62034mack@gmail.com"><MdEmail/> anilkumar62034mack@gmail.com</Link>
            <Link to="tel:+916203493183"><FaPhoneAlt/> +91 6203493183</Link>
        </div>
      </div>
      <div className='footer-buttom'>
        <Link to='/privacyPolicy'>privacy policy</Link>
        <Link to='/deliveryPolicy'>Delivery Policy</Link>
        <Link to='/refundPolicy'>Refund Policy</Link>
        <Link to='/termsandConditions'>Terms and Conditions</Link>
      </div>
    </div>
  )
}

export default Footer
