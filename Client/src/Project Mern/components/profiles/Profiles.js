import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '0px',
      backgroundImage:''
    }
  }));

const Profiles = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const profiles = useSelector(state => state.profile.profiles)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        dispatch(getProfiles())
        setTimeout(() => {
            setLoading(false)
        },[1100])
    }, [getProfiles])
    return (<>
            <h2>Our application users</h2>
        { loading == true ? <Spinner />:
            <Grid container spacing={3} className={classes.root}>
            {
            profiles.map( profile => {
                    return(<Grid item xs={3}><ProfileItem key ={profile._id} className={classes.profile} profile = {profile}/></Grid>)
            })
            }
            </Grid>
        }
        </>
    )
}

export default Profiles
