import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import { Dummy_post } from '../data';

const CategoryPost = () => {
  const [posts, setPosts] = useState(Dummy_post);



  return (
    <section className='category_posts'>
      {posts.length > 0 ? (
        <div className='category_container'>
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : 
        <h2 className='center'>No Post Found</h2>
      }
    </section>
  );
};

export default CategoryPost;
