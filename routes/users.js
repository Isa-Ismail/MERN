const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const User = require('../models/User')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
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
    let user = await User.findOne({ email:email })

    if(user){
        console.log(email)
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
    const payload = {
        user: {
            id: user.id
        }
    }

    jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token) => {
        if (err) throw err;
        return res.json({token})
    })

    }catch(err){
        console.error(err.message)
        res.status(500).send('server issue')
    }

    console.log(req.body)
})

module.exports = router