import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getCurrentProfile } from '../../actions/profile'

const Dashboard = () => {

    let auth = useSelector( data => data.auth.isAuthenticated)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentProfile())
    },[getCurrentProfile])

    return (
        <div>
            { !auth ? <Redirect to = '/' /> : 
                <>
                    <h2>Dasboard route</h2>
                </>
            }
        </div>
    )
}

export default Dashboard
