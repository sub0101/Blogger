// import { response, response } from "express"
import UserModel from "../../model/UserModel.js"
import { generateAceessToken , generateRefreshToken } from "../../services/tokenGenerator.js"

async function loginControler(req, res) {

    const { email, password } = req.body


    try {

        const foundUser = await UserModel.validatePassword(email, password)
        if (foundUser) {
            const accessToken = generateAceessToken(foundUser)
            const refreshToken = generateRefreshToken(foundUser)
            res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge:  24*60*60*1000 });

            console.log(req.cookies)

            const response = { name: foundUser.name, id: foundUser._id, email: foundUser.email , token: accessToken}

            return res.status(200).json({ "messsage": "Login Successfully", userData: response, success: true })
        }
        else {
            return res.status(401).json({ message: "user not found", success: false })

        }
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({ message: "server error" })
    }

}


export default loginControler

