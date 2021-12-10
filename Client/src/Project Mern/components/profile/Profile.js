import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

const Profile = () => {
    const { id } = useParams()

    const useStyles = makeStyles((theme) => ({
        roota: {
          width: '100%',
          height: '20%',
          margin: '0px',
          display: 'flex'
        },
        left:{
            height: '30rem',
            padding: '1.5rem',
            backgroundColor: 'hsl(205, 90%, 76%)'
        },
        info: {

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
                <div className={classes.roota}>
                    
                    <div className= {classes.left}>
                        <img src= {filterd.user.avatar} alt ="" className = "img"></img>
                        <h2 style={{color: 'black'}}>{filterd.user.name}</h2>
                        <h2>{filterd.status}</h2>
                        <div style = {{display: 'flex'}}>
                        {filterd.skills.map(skill=> {
                            return(<p style ={{padding: '5px'}}>{skill} </p>)
                        })}
                        </div>
                    </div>
                
                {/*Main element*/}
                    <div className={classes.info}>
                          
                    </div>
                
                </div>
        </>
        )
}

export default Profile
