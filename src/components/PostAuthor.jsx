import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg';
import { Dummy_post } from '../data';

const PostAuthor = ({createdAt}) => {
  return (
    <Link to={'/Posts/users/sdsffv'} className='post-author'>
      <div className="post_author-avatar">
        <img src={avatar} alt="Author Avatar" />
      </div>
      <div className="post_author-details">
        <h5>By Ernerst</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
