const express = require('express')
const router = express.Router()

const PostController = require('../controllers/posts.controller')

router.post('/insert-post', PostController.addPostData)
router.get('/', PostController.getAllPostsData)
router.get('/:postId', PostController.getPostById)
router.patch('/update-post/:postId', PostController.updatePostById)
router.delete('/delete-post/:postId', PostController.deletePostById)

module.exports = {router}