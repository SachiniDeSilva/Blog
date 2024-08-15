const Post = require('../models/postModle')
const User = require('../models/userModels')
const path = require('path')
const fs = require('fs')
const {v4:uuid} = require('uuid')
const HttpError = require('../models/errorModel')
//Get all posts
const createPost = async(req, res, next) => {
    try {
        let{title, category, desc} = req.body
        if(!title || !category ||!req.files ||!desc
        ){
            return next(new HttpError("Fill in all fields and choose thambnail",422))
        }
        const {thumbnail} =req.files
        //check the file 
        if(thumbnail.size > 2000000){
            return next(new HttpError("thumbnail too big. file shoud be less than 2mb."))

        }
        let fileName =thumbnail.name 
        let splittedFilename =fileName.split('.')
        let newFilename = splittedFilename[0] + uuid() + "." + splittedFilename[splittedFilename.length -1]
        thumbnail.mv(path.join(__dirname, '..', '/uploads', newFilename), async(err)=>{
            if(err){
                return next(new HttpError(err))
            }else{
              const newPost = await Post.create ({title,category,desc, thumbnail:newFilename, creator:req.user.id}) 
              if(!newPost){
                return next(new HttpError("Post couldn't not create",422))
              } 
              //fine user and increate post by vount1
              const currentUser =await User.findById(req.user.id)
              const userPostCount = currentUser.posts + 1
              await User.findByIdAndUpdate(req.user.id,{posts: userPostCount})





              res.ststus(201).json(newPost)
            }
        })
    } catch (error) {
        return next(new HttpError(error))
    }
}



//get a new post
const getPosts = async(req, res, next) => {
   try {
    const posts = await Post.findOne.sort({updatedAt: -1})
    res.status(200).json(posts)
   } catch (error) {
    
   }
}


//Get single post

const getPost = async(req, res, next) => {
   try {
     const postid = req.params.id
     const post = await Post.findById(postId)
     if(!post){
        return next (new HttpError("Post Not Found", 404))
     }
     res.status(200).json(post)
   } catch (error) {
    return next(new HttpError(error))
   }
}



//Get post particular catogories
const getCatPost = async(req, res, next) => {
   try {
    const{category} = req.params
    const catPosts = await Post.find({category}).sort({createdAt:-1})
    req.status(200).json(catPosts)
   } catch (error) {
    return next(new HttpError(error))
   }
}

//get another post
const getUserposts = async(req, res, next) => {
  try {
    
  } catch (error) {
    return next(new HttpError(error))
  }
}


//Edit post
const editPost = async(req, res, next) => {
    res.json("Edit post")
}

//Delete post
const deletePost = async(req, res, next) => {
    res.json("Delete post")
}

module.exports = {createPost, getPosts,getPost, getCatPost, getUserposts, editPost, deletePost}