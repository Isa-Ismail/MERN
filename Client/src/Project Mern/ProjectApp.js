import React from 'react'
import Nav from './components/layout/Navbar'
import {Provider} from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const ProjectApp = () => {
    return (
    
                <div className = 'container'>
                    
                    <Nav />

                        <Switch>

                            <Route exact path = '/'>
                                <Landing />
                            </Route>

                            <Route exact path = '/login'>
                                <Login/>
                            </Route>

                            <Route exact path = '/register'>
                                <Register/>
                            </Route>

                        </Switch>

                    <Footer />

                </div>  
        
    )
}

export default ProjectApp
