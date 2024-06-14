const UserProfileSchema = new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId
    } ,
    phone:{
        type:String , 
        require:true
    },
    address:{
        type:String
    },
    JobProfile:{
        type:String
    }
})
export const UserProfilModel = mongoose.model("userProfile" , UserProfileSchema)