const registerUser = (req,res,next) => {
    res.json("Register User")
}



//login
const loginUser = (req,res,next) => {
    res.json("Login User")
}



//user profile

const getUser = (req,res,next) => {
    res.json("Get User")
}


//change user avater

const changeAvatar = (req,res,next) => {
    res.json("Change use Avatar")
}


//user profile

const editUser = (req,res,next) => {
    res.json("Edit user detail")
}

//get user profile 

const getAuthors = (req,res,next) => {
    res.json("Get All User")
}



module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}