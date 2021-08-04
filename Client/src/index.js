import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from "./reportWebVitals";
import './index.css'
//import './BootStrap/bootstrap.min.css'
import ProjectApp from './Project Mern/ProjectApp'

ReactDOM.render(
  <Router>
    <ProjectApp />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


