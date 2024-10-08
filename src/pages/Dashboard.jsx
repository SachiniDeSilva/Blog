import React, { useState ,useEffect, useContext} from 'react'
import { Dummy_post } from '../data'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {


  const [posts, setPosts] = useState (Dummy_post)


  const navigate = useNavigate
const {currentUser} = useContext(UserContext)
const token = currentUser?.token


//redirect to login page for any user who isn't logged in 
useEffect(()=>{
  if(!token){
    navigate('/login')
  }
},[])
  return (
   <section className='dashboard'>
{
  posts.length ? <div className=" dashboard_container">

    {
      posts.map(post => {
        return <article key={post.id} className='dashboard_post'>
          <div className="dashboard_post-info">
            <div className="dashboard_post-thumbnail">
              <img src={post.thumbnail} alt="" />
            </div>

<h5>{post.title}</h5>

          </div>
          <div className="dashboard_post-actions">
            <Link to={`/posts/${post.id}`} className='btn sm'>View</Link>
            <Link to={`/posts/${post.id}/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/${post.id}/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </article>
      })
    }

  </div> : <h2 className='center'> Oops! you have no posts</h2>
}
   </section>
  )
}

export default Dashboard