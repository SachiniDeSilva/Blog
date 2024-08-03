import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

import PostItem from './PostItem';
import Loader from './Loader';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Corrected useState

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };

    fetchPosts(); // Call the fetchPosts function
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className='posts'>
      {posts.length > 0 ? (
        <div className='posts_container'>
          {posts.map(({ _id:id, thumbnail, category, title, desc, creator, createdAt }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={creator}
              createdAt={createdAt}
            />
          ))}
        </div>
      ) : (
        <h2 className='center'>No Post Found</h2>
      )}
    </section>
  );
};

export default Post;
