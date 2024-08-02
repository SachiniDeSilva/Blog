import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dummy_post } from '../data';
import { axios } from 'axios';

const PostAuthor = ({authorID,createdAt}) => {
  const [author,setAuthor] = useState({})

useEffect(()=>{
  try {
    const getAuthor =  axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`)
    setAuthor(response?.data)
  } catch (error) {
    console.log(error)
  }
  getAuthor()
})



  return (
    <Link to={'/Posts/users/sdsffv'} className='post-author'>
      <div className="post_author-avatar">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="Author Avatar" />
      </div>
      <div className="post_author-details">
        <h5>By Ernerst</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
