import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
  <section className='post-detail'>
    <div className="container post-detail_container">
      <div className="post-detail_header">
        <PostAuthor/>
        <div className="post-detail_buttons">
          <Link to={'/posts/Werwer/edit'} className='btn sm primary'>Edit</Link>
          <Link to={'/posts/Werwer/delete'} className='btn sm primary'>Delete</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PostDetail