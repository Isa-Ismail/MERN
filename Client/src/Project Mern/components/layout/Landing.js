import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <div className = 'landing' style ={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <h1 style = {{marginTop: '10rem'}}>Developer Media</h1><br/>
                        <h2>Create a developer profile/portfolio, share posts and get help from other developers</h2>
                        <br />
                        <Link to = '/register'><button className = 'btn' style ={{backgroundColor: 'coral'}}>Sign up</button></Link>
                        <Link to = '/login'><button className = 'btn'style ={{backgroundColor: 'greenyellow'}}>Log in</button></Link>
                    </div>
            </div>
        </>
    )
}

export default Landing
