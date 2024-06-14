import jwt from "jsonwebtoken"



export const generateAceessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email,
    }
    const accessToken = jwt.sign(

        data,

        process.env.JWT_SECRET_KEY,
        { expiresIn: '2h' }
    )
    return accessToken
}
export const generateRefreshToken = (user) => {

    console.log("created refresh   ")
    const data = {
        email: user.email,
    }
    const refreshToken =  jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
    user.refreshToken = refreshToken
        user.save()
    return refreshToken
}
export function verifyToken(token){
try{
   return  jwt.verify(token , process.env.JWT_SECRET_KEY)
}
catch(e)
{
    // console.log(e)
    return null
} 

    
}

