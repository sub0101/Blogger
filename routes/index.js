
import express from "express"
import {homeControler ,detail} from "../controllers/index.js"


const mainrouter = express.Router()


mainrouter.route("/").get(homeControler)
mainrouter.route("/login").post()

export default mainrouter