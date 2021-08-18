import React, { useEffect } from 'react'
import Nav from './components/layout/Navbar'
import {Provider} from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Dash from './components/dashboard/Dashboard'
import EditProfile from './components/profile-forms/EditProfile'
import CreateProfile from './components/profile-forms/CreateProfile'
import Education from './components/profile-forms/Education'
import Experience from './components/profile-forms/Experience'
import Profiles from './components/profiles/Profiles'
// import Spinner from './components/layout/Spinner'

const ProjectApp = () => {

    useEffect( () => {

        if(localStorage.token){
            setAuthToken(localStorage.token)
          }

        store.dispatch(loadUser())
        
    }, [])

    return (
            <Provider store = { store }> 
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

                            <Route exact path = '/dashboard'>
                                <Dash />
                            </Route>

                            <Route exact path = '/editprofile'>
                                <EditProfile />
                            </Route>

                            <Route exact path = '/createprofile'>
                                <CreateProfile />
                            </Route>

                            <Route exact path = '/education'>
                                <Education />
                            </Route>

                            <Route exact path = '/experience'>
                                <Experience />
                            </Route>

                            <Route exact path = '/developers'>
                                <Profiles />
                            </Route>

                        </Switch>

                    <Footer />
                
                </div>  
            </Provider>
    )
}

export default ProjectApp
