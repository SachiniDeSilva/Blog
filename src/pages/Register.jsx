import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {


  const [userData , setUserdata] =useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const changeInputHandler = (e) => {
  setUserdata(prevState =>{
    return{...prevState, [e.target.name] :e.target.value}
  })
  }
  return (
  <section className='register'>
    <div className='container'>
      <h2>Sign Up</h2>
      <form action="" className="form register_form">
        <p className="form_error-message">This is an error mesage </p>
        <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} autoFocus/>

        <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />

        <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />

        <input type="password" placeholder='Conform Password' name='password2' value={userData.password2} onChange={changeInputHandler} />

     <button type="submit" className="btn primary">Register</button>


      </form>
      <small>Already have an account ?<Link to="/login">sign in</Link></small>
    </div>
  </section>
  )
}

export default Register