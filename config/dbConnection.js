import mongoose from "mongoose"


export async function connectDb(url){
    try{
        await mongoose.connect(url)
        console.log("connected")
    }
    catch(err){
console.log(`error ${err}`)
    }

}
