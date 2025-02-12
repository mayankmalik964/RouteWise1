const mongoose=require('mongoose');
const becrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unque:true
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('User',userSchema);