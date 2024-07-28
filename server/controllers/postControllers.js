const Post = require('../models/postModle')
const User = require('../models/userModels')
const path = require('path')
const fs = require('fs')
const {v4:uuid} = require('uuid')
const HttpError = require('../models/errorModel')
//Get all posts
const createPost = async(req, res, next) => {
    try {
        let{title, category, description} = req.body
        if(!title || !category ||!req.files ||!description
        ){
            return next(new HttpError("Fill in all fields and choose thambnail",422))
        }

        //check the file 
        if(thumbnail.size > 200000){
            return next(new HttpError("thumbnail too big. file shoud be less than 2mb."))

        }
        let fileName =thumbnail.name 
        let splittedFilename =fileName.split('.')
        let newFilename = splittedFilename[0] + uuid() + "." + splittedFilename[splittedFilename.length -1]
        thumbnail.mv(path.join(__dirname, '..', '/uploads', newFilename), async(err)=>{
            if(err){
                return next(new HttpError(err))
            }else{
              const newPost = await Post.create ({title,category,description, thumbnail:newFilename, creator:req.user.id}) 
              if(!newPost){
                return next(new HttpError("Post couldn't not create",422))
              } 
              //fine user and increate post by vount1
              const currentUser =await User.findById(req.user.id)
              const userPostCount = current.posts + 1
              await User.findByIdAndDelete(req.user.id,{posts:userPostCunt})





              resststus(201).json(newPost)
            }
        })
    } catch (error) {
        return next(new HttpError(error))
    }
}



//get a new post
const getPosts = async(req, res, next) => {
    res.json("Get all posts post")
}


//Get single post

const getPost = async(req, res, next) => {
    res.json("Get single post")
}



//Get post particular catogories
const getCatPost = async(req, res, next) => {
    res.json("Get Catogory post")
}

//get another post
const getUserpost = async(req, res, next) => {
    res.json("Get user post")
}


//Edit post
const editPost = async(req, res, next) => {
    res.json("Edit post")
}

//Delete post
const deletePost = async(req, res, next) => {
    res.json("Delete post")
}

module.exports = {createPost, getPosts,getPost, getCatPost, getUserpost, editPost, deletePost}