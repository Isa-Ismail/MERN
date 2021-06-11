const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const User = require('../models/User')
const Profile = require('../models/Profile')
const auth = require('../middleware/auth')
const request = require('request')
const config = require('config')

//@route    GET api/profile/me
//@desc     GET current user's profile
//@access   Private

router.get('/me', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id}).populate('user', [ 'name', 'avatar' ])
        if(!profile){
            return res.status(400).json({msg:'No profile found'})
        }

        res.json(profile)
    }catch(err){
        res.status(500).send(`Server issue`)
    }
})

//@route    POST api/profile
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

//@route    GET api/profile
//@desc     GET all profile
//@access   Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar'])
        res.json(profiles)
    } catch (err) {
        console.log(err.message)
        res.status(500).send(`Server error`)
    }
})

//@route    GET api/profile/user/:user_id
//@desc     GET profile by user id
//@access   Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user',['name', 'avatar'])
        
        if(profile){
            res.json(profile)
            console.log(profile.user)
        }else{
            res.status(400).json({msg:'Profile not found'})
        }
    } catch (err) {
        console.log(err.message)
        if(err.kind == 'ObjectId'){
            res.status(400).json({msg:'Profile not found'})
        }
        res.status(500).send(`Server error`)
    }
})

//@route    DELETE api/profile
//@desc     DELETE profile, user and posts
//@access   Private
router.delete('/', auth, async (req, res) => {
    try {
        //Delete Profile
        await Profile.findOneAndRemove( {user: req.user.id} )

        //Delete User
        await User.findOneAndRemove( {_id: req.user.id} )
        res.json({msg:'User removed'})
    } catch (err) {
        console.log(err.message)
        res.status(500).send(`Server error`)
    }
})

//@route    PUT api/profie/experience
//@desc     add profile experience
//@access   Private
router.put('/experience', [
    check('title', 'title is required').notEmpty(),
    check('company', 'company is required').notEmpty(),
    check('from', 'From date is required').notEmpty()
], auth, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json( {errors: errors.array()} )
    }
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }

    try {
        const profile = await Profile.findOne( {user: req.user.id} )
        
        profile.experience.unshift(newExp)

        await profile.save()

        res.json(profile)

    } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server Error`)
    }
})

//@route    DELETE api/profile/experience/:exp_id
//@desc     DELETE profile exp
//@access   Private
router.delete('/experience/:exp_id', auth, async (req, res) => {

    try {
        //Delete Profile exp
        const profile = await Profile.findOne( {user: req.user.id} )

        let updatedExperience = profile.experience.filter( item => item.id !== req.params.exp_id)
        
        profile.experience = updatedExperience

        await profile.save()
        
        //exp Delete message
        res.json({msg:'Experience removed', profile})
    } catch (err) {
        console.log(err.message)
        res.status(500).send(`Server error`)
    }
})

//@route    PUT api/profie/education
//@desc     add profile education
//@access   Private
router.put('/education', [
    check('school', 'school is required').notEmpty(),
    check('fieldofstudy', 'degree is required').notEmpty(),
    check('from', 'From date is required').notEmpty(),
    check('degree', 'degree date is required').notEmpty()
], auth, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json( {errors: errors.array()} )
    }
    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = req.body

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    }

    try {
        const profile = await Profile.findOne( {user: req.user.id} )
        
        profile.education.unshift(newEdu)

        await profile.save()

        res.json(profile)

    } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server Error`)
    }
})

//@route    DELETE api/profile/education/:edu_id
//@desc     DELETE profile edu
//@access   Private
router.delete('/education/:edu_id', auth, async (req, res) => {

    try {
        //Delete Profile exp
        const profile = await Profile.findOne( {user: req.user.id} )

        let updatedEducation = profile.education.filter( item => item.id !== req.params.edu_id)
        
        profile.education = updatedEducation

        await profile.save()
        
        //exp Delete message
        res.json({msg:'Education status removed', updated: profile.education})
    } catch (err) {
        console.log(err.message)
        res.status(500).send(`Server error`)
    }
})

//@route    GET api/profile/github/:username
//@desc     GET users repo 
//@access   Public
router.get('/github/:username', async (req, res) => {

    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: {'user-agent': 'node.js'}
        }

        request(options, (error, response, body) => {
            if(error){
                console.error(error)
            }
            else if(response.statusCode !== 200){
                return res.status(404).send(`profile not found`)
            }else{
                res.json(JSON.parse(body))
            }
        })

    } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server error`)
    }
})

module.exports = router