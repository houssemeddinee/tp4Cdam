const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');



router.post("/post", postController.addPost);
router.get("/post", postController.getPost);





//! li rahom bl 7mar mzlt mabedelthomh 




module.exports = router;
