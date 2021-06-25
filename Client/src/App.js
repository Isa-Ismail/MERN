import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Form from './Utils/Components/Form'
import Nav from './Utils/Components/Navbar'
import Cards from './Utils/Components/Cards'
import Content from './Utils/Components/Content';
import Individual from './Utils/Components/Individual'
import Card from './Utils/Components/play/cards'
import Footer from './Utils/Components/Footer'
import Home from './Utils/Components/Home'

const App = () => {
    
   return( 
            <Switch> 
               <div className ='container'>
                 <Nav />
                
                 <Route exact path ='/'>
                    <Home />
                 </Route>

                 <Route path ='/form'>
                    <Form />
                 </Route>
                 
                 <Route path ='/products'>
                    <Cards />
                 </Route>          
                 
                 <Route path ='/cart'>
                    <Card />
                 </Route> 

                 <Route path ='/content'>
                    <Content />
                 </Route>       

                 <Route path ='/indi/:id'>
                    <Individual />
                 </Route> 

                 <br/><br/><br/><br/><br/><br/><br/><br/>
                 
                 <Footer />
               
               </div>
            </Switch> 
    )
}

export default App;