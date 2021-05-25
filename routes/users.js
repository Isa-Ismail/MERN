const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const User = require('../models/user')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')

//@route    Post api/users
//@desc     Register user
//@access   Public

router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email','E-mail is required,').isEmail(),
    check('password', 'password is required (at least 6 digits)').isLength({ min:6 })
],
async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
    const {name, email, password} = req.body

    try{
    //if users exists
    let user = await User.findOne({ email })

    if(user){
        console.log('exists dumb client')
        return res.status(400).json({ errors: [{msg:'User already exists'}]})
    }
    //get user's gravatar
    const avatar = gravatar.url(email, {
        s:'200',
        r:'pg',
        d:'mm'
    })
    // inserting gravatar to user object
    user = new User({
        name,
        email,
        avatar,
        password
    })
    //encrypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();
    
    //return jsonwebtoken
    }catch(err){
        console.log(err.message)
        res.status(500)
    }

    console.log(req.body)
    res.send(`User registered`)
})

module.exports = router