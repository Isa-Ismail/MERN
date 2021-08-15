import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Landing = () => {

    let auth = useSelector( data => data.auth.isAuthenticated)

    if (auth) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <>
            <div className = 'landing' style ={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <br />
                        <h2><Typewriter
                        options={{
                            strings: ['Welcome to Dev Media', 'All your soft works matter'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 5,
                            delay: 50
                        }}
                        /></h2>
                        <h1 style = {{marginTop: '6rem'}}>Developer Media</h1><br/>
                        <h2>Create a developer profile/portfolio, share posts and get help from other developers</h2>
                        <br />
                        <Link to = '/register'><Button style ={{backgroundColor: 'coral', fontSize:'2rem'}}>Sign up</Button></Link>
                        <Link to = '/login'><Button style ={{backgroundColor: 'greenyellow', marginLeft: '2rem', fontSize:'2rem'}}>Log in</Button></Link>
                        
                    </div>
            </div>
        </>
    )
}

export default Landing
