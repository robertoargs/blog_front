import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//robertoargs-E5 RARGS
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './views/Index/Index';
import Post from './views/Post/Post';

//Router
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


ReactDOM.render(
  //Changed <React.StrictMode> to <React.Fragment>
  <Router>
    <React.Fragment>
      <Route path="/" exact component={Index}/>
      <Route path="/posts/:id" component={Post}/>
    </React.Fragment>
  </Router>,
  document.getElementById('root')

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
