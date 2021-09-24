import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    date: Date,
    gender: String,
    salary: Number
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
