import React from 'react';
import Nav from '../Utils/Components/Navbar'
import { Route, Switch, Link } from 'react-router-dom'

const ProjectApp = () => {
    return (
        <>
            <Nav />
            <Switch>
                <div className = 'container'>
                    <Route path = '/'>

                    </Route>
                </div>
            </Switch>
        </>    
    )
}

export default ProjectApp
