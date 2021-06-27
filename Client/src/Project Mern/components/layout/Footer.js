import React from 'react'
import './play/play_css/foooter.css'
const Footer = () => {

    const [subscribe, setSubscribe] = React.useState( {
        name: '',
        email: ''
      } )
      
    return (
        <div style = {{ background: '#333'}}>
             <footer className="footer">
                <div className="logo-contact">
                    <div className="logo">
                    <img src="img/LittleCake%20Logo.png" alt="littlecake logo" />
                    </div>
                    <h2>About Us</h2>
                    <p>Our goal is a healthy and long life on this beautiful planet in this part of the sweet Universe.</p>
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-mobile-alt" />01781221242</p>
                    <p><i className="fas fa-paper-plane" />fahimismail75.scc@gmail.com</p>            
                </div>        
                <div className="informations">
                    <h2>Information</h2>
                    <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">More Search</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Events</a></li>
                    </ul>
                </div>        
                <div className="helpful-links">
                    <h2>Helpful Links</h2>
                    <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Supports</a></li>
                    <li><a href="#">Terms &amp; Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>        
                <div className="subscribe-form">
                    <h3>Subscribe More Info</h3>
                    <form> 
                    <div className="input-container">
                        <i className="fas fa-user" />             
                        <input type="text" placeholder="Your Name" name= "name" value = {subscribe.name} onChange = {(e) => setSubscribe({...subscribe, name: e.target.value})} />
                    </div>                   
                    <div className="input-container">
                        <i className="fas fa-envelope" />            
                        <input type="email" placeholder="Your Email" name = 'email' value = {subscribe.email} onChange = {(e) => setSubscribe({...subscribe, email: e.target.value})} />
                    </div>                   
                    <button type="submit" className="btn">Subscribe</button>                
                    </form>             
                </div>            
                </footer>
                <div className="footer-bottom">
                    <div className="social-icons">
                        <a href="#" target="_blank"><i className="fab fa-facebook" /></a>                
                        <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
                        <a href="#" target="_blank"><i className="fab fa-linkedin" /></a>
                        <a href="#" target="_blank"><i className="fab fa-youtube" /></a>                
                    </div>         
                    <div className="copyright">
                        <p>Isa Mohammad Ismail 2020. All Right reserved</p>
                    </div>
               </div>


        </div>
    )
}

export default Footer;

