import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {


  const [userData , setUserdata] =useState({
  
    email:'',
    password:'',
  
  })
  const changeInputHandler = (e) => {
  setUserdata(prevState =>{
    return{...prevState, [e.target.name] :e.target.value}
  })
  }
  return (
  <section className='login'>
    <div className='container'>
      <h2>Sign In</h2>
      <form action="" className="form login_form">
        <p className="form_error-message">This is an error mesage </p>
       

        <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />

        <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />

       

     <button type="submit" className="btn primary">Register</button>


      </form>
      <small>Already haven't an account ?<Link to="/register">sign up</Link></small>
    </div>
  </section>
  )
}

export default Login