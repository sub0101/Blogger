import mongoose, { Schema, mongo } from "mongoose";

const BlogSchema = new  mongoose.Schema(
    {
        title:{
            type:String ,
            require:true,
         
        },
        content:{
            type:String , 
            require:true
        },
        image:{
            type:String,
            
        },
            createdBy:{type:mongoose.Schema.Types.ObjectId}       , 
        contributedBy:{type:mongoose.Schema.Types.ObjectId},
        likes: { type:Number}
    }
    ,{timestamps:true}
)

const BlogModel = mongoose.model( "blog",BlogSchema)
export default BlogModel