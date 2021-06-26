import React from 'react'
import Nav from './components/layout/Navbar'
import { Route, Switch, Link } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'

const ProjectApp = () => {
    return (
                <div className = 'container'>
                    
                    <Nav />

                        <Switch>

                            <Route exact path = '/'>
                                <h1>home</h1>
                            </Route>

                        </Switch>  

                    <Footer />

                </div>   
    )
}

export default ProjectApp
