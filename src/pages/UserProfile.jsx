import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaEdit} from "react-icons/fa"
import { FaCheck } from 'react-icons/fa'

import Avatar from '../images/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg'
const UserProfile = () => {


  const[avatar, setAvatar] = useState ('')
  return (
   <section className='profile'>
    <div className="profile_container">
      <Link to={`/myposts/sdsffv`} className='btn'>My Posts</Link>

      <div className="profile_details">
        <div className="avatar_wrapper">
          <div className="profile_avatar">
            <img src={Avatar} alt="" />
          </div>

          <form className="avatar_form">
            <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png,jpg,jpeg' />
            <label htmlFor="avatar"><FaEdit/></label>
          </form>
          <button className='profile_avatar-btn'><FaCheck/></button>
        </div>

        <h1>Ernest Achiever</h1>
      </div>
    </div>
   </section>
  )
}

export default UserProfile