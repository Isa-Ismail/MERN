const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    post: {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
})

module.exports = mongoose.model('like', LikeSchema);