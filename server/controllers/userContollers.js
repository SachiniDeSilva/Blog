
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
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
const salt = await bcrypt.genSalt(10)
const hashedPass = await bcrypt.hash(password,salt)
const newUser = await User.create({name, email: newEmail, password:hashedPass})
res.status(201).json(`new user ${newUser.email}registered.`)

    }catch(error){
        return next (new HttpError("User registration faild", 422))
    }
}



//login
const loginUser = async(req,res,next) => {
   try {
    const{email,password} =req.body;
    if(!email || !password){
        return next(new HttpError("Fill in all fields",422))
    }
    const newEmail = email.toLowerCase();
    const user = await User.findOne({email,newEmail})
    if(!user){
        return next(new HttpError("Invalid credentials.",422))
    }

    const comparePass  =await bcrypt.compare(password,user.password)


    if(!comparePass){
        return next(new HttpError("Invalid Cridentials",422) )
    }


    const{id:id, name} = user;
    const token =jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn:"id"})
    res.status(200).json({token,id,name})

   } catch (error) {
    return next (new HttpError("Login faild. please check your credentials", 422))
    
   }
}



//user profile

const getUser = async(req,res,next) => {
    try {
        const {id} = req.params
        const user = await User.findById(id).select('-password')


        if(!user){
            return next(new HttpError("User not found", 404))
        }
        res.status(200).json(user)
    } catch (error) {
        return next (new HttpError(error))
        
    }
}


//change user avater

const changeAvatar = async(req,res,next) => {
  
}


//user profile

const editUser = async(req,res,next) => {
    res.json("Edit user detail")
}

//get user profile 

const getAuthors = async(req,res,next) => {
    try {
        const authors =await User.find().select('-password');
        res.json(authors)
       } catch (error) {
        return next(new HttpError(error))
       }
}



module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}