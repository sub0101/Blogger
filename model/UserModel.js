import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({

    name:{
        type:String , 
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
   
    password:{
        type:String ,
        require:true
    },
    userType:{
        type:String,
        id:Number,
        default:"user"
    },
    refreshToken: {type:String}

},{timestamps:true}
)





 UserSchema.statics.validatePassword =    async   function(email , password){

 try{
    console.log("validating")
    const user = await  this.findOne({email})
    console.log(user)
    if(!user) {
     return null;
    }
    const hash = user.password
   const result = await  bcrypt.compare(password, hash)
//    console.log(bcrypt.hash(password))
   if(result) return user;
   else return null
 }
 catch(e){
console.log("therer is error")
 }

        
}


const UserModel = mongoose.model("userauths" , UserSchema)


export default UserModel
