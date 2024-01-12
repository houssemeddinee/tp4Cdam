const Post = require('../models/post');

exports.addPost = async (req, res) => {
    const { offerId, userId, offerImage, offerName, offerStartDate, offerDesc, offerPrice, offerQuantity, offerEndDate } = req.body;
    const post = new Post(
        { offerId, userId, offerImage, offerName, offerStartDate, offerDesc, offerPrice, offerQuantity, offerEndDate });

    await post.save();
    res.json({ status: true, message: 'add List test ', data: post });
};

exports.getPost = async (req, res) => {

    const post = await Post.find({});


    res.json({
        "message": "",
        "code": 200, data: post
    });
};