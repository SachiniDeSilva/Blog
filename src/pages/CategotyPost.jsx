import React, { useState, useEffect } from 'react'
import PostItem from '../components/PostItem'
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryPost = () => {


  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Corrected useState

const {category} = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`);
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };

    fetchPosts(); // Call the fetchPosts function
  }, [category]);

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
    </section> )
}

export default CategoryPost