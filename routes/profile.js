const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()

//@route    GET api/profile
//@desc     Test route
//@access   Public

router.get('/',(req, res) => res.send(`profile api`))

module.exports = router