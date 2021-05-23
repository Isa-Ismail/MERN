const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()

//@route    Post api/users
//@desc     Register user
//@access   Public

router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email','E-mail is required,').isEmail(),
    check('password', 'password is required (at least 6 digits)').isLength({ min:6 })
],
(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    console.log(req.body)
    res.send(req.body)
})

module.exports = router