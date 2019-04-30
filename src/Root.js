import React, { Component } from 'react';
import NavBar from './navBar';


class Root extends Component {
    
  render() {

    let ListMenu = [
        {label:"Home" , link:"/home"},
        {label:"About", link:"/about"},
        {label:"Info", link:"/info"},
        {label:"Contact", link:"/contact"}
    ]
     
    return (
      <div className="mainContainer">
         <div className="header">
           <NavBar lista = {ListMenu}/>
        </div>  
        <div className="body">
            {this.props.children}
        </div>  
        <div className="footer">
            <h4>Footer</h4>
        </div>  
      </div>
    );
  }
};

export default Root

