import React ,{useState, useContext, useEffect}from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail from '../images/Serene Sunrise with Deer.jpg'
import Loader from '../components/Loader'
import Delete from './Delete'
import { UserContext } from '../context/userContext'
const PostDetail = () => {
  const {id} = useParams()
const  [post, setPost] = useState(null)
const  [creatorID, setCreatorID] = useState(null)
const  [error, setError] = useState(null)
const  [isLoading, setIsLoading ] = useState(false)

const {currentUser} = useContext(UserContext)
  return (
  <section className='post-detail'>
    {error && <p className='error'>{error}</p>}
   {post && <div className="container post-detail_container">
      <div className="post-detail_header">
        {/*<PostAuthor/>*/}
       {currentUser?.id == post?.creator &&  <div className="post-detail_buttons">
          <Link to={'/posts/Werwer/edit'} className='btn sm primary'>Edit</Link>
          <Delete/>
        </div>}
      </div>
      <h1> Post Title</h1>
      <div className="post_detail_thumbnail">
        <img src="{}"alt="" />
      </div>

     
    </div>}
  </section>
  )
}

export default PostDetail