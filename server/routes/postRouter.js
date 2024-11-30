const express = require('express');
const router= express.Router();
const porstController = require('../controller/postController')



router.post('/post',porstController.postDatas);
router.get('/one-post/:postId',porstController.getPosts);
router.get('/get-posts',porstController.getAllPosts);

//update 
router.post('/update-post',porstController.updatePost);
router.delete('/delete-post',porstController.deletePost)


module.exports = router;