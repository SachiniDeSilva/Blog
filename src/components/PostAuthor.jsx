import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg'

const PostAuthor = () => {

<Link to={'/Posts/users/sdsffv'}>
<div className="post_author-avater">
    <img src={avatar} alt="" />
</div>
<div className="post_author-details">
    <h5>By Ernerst</h5>
    <small>Just Now</small>
</div>
</Link>
};

export default PostAuthor;
