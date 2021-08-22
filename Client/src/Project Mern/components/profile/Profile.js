import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const Profile = () => {
    const { id } = useParams()
    const profiles = useSelector(state => state.profile.profiles)
    let profile
    let filterd
    useEffect(() => {
        profile = profiles.filter( pro => pro.user._id === id)
        filterd = profile[0]
        console.log(filterd)
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Profile
