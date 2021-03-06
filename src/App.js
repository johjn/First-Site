import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Home from './home';
import About from './about';
import Info from './info';
import Contact from './contac';
import Edit from './edit';
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
                 <Route path = "info" component = {Info} />
                 <Route path = "contact" component = {Contact} />
                 <Route path = "edit/:id" component = {Edit} />
              </Route>  
           </Router>     
      </div>
    );
  }
};

export default App

