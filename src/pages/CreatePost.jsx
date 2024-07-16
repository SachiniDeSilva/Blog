import React, { useState } from 'react'

const CreatePost = () => {

const[title, setTitle] = useState ('')
const [category , setCategory] =useState ('Uncategory')
const[description, setDescription] = useState ('')

const [thumbnail, setThumbnail] = useState('')


const modules ={
  toolbar:[
    [{'header':[1,2,false]}],
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
    <div className="container">
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
          <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'></input>
          <button type='submit' className='btn primary'> Create </button>
        </select>
      </form>
    </div>

   </section>
  )
}

export default CreatePost