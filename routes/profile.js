const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Profile = require('../models/Profile')
const auth = require('../middleware/auth')

//@route    GET api/profile/me
//@desc     GET current user's profile
//@access   Private

router.get('/', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.body.id}).populate()

        if(!profile){
            res.status(400).json({msg:'No profile found'})
        }
    }catch(err){

    }
})

module.exports = router