
import express from "express"
import { createBlog ,deleteBlog , updateBlog , getBlog , getAllBlog, createDraftBlog } from "../controllers/blogController.js"
import { getNewBlogs } from "../controllers/blogController.js"

const blogRouter = express.Router()


blogRouter.route("/").get( getNewBlogs) 
blogRouter.route("/blogs").get(getAllBlog)
blogRouter.route("/blog_detail/:id").get(getBlog)
blogRouter.route("/create_blog").post(createBlog)
blogRouter.route("/update_blog/:id").put(updateBlog)
blogRouter.route("/delete_blog/:id").delete(deleteBlog)
blogRouter.route("/createDraftBlog").post(createDraftBlog)



export default blogRouter