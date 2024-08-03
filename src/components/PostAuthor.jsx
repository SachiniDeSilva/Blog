import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostAuthor = ({ authorID, createdAt }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`);
        setAuthor(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAuthor();
  }, [authorID]);

  return (
    <Link to={`/Posts/users/${authorID}`} className='post-author'>
      <div className="post_author-avatar">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="Author Avatar" />
      </div>
      <div className="post_author-details">
        <h5>By {author?.name || 'Unknown'}</h5>
        <small>{new Date(createdAt).toLocaleString()}</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
