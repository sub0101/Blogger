import  BlogModel  from "../model/BlogModel.js"

export  async function createBlog(req, res) {
try{
    console.log("create Blog")
    const createdBy = req.user.id
    const{title, content, image} = req.body

    const likes = 0
    const response = await    BlogModel.create({title , content  ,image , createdBy , likes})
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
console.log(req.params.id)
    const blog = await BlogModel.deleteOne({_id:req.params.id})

  if (blog) {
    // await blog.remove();
    console.log(blog)
   return  res.json({ message: 'Blog removed' });
  } else {  
    res.status(404);
    throw new Error('Blog not found');
  }
return res.status(402)

}

export async function updateBlog(req, res) {
    try{
        const { title, content } = req.body;
        const blog = await BlogModel.findById(req.params.id);
      
        if (blog) {
          blog.title = title || blog.title;
          blog.content = content || blog.content;
      
          const updatedBlog = await blog.save();
          res.json(updatedBlog);
        } else {
       
          throw new Error('Blog not found');
        }
      
    }
    catch(e){
        return res.status(401).json({message:"blog not found"})

    }

   
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
    