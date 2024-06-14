import jwt from "jsonwebtoken"
import UserModel from "../../model/UserModel.js";
export const refreshTokenControler = async (req, res) => {

    const cookies=req.cookies
    console.log(cookies)
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;


    const foundUser =  await UserModel.findOne({ refreshToken })
    if (!foundUser) return res.sendStatus(403); 
  
    jwt.verify(
        refreshToken,   
        process.env.JWT_SECRET_KEY,         
        (err, decoded) => {
        
            if (err || foundUser.email!== decoded.email) return res.sendStatus(403);

            const data = {name:decoded.name , email:jwt.decode.email}
            const accessToken = jwt.sign(
                
                    data
                ,
                process.env.JWT_SECRET_KEY,
                { expiresIn: '2h' }
            );
        
            res.json({"token":accessToken })
        }
    );
}

