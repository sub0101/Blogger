import  BlogModel  from "../model/BlogModel.js"

export  async function createBlog(req, res) {
try{
    console.log("create Blog")
    const createdBy = req.user.id
    const{title, description , image} = req.body

    const likes = 0
    const response = await    BlogModel.create({title , description  ,image , createdBy , likes})
    return res.status(200).json(response)
}
    
catch(e){
    console.log("error")
    return res.status(404).json(e.message)
}
 }

 export async function getBlog(req, res) {

    const blogData = await  BlogModel.find({'_id': req.body.id})
    return res.json("one blog detail" +req.params.id)
}

export async function getAllBlog(req, res) {

    const allBlogs = await  BlogModel.find({})
    return res.status(200).json(allBlogs)
}


export async function deleteBlog(req, res) {

    return res.json("deleted detail")


}

export async function updateBlog(req, res) {

    return res.json("update  blog detail")

}

 export async function getNewBlogs(req , res){
console.log("getting blogs")
    let blogs = await BlogModel.find({}).sort({createdAt:-1})
    blogs = blogs.slice(0,2)
    return res.status(200).json(blogs)
}

export  async function createDraftBlog({title , description , image}) {
    try{
        console.log("create Blog")
        const createdBy = req.user.id
        const{title, description , image} = req.body
    
        const likes = 0
        const response = await    BlogModel.create({title , description  ,image , createdBy , likes})
        return res.status(200).json(response)
    }
        
    catch(e){
        console.log("error")
        return res.status(404).json(e.message)
    }
     }
    