import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../actions/post'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '0px',
      backgroundImage:'',
      display: 'flex'
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
            <div style={{width: '60%'}}>
              <h1>Posts</h1>
            {posts.map(post => {
              return(
                <>
                  <img src = "" />
                  <h3>{post.name}</h3>
                <div>
                  <p>{post.text}</p>
                </div>
                </>
              )
            })}
            </div>
            <div>
              <div><h2>Post your thing</h2></div>
            </div>
        </div>
    )
}

export default Posts
