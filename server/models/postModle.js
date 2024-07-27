 const {Schema, model} = require ("mongoose")

 const postSchema = new Schema({
    title: {type: String ,required: true},
    category: {type: String ,enum:["Agriculture", "Bussiness", "Uncatogorized", "Art","Education","Weather"],message:"{VALUE is not supported}"},
    description: {type: String ,required: true},
    creater: {type: Schema.Types.ObjectId,ref: "User"},
    title: {type: String ,required: true}

 },
{timestamp:true})


module.exports = model("Post", postSchema)