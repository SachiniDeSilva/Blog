import React, { useState ,useContext, useEffect} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {UserContext} from '../context/userContext'
import {useNavigate, }from 'react-router-dom'



const CreatePost = () => {

const[title, setTitle] = useState ('')
const [category , setCategory] =useState ('Uncategory')
const[description, setDescription] = useState ('')
const [thumbnail, setThumbnail] = useState('')

const navigate = useNavigate
const {currentUser} = useContext(UserContext)
const token = currentUser?.token


//redirect to login page for any user who isn't logged in 
useEffect(()=>{
  if(!token){
    navigate('/login')
  }
},[])

const modules ={
  toolbar:[
    [{'header':[1,2,3,4,5,6 ,false]}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bulet'}, {'indent': '-1'}, {'indent': '+1'}]
  ]
}

const formats =[
  'header',
  'bold', 'italic', 'underline','strtke', 'blockquote',
  'list','builet' , 'indent',
  'link','image'
]

const POst_categories =[
"Agriculture", "Education", "Bussiness", "Art", "Weather", "Uncategorized"
]










  return (
   <section className='create_post'>
    <div className="container create_container">
      <h2>Create Post</h2>
      <p className="form_error-message">
        This is an error message
      </p>

      <form  className="form create-post_form">

        <input type='text' placeholder='Title' value={title} onChange={e=> setTitle(e.target.value) } autoFocus/>

        <select name='category' value={category} onChange={e=> setCategory(e.target.value)}>
          {
POst_categories.map(cat => <option key={cat}>{cat}</option>)
          }
          
        </select>

        <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
          <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'></input>
          <button type='submit' className='btn primary'> Create </button>
      </form>
    </div>

   </section>
  )
}

export default CreatePost