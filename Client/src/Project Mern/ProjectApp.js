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
                                <Landing />
                            </Route>

                            <Route exact path = '/profile'>
                                <h2>this is profile page</h2>
                            </Route>

                        </Switch>

                    <Footer />

                </div>   
    )
}

export default ProjectApp
