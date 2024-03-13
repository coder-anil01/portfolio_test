import React, { useEffect, useState } from 'react'
import DashbordNavbar from '../component/DashbordNavbar'
import axios from 'axios'
import '../style/MessagesAdmin.css'

const MessagesAdmin = () => {

  const [total, setTotal] = useState(0);
  const [messages, setMessages] = useState([]);

  const getMessages = async() => {
    try {
      const {data} = await axios.post('http://localhost:8000/api/v1/contact/get', {pass: "Coder8987anil"});
      setMessages(data.messages)
      setTotal(data.total);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <>
    <DashbordNavbar/>
      <div className="dashbord-main">
        <div className="dashbord-container">
          <h2>Total Messages:- {total}</h2>
          {messages?.map((m, index) => (
            <div key={m._id} className='dashbord-card'>
              <div className='dashbord-card-number'>{index+1} .</div>
              <div className='dashbord-card-uper'>
                <div className='dashbord-card-text'><strong>Name:- </strong> {m.name}</div>
                <div className='dashbord-card-text'><strong>Email:- </strong> {m.email}</div>
                <div className='dashbord-card-text'><strong>Phone:- </strong> {m.phone}</div>
              </div>
              <div className='dashbord-card-message'><strong>S.M.S:-</strong> {m.message}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MessagesAdmin
