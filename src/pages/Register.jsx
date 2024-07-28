import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {


  const [userData , setUserdata] =useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate
  const changeInputHandler = (e) => {
  setUserdata(prevState =>{
    return{...prevState, [e.target.name] :e.target.value}
  })
  }

  const registerUser = async() => {
e.preventDefault()
setError('')
try {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/`)
} catch (err) {
  setError(err.response.data.message)
}
  }
  return (
  <section className='register'>
    <div className='container'>
      <h2>Sign Up</h2>
      <form action="" className="form register_form" onSubmit={registerUser}>
       {error && <p className="form_error-message">{error}</p>}
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