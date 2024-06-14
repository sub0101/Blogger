import UserModel from "../../model/UserModel.js";

export const logoutController = async (req ,res)=>
    {
        console.log("logout")
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;
    const foundUser = await UserModel.findOne({ refreshToken })
    if (!foundUser) {
 
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }
    foundUser.refreshToken = ''
    foundUser.save()

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    console.log("cleared cookie")
    res.sendStatus(204);
    }