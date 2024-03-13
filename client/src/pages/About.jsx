import React, { useState } from 'react'
import '../style/About.css'
import Aboutimage from '../images/anil ppp.png'

const About = () => {

  const [abouttogal, setAbouttogal] = useState('a')

  return (
    <div className='about'>
    <div className='about-heading'>ABOUT ME</div>
    <div className='about-container'>
      <div className="about-left">
        <img className='about-left-image' src={Aboutimage} alt="profile" />
      </div>
      <div className="about-right">
        <div className='about-title'>Aspiring Full Stack Web Developer adept in front-end and back-end technologies. Eager to apply skills in HTML, CSS, JavaScript, Node.js, and MongoDB to create seamless and engaging web applications.</div>

          <div className="about-button-container">
            <div className={abouttogal === 'a' ? 'about-active-button' : 'about-button-card'} onClick={()=> setAbouttogal('a')}>About Me</div>
            <div className={abouttogal === 'b' ? 'about-active-button' : 'about-button-card'} onClick={()=> setAbouttogal('b')}>Education</div>
          </div>
          {abouttogal === "a" ? <>
            <div className='about-me'>
            <div><strong>Name:- </strong>Anil Kumar</div>
            <div><strong>Email:- </strong>anilkrmac83@gmail.com</div>
            <div><strong>Phone:- </strong>6203493183</div>
            <div><strong>Address:- </strong>India, Bihar, Vaishali</div>
            <div><strong>Zip Code:- </strong>844505</div>
            <div><strong>Date Of Birth:- </strong>05-04-2002</div>
          </div>
          </> : <>
          <div className='about-education'>
            <p><strong>10th:- </strong> <div> Genaral </div>Janta High School Hariprasad Murtuzapur</p>
            <p><strong>12th:- </strong> <div> Science </div> M.S.M Samta College</p>
            <p><strong>ITI:- </strong> <div> Electronics </div> M.S.M Samta College</p>
            <p><strong>Graduation</strong> <div> BCA </div> William Carey University, Shillong</p>
          </div>
          </>}
      </div>
    </div>
    </div>
  )
}

export default About
