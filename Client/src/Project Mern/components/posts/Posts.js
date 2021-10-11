import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '0px',
      backgroundImage:''
    }
  }));

const Posts = () => {
    
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        
    }, [])

    return (
        <div className = {classes.root}>
            <div>
            {posts.map(post => {
              return(
                <>
                
                </>
              )
            })}
            </div>
            <div>
    
            </div>
        </div>
    )
}

export default Posts
