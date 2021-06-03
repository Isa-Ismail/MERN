const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../models/User')

//@route    GET api/auth
//@desc     Test route
//@access   Public

router.get('/', auth, async(req, res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

//@route    Post api/auth
//@desc     Authenticate Users and get token
//@access   Public

router.post('/', [
    check('email','E-mail is required,').isEmail(),
    check('password', 'password is required :(').exists()
],
async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
    const { email, password} = req.body

    try{
        
    //if users exists
    let user = await User.findOne({ email })

    if(!user){
        console.log('Not found')
        return res.status(400).json({ errors: [{msg:'Invalid Credentials'}]})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)

    if(!isMatch){
        console.log('password didnt match')
        return res.status(400).json({ errors: [{msg:'Invalid Credentials'}]})
    }else{
    console.log(user)    
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
}
    }catch(err){
        console.error(err.message)
        res.status(500).send('server issue')
    }

    console.log(req.body)
})

module.exports = router