import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

const Profile = () => {
    const { id } = useParams()

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          height: '20%',
          margin: '0px',
          display: 'flex',
          backgroundColor: 'white'
        }
    }));

    const classes = useStyles()
    
    const profiles = useSelector(state => state.profile.profiles)
    let profile = profiles.filter( pro => pro.user._id === id)
    let filterd = profile[0]

    useEffect(() => {
       
    },[])
    return (
        <>
        <div className = {classes.root}>
            <h2>{filterd.user.name}</h2>
            <p>{filterd.status}</p>
        </div>
        </>
        )
}

export default Profile
