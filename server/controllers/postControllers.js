
//Get all posts
const createPost = async(req, res, next) => {
    res.json("Create post")
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