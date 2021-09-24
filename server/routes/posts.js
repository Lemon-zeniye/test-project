import express from 'express';
import { getPosts, createPosts, updatePost, deletePost } from '../controller/posts.js';

const router = express.Router();

//localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
