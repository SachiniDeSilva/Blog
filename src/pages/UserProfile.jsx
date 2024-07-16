import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaEdit} from "react-icons/fa"
import { FaCheck } from 'react-icons/fa'

import Avatar from '../images/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg'
const UserProfile = () => {


  const[avatar, setAvatar] = useState (Avatar)

  const [name, setName] =useState ('')
  const [email, setEmail] =useState ('')
  const [currentPassword, setCurrentPassword] =useState ('')
  const [newPassword, setNewPassword] =useState ('')
  const [confirmNewPassword, setConfirmNewPassword] =useState ('')

  return (
   <section className='profile'>
    <div className=" container profile_container">
      <Link to={`/myposts/sdsffv`} className='btn'>My Posts</Link>

      <div className="profile_details">
        <div className="avatar_wrapper">
          <div className="profile_avatar">
            <img src={avatar} alt="" />
          </div>

          <form className="avatar_form">
            <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png,jpg,jpeg' />
            <label htmlFor="avatar"><FaEdit/></label>
          </form>
          <button className='profile_avatar-btn'><FaCheck/></button>
        </div>

        <h1>Ernest Achiever</h1>





        <form className='form profile_form container'>
          <p className='form_error-message'> This is the error message</p>
          <input type='text' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
          <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type='password' placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
          <input type='password' placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
          <input type='password' placeholder='Confirm new Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>

          <button type='submit' className='btn primary'>Update details</button>
        </form>
      </div>
    </div>
   </section>
  )
}

export default UserProfile