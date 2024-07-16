import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar1 from '../images/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg';

const authorData = [
  {
    id: 1, avatar: Avatar1, name: 'Ernest Achiever', posts: 3
  },
  {
    id: 2, avatar: Avatar1, name: 'Jane Doe', posts: 4
  },
  {
    id: 3, avatar: Avatar1, name: 'John Smith', posts: 2
  },
  {
    id: 4, avatar: Avatar1, name: 'wwwwkkk', posts: 3
  },
  {
    id: 5, avatar: Avatar1, name: 'Michael Brown', posts: 5
  },
];

const Author = () => {
  const [authors, setAuthors] = useState(authorData);

  return (
    <section className='authors'>
      {authors.length > 0 ? (
        <div className="authors_container">
          {authors.map(({ id, name, avatar, posts }) => (
            <Link key={id} to={`/Posts/users/${id}`} className='author'>
              <div className="author_avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author_info">
                <h4>{name}</h4>
                <p>{posts} posts</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className='center'>No user found</h2>
      )}
    </section>
  );
};

export default Author;
