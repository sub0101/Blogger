import express from "express"
import { verifyToken } from "../services/tokenGenerator.js";

export const verifyUser  = (req , res , next) =>
{
    console.log("checking user")
    let token =   req.headers.authorization || req.headers.Authorization;
    console.log(token)
    console.log(req.cookies)
 if(token=="") return res.sendStatus(401)
 if (!token?.startsWith('Bearer ')) return res.sendStatus(401)
    token = token.split(' ')[1];
    // console.log(process.env.JWT_SECRET_KEY )
   const data =  verifyToken(token)
   if(!data) return res.sendStatus(401)
req.user = data
   console.log("successfull")
    next()   
}