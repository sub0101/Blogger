
import env from "dotenv"
import express from "express"
import blogRouter from "./routes/blogRoute.js"
import userRouter from "./routes/userRoute.js"
import { connectDb } from "./config/dbConnection.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { verifyUser } from "./middlewares/verifyjwt.js"
import http from "http"
import credentials from "./middlewares/credentials.js"

const app = express()
const server = http.createServer(app)
app.use(credentials)
app.use(cors({origin:"http://localhost:5173" ,
optionsSuccessStatus: 200,
preflightContinue: false,
methods: "GET,POST,OPTIONS",
credentials: true}))


env.config()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())
app.use("/auth" , userRouter)
app.use(verifyUser)
app.use("/"  , blogRouter)



connectDb("mongodb://127.0.0.1:27017/blogsDb")

server.listen(8000 , ()=> console.log("server is listening"))