import React, { Component } from 'react';
import './App.css';
import  NavBar  from './navBar';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Home from './home';
import About from './about';
import Contact from './contac';
import Root from './Root';


class App extends Component {
   
  render() {
   
    return (
      <div className="router">
           <Router history={browserHistory}> 
               <Route path = "/" component={Root}>   
                 <IndexRoute component ={Home}/>      
                 <Route path = "home" component = {Home} />
                 <Route path = "about" component = {About} />
                 <Route path = "contact" component = {Contact} />
              </Route>  
           </Router>     
      </div>
    );
  }
};

export default App

