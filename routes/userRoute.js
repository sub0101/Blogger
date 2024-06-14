import express from "express"
import loginControler from "../controllers/auth/login.js"
import signupController from "../controllers/auth/register.js"
import {refreshTokenControler}  from "../controllers/auth/refreshTokenController.js"
import { logoutController } from "../controllers/auth/logout.js"
const userRouter  = express.Router()

userRouter.route("/login").post( loginControler)
userRouter.route("/refresh").get(refreshTokenControler)
userRouter.route("/signup").post(signupController)
userRouter.route("/logout").get(logoutController)
export default userRouter