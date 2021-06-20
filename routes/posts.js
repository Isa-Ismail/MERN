const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')
const Profile = require('../models/Profile')
const config = require('config')
const auth = require('../middleware/auth')

//@route    POST api/posts
//@desc     POST a post
//@access   Private

router.post('/', [
    check('text', 'Text is required').notEmpty()
], auth, async (req, res) => {
    
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const user = await User.findById( req.user.id ).select('-password')

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })
        
        const post = await newPost.save();

        res.json(post)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server Error`)
    }
})

//@route    GET api/posts
//@desc     GET all posts
//@access   Public

router.get('/', async (req, res) => {
    
    try {
        const posts = await Post.find().populate('user', ['name', 'avatar']).sort({ date: -1 }) 
        
        res.json(posts)

    } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server Error`)
    }
})

//@route    GET api/posts/:id
//@desc     GET post by id
//@access   Private

router.get('/:id', auth, async (req, res) => {
    
    try {
        const post = await Post.findById( req.params.id )

        if(!post){
            return res.status(404).json({msg:'POST not found'})
        }

        res.json(post)

    } catch (err) {
        console.error(err.message)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg:'POST not found'})
        }
        res.status(500).send(`Server Error`)
    }
})

//@route    DELETE api/posts/:id
//@desc     DELETE post by id
//@access   Private

router.delete('/:id', auth, async (req, res) => {
    
    try {
        const post = await Post.findById( req.params.id )


        if(!post){
            return res.status(404).json({msg:'POST not found'})
        }

        if(post.user.toString() !== req.user.id){
            return res.status(404).json({msg:'USER not found'})
        }

        await post.remove()

        res.json({ msg: 'post removed' })

    } catch (err) {
        console.error(err.message)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg:'POST not found'})
        }
        res.status(500).send(`Server Error`)
    }
})

//@route    PUT api/posts/like/:id
//@desc     PUT post by id
//@access   Private

router.put('/like/:id', auth, async( req, res ) => {
    try {
        const post = await Post.findById( req.params.id )

        if(!post){
            return res.status(404).json({ msg: 'Post not found' })
        }
        // checking if post is already liked
        let likes = post.likes.filter(like => like.user.toString() === req.user.id)

        if(likes.length > 0){
            console.log(likes)
            return res.status(400).json({ msg: 'post already liked' })
        }else{
            post.likes.unshift({ user: req.user.id })
            await post.save()
            res.json(post.likes)
        }

    }catch(err){
        console.error(err)
        res.status(500).json(`Server issue`)
    }
})

//@route    PUT api/posts/like/:id
//@desc     PUT post by id
//@access   Private

router.put('/unlike/:id', auth, async( req, res ) => {
    try {
        const post = await Post.findById( req.params.id )

        if(!post){
            return res.status(404).json({ msg: 'Post not found' })
        }
        // checking if post is already liked
        let likes = post.likes.filter(like => like.user.toString() === req.user.id)

        if(likes.length === 0){
            console.log(likes)
            return res.status(400).json({ msg: 'post didnt liked' })
        }else{
            post.likes = post.likes.filter(like => like.user.toString() !== req.user.id)

            await post.save()

            res.json(post.likes)
        }

    }catch(err){
        console.error(err)
        res.status(500).json(`Server issue`)
    }
})

module.exports = router