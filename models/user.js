const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Cheatsheet mongoDB: https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

module.exports = mongoose.model('user', userSchema)


