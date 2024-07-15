import React, { useState } from 'react';

import PostItem from './PostItem';
import {Dummy_post} from '../data'



const Post = () => {
  const [posts, setPosts] = useState(Dummy_post);
  
  return (
    <section className='posts'>
       {posts.length > 0 ? <div className='posts_container'>
    {
      posts.map(({id,thumbnail,category,title,desc,authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}></PostItem>)
    }
    </div> : <h2 className='center'>No Post Found</h2>}
    </section>
  );
};

export default Post;
