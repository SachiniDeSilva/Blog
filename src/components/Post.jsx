


import React, { useState } from 'react'
import thumbnail1 from '../images/Serene Sunrise with Deer.jpg'
import PostItem from './PostItem'

const Dummy_post =[
    {
        id:'1',
        thumbnail:thumbnail1,
        category:'education',
        title:'This is the title',
        desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
        authorID:3

    },
]



const Post = () => {

    const [posts, setPosts] = useState(Dummy_post)
  return (
   <section className='post'>
    {
        posts.map((id,thumbnail, category ,title, desc, authorID) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} desc={desc} authorID={authorID}/>)
    }

   </section>
  )
}

export default Post