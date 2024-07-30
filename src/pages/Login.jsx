import React, { useState , useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'



import { UserContext } from '../context/userContext'

const Login = () => {


  const [userData , setUserdata] =useState({
  
    email:'',
    password:'',
  
  })

  const [error,setError] = useState("")
  const navigate = useNavigate()
const {setCurrentUser} = useContext(UserContext)


  const changeInputHandler = (e) => {
  setUserdata(prevState =>{
    return{...prevState, [e.target.name] :e.target.value}
  })
  }



  const loginUser = async(e) =>{
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData)
      const user = await response.data
      setCurrentUser(user)
      navigate('/')
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
  <section className='login'>
    <div className='container'>
      <h2>Sign In</h2>
      <form action="" className="form login_form" onSubmit={loginUser}>
        {error &&<p className="form_error-message">{error}</p>}
       

        <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />

        <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />

       

     <button type="submit" className="btn primary">Sign In</button>


      </form>
      <small>Already haven't an account ?<Link to="/register">sign up</Link></small>
    </div>
  </section>
  )
}

export default Login