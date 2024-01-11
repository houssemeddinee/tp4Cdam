const mongoose = require('mongoose');





const postSchema = new mongoose.Schema({
  offerId: {
    type: String,

  },
  userId: {
    type: String,
  },

  offerImage: {
    type: String,

  }, offerName: {
    type: String,

  }, offerStartDate: {
    type: String,

  },
  offerDesc: {
    type: String,

  },
  offerPrice: {
    type: String,

  },
  offerQuantity: {
    type: String,

  },
  offerEndDate: {
    type: String,

  },
},);

//!('save')m3natha kima ndir save fi ay blasa kima createUser.save(); tkhdam hadi ldir encrypting 



const Post = mongoose.model('Post', postSchema);

module.exports = Post;
