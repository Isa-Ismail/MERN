import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'

const Profiles = () => {

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
        { loading == true ? <Spinner />:
        <div>
            {
            profiles.map( profile => {
                    return(<ProfileItem key ={profile._id} profile = {profile}/>)
            })
            }
        </div>}
        </>
    )
}

export default Profiles
