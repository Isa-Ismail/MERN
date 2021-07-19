import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {

    let auth = useSelector( data => data.auth.isAuthenticated)

    if (!auth) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h2>Dasboard route</h2>
        </div>
    )
}

export default Dashboard
