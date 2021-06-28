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
                        <button className = 'btn' style ={{backgroundColor: 'coral'}}><Link to = '/form'>Sign up</Link></button>
                         <button className = 'btn'style ={{backgroundColor: 'greenyellow'}}><Link to = '/form'>Log in</Link></button>
                    </div>
            </div>
        </>
    )
}

export default Landing
