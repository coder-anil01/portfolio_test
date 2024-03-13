import React, { useState } from 'react'
import '../style/Contact.css'
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import Contactimg from '../images/contact.jpeg'
import { Modal } from "antd";
import Rightimage from '../images/right.png'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // const {data} = await axios.post('https://coderanilblog.onrender.com/api/v1/contact/create', {name, phone, email, message:description});
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setIsModalOpen(true)
      setTimeout(() => {
        setIsModalOpen(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <>
    <div className='about-heading'>GET IN TOUCH</div>
    <div className='contact'>
      <div className='contact-container'>
        <div>
          <img className='contact-image' src={Contactimg} alt="contact" />
        </div>
        <form onSubmit={handleSubmit} className='inpute-filds'>
          <div className='contact-icon-input'><div className='contact-icon'><FaUser/></div>
            <input type="text"
              className='contact-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
              required
              />
          </div>
          <div className='contact-icon-input'><div className='contact-icon'><FaPhoneAlt/></div>
            <input type="Number"
              className='contact-input'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Your Phone Number'
              required
            />
          </div>
          <div className='contact-icon-input'><div className='contact-icon'><MdEmail/></div>
            <input type="email"
              className='contact-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
              required
              />
          </div>
          <div className='contact-icon-textarea'><div className='contact-icon'><TfiWrite/></div>
            <textarea type="text"
              className='contact-textarea'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Type Your Message... '
              required
              />
          </div>
          <button className='contact-page-submit homepage-button-hire ' type='submit'>SEND</button>
        </form>
      </div>
      <Modal className='contact-model' open={isModalOpen} maskClosable={false} footer={null} onCancel={()=> setIsModalOpen(false)}>
        <div className='contact-model-thanks'>Thanks,</div>
        <div className='contact-tick-card'>
          <img className='contact-tick' src={Rightimage} alt="" />
        </div>
        <div className='contact-m-title text-success'>Your Post Send Successfully</div> 
        <div className="contact-m-title">I Will Contact You Soon... </div>
        </Modal>
    </div>
    </>
  )
}

export default Contact
