import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import { FaUser, FaLaptop, FaSadCry } from 'react-icons/fa'
import Alert from '../layout/Alert'

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
        <div style = {{height: '35rem'}}>
            { !auth ? <Redirect to = '/' /> : 
                <>
                    { loading && profile === null ? <Spinner /> :
                    <div className = 'dashboard'>
                       <h1>Dashboard</h1>
                       <Alert />
                       <h2><FaUser /> Welcome {user && user.name}</h2>
                       {
                       profile?
                       <>
                        <h2><FaLaptop /> Here's your profile dashboard</h2>
                        <Link to = '/editprofile'><button className = 'btn' style = {{ backgroundColor: 'cadetblue',  borderRadius: '.2rem', marginBottom: '2rem' }}>Edit Profile</button></Link>
                        <Link to = '/experience'><button className = 'btn' style = {{ backgroundColor: 'cadetblue',  borderRadius: '.2rem', marginBottom: '2rem' }}>Add Experience</button></Link>
                        <Link to = '/education'><button className = 'btn' style = {{ backgroundColor: 'cadetblue',  borderRadius: '.2rem', marginBottom: '2rem' }}>Add Education</button></Link>
                       </>
                       :
                       <>
                        <h2><FaSadCry /> You didn't setup a profile yet</h2>
                        <Link to = '/createprofile'><button className = 'btn' style = {{ backgroundColor: 'cadetblue',  borderRadius: '.2rem', marginBottom: '2rem' }}>Create Profile</button></Link>
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
