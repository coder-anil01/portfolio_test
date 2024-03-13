import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../style/Dashbord.css'

const Dashbord = () => {
  const [admin, setAdmin] = useState(true);
  const [password, setPassword] = useState("");

  const pass = "Coderanil8987";

  const handleLogin = () => {
    try {
      if(password === pass){
        setAdmin(true)
      }else{
        setAdmin(false)
      }
    } catch (error) {
      console.log(error)
      setAdmin(false)
    }
  }

  return (
    <>
    {admin ? <Outlet/> : <div className='dashbord'>
    <h1 className='dashbord-login'>Login</h1>
    <input type="text"
    className='dashbord-input'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Enter Password' />
    <button className='homepage-button-hire' onClick={() => handleLogin()}>Login</button>
    </div>}
    </>
  )
}

export default Dashbord
