const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const User = require('../models/User')
const Profile = require('../models/Profile')
const auth = require('../middleware/auth')

//@route    GET api/profile/me
//@desc     GET current user's profile
//@access   Private

router.get('/me', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.body.id}).populate('user', [ 'name', 'avatar' ])

        if(!profile){
            return res.status(400).json({msg:'No profile found'})
        }

        res.json(profile)
    }catch(err){
        res.status(500).send(`Server issue`)
    }
})

//@route    POST api/profile/me
//@desc     CREATE or UPDATE current user's profile
//@access   Private

router.post('/', [
    check('status', 'status is required').not().isEmpty(),
    check('skills', 'skills are required ').not().isEmpty()
], auth, async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    // destructure the request
    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook
      } = req.body

      const profileFields = {};
      
      //@ building profile with request object sent by our clients
      profileFields.user = req.user.id
      if(company){profileFields.company = company}
      if(website){profileFields.website = website}
      if(location){profileFields.location = location}
      if(bio){profileFields.bio = bio}
      if(status){profileFields.status = status}
      if(githubusername){profileFields.githubusername = githubusername}
      if(skills){profileFields.skills = skills.split(',').map(e => e.trim())}

      //@ Creating social profile object
      profileFields.social = {}
      if(youtube){profileFields.social.youtube = youtube}
      if(facebook){profileFields.social.facebook = facebook}
      if(instagram){profileFields.social.instagram = instagram}
      if(twitter){profileFields.social.twitter = twitter}
      if(linkedin){profileFields.social.linkedin = linkedin}

      try{
          let profile = await Profile.findOne({user: req.user.id})
          console.log(profile)
          if(profile){
              console.log('1')
              //@ update
              profile = await Profile.findOneAndUpdate({user: req.user.id}, {$set:profileFields}, {new: true})
              return res.json(profile)
          }else{
              console.log('0')    
              //@create
              profile = new Profile (profileFields)
              await profile.save()
              return res.json(profile)
          }
      }catch(err){
          res.status(500).send('server error')
      }
      console.log(profileFields.skills)
})

module.exports = router