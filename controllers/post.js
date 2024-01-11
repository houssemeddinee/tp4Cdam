const Post = require('../models/post');

exports.addPost = async (req, res) => {
    const { offerId, userId, offerImage, offerName, offerDateCreated } = req.body;
    const post = new Post(
        { offerId, userId, offerImage, offerName, offerDateCreated });

    await post.save();
    res.json({ status: true, message: 'get List test ' });
};

exports.getPost = async (req, res) => {

    const post = await Post.find({});


    res.json({
        "message": "",
        "code": 200, data: post
    });
};