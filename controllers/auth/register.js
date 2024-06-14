import  UserModel  from "../../model/UserModel.js"
import bcrypt from "bcrypt"
async  function signupController(req, res){

const {name , email, password} = req.body
try{
    console.log("inside register");
   
  const salt = await bcrypt.genSalt(10);    
   const  hash_password  = await bcrypt.hash(password, salt)
    const reply = await UserModel.create({name , email, password:hash_password});
    if(!reply) return null;

   
}
catch(e){
    console.log(e)
    return res.status(403).json({"error":"something is wrong"})
}


return res.status(200).json({"message":"succesfulll created"})

}
export default signupController