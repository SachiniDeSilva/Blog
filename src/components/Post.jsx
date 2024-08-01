import React, { useEffect, useState } from 'react';

import PostItem from './PostItem';
import Loader from './Loader';



const Post = () => {
  const [posts, setPosts] = useState([]);
  const[isLoading, setIsLoading] = useEffect(false)


  useEffect(() =>{
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
        setPosts(response.data)
      } catch (err) {
        console.log(err)
      }

      setIsLoading(false)
    }
fetchPosts
  },[])
  if(isLoading){
    return <Loader/>
  }
  return (
    <section className='posts'>
       {posts.length > 0 ? <div className='posts_container'>
    {
      posts.map(({id,thumbnail,category,title,desc,authorID, createdAt}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} createdAt={createdAt}></PostItem>)
    }
    </div> : <h2 className='center'>No Post Found</h2>}
    </section>
  );
};

export default Post;
