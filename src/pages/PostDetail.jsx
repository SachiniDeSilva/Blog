import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail from '../images/Serene Sunrise with Deer.jpg'

const PostDetail = () => {
  return (
  <section className='post-detail'>
    <div className="container post-detail_container">
      <div className="post-detail_header">
        <PostAuthor/>
        <div className="post-detail_buttons">
          <Link to={'/posts/Werwer/edit'} className='btn sm primary'>Edit</Link>
          <Link to={'/posts/Werwer/delete'} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1> Post Title</h1>
      <div className="post_detail_thumbnail">
        <img src={thumbnail} alt="" />
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo earum dolores explicabo, dolore, quas officia nesciunt architecto hic, inventore nihil! Laborum, amet! Libero eum rerum ullam possimus distinctio culpa?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis odio repellat nihil molestias atque molestiae porro explicabo quam aut.</p>

    </div>
  </section>
  )
}

export default PostDetail