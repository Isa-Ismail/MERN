import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Form from './Components/Form'
import Nav from './Components/Navbar'
import Cards from './Components/Cards'
import Content from './Components/Content';
import Individual from './Components/Individual'
import Card from './Components/play/cards'
import Footer from './Components/Footer'
import Home from './Components/Home'

const App = ()=> {
    
   return( 
            <Switch> 
               <div className='container'>
                 <Nav />
                
                 <Route exact path='/'>
                    <Home />
                 </Route>

                 <Route path='/form'>
                    <Form />
                 </Route>
                 
                 <Route path='/products'>
                    <Cards />
                 </Route>          
                 
                 <Route path='/cart'>
                    <Card />
                 </Route> 

                 <Route path='/content'>
                    <Content />
                 </Route>       

                 <Route path='/indi/:id'>
                    <Individual />
                 </Route> 

                 <br/><br/><br/><br/><br/><br/><br/><br/>
                 
                 <Footer />
               
               </div>
            </Switch> 
    )
}

export default App;