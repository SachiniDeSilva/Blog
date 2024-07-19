const User = require('../models/userModels')


const HttpError = require("../models/errorModel");

const registerUser = async (req,res,next) => {
    try{
const{
    name, email,password,password2
} =req.body;
if(!name ||!email || !password){
return next(new HttpError("Fill in all fields",422))
}
const newEmail = email.toLowerCase()
const emailExists= await User.findOne({email:newEmail})
if(emailExists){
return next(new HttpError("Email already exists,", 422))
}

if((password.trim()).length < 6){
    return next (new HttpError("Password Should be atleast 6 characters",422))
}


if(password != password2){
    return next(new HttpError("Password do not match",422))
}

    }catch(error){
        return next (new HttpError("User registration faild", 422))
    }
}



//login
const loginUser = async(req,res,next) => {
    res.json("Login User")
}



//user profile

const getUser = async(req,res,next) => {
    res.json("Get User")
}


//change user avater

const changeAvatar = async(req,res,next) => {
    res.json("Change use Avatar")
}


//user profile

const editUser = async(req,res,next) => {
    res.json("Edit user detail")
}

//get user profile 

const getAuthors = async(req,res,next) => {
    res.json("Get All User")
}



module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}