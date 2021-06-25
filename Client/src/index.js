import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from "./reportWebVitals";
import All from './Utils/Resource/Reducers'
import './index.css'
//import './BootStrap/bootstrap.min.css'
import App from './App'

const store = createStore(All, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Router>
      <Provider store={store}>
        <App />
      </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ├── README.md
// ├── node_modules
// ├── package.json
// ├── .gitignore
// ├── build
// ├── public
// │   ├── favicon.ico
// │   ├── index.html
// │   └── manifest.json
// └── src
//     ├── App.css
//     ├── App.js
//     ├── App.test.js
//     ├── index.css
//     ├── index.js
//     ├── logo.svg
//     └── serviceWorker.js


