import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    name: {type:String, reqruied:true},
    prompt: {type:String, reqruied:true},
    photo: {type:String, reqruied:true},
})

const PostSchema = mongoose.model('Post', Post)

export default PostSchema