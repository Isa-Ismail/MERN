const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const User = require('../models/User')
const config = require('config')
const auth = require('../middleware/auth')

//@route    GET api/posts
//@desc     Test route
//@access   Public

router.get('/', [
    check('text', 'Text is required').notEmpty()
], auth, (req, res) => {
    
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server Error`)
    }
})

module.exports = router