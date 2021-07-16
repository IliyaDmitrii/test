import Post from "../Post.js";
import axios from "axios";

class PostController{
    // post
    async create(req,res){
        try{
            const {author,title,content} = req.body
            const post = await Post.create({author,title,content})
            res.json(post)
        }catch (e){
            res.status(500).json(e);
        }
    }
    // get
    async getAll(req,res){
        try{
            const posts = await Post.find()
            return res.json(posts)
        }catch (e){
            res.status(500).json(e);
        }
    }
    // get/id
    async getOne(req,res){
        try{
            const {id} = req.params
            if(!id) {
                res.json(400).json({message : 'Id not specified '})
            }
            const post = await Post.findById(id)
            return res.json(post)
        }catch (e){
            res.status(500).json(e);
        }
    }
    // put(update)
    async edit(req,res){
        try{
            const post = req.body
            if(!post._id){
                throw new Error('Post not found')
            }
            const updatePost =  await Post.findByIdAndUpdate(post._id,post,{new: true})
            return res.json(updatePost);
        }catch (e){
            res.status(500).json(e);
        }
    }
    async remote(req,res){
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(function(response) {
                res.send(JSON.stringify(response.data,null,'\n'))
            }).catch(function(error) {
            res.json("Error !")
        })
    }
}

export default new PostController();