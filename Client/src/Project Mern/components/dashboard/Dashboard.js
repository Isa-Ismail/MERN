import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import { FaUser, FaLaptop, FaSadCry } from 'react-icons/fa'
const Dashboard = () => {

    let auth = useSelector( data => data.auth.isAuthenticated)

    let user = useSelector( data => data.auth.user)

    let loading = useSelector( data => data.profile.loading)
    
    let profile = useSelector( data => data.profile.profile)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentProfile())
    },[getCurrentProfile])

    return (
        <div>
            { !auth ? <Redirect to = '/' /> : 
                <>
                    { loading && profile === null ? <Spinner /> :
                    <div className = 'dashboard'>
                       <h1>Dashboard</h1>
                       <h2><FaUser /> Welcome {user && user.name}</h2>
                       {
                       profile?
                       <>
                        <h2><FaLaptop /> Here's your profile dashboard</h2>
                       </>
                       :
                       <>
                        <h2><FaSadCry /> You didn't setup a profile yet</h2>
                       </>
                       }
                    </div> 
                    }
                </>
            }
        </div>
    )
}

export default Dashboard
