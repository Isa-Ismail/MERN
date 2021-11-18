import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../actions/post'
import Card from './card'
import Form from './postForm'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundImage:'',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }));

const Posts = () => {
    
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className = {classes.root}>
            <div>
              <h2>Post something</h2>
              <Form />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div style={{width: '50%', marginLeft: '21rem'}}>
              <h2 style={{fontSize: '3rem'}}>Posted by users</h2>
            {posts.map(post => {
              return(<div style = {{margin: '2rem'}}>
                <Card key={post._id} post={post} />
              </div>)
            })}
            </div>
        </div>
    )
}

export default Posts
