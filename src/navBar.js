import React, { Component } from 'react';
import { Link } from "react-router";



class NavBar extends Component {
    state ={showtext:false}

    displaybutton = () =>
    (
        this.setState({
            showtext: !this.state.showtext
        })

    )
  
  render(){
      let showform = this.state.showtext ? (
        <form className = "search">
            <input className = "text-input "type = "textfield" placeholder = "Texte here"/>
         </form>):""

      let LinkBar = this.props.lista.map((elem, index) => 
      <li className = "ListMenu" key ={index}><Link to ={elem.link}>{elem.label}</Link></li>)

    
    return (
        <div className = "MenuNav">
           <div className ="UlLista">
             <ul>
                 {LinkBar}
             </ul>
             <div className = "search">
                 <button onClick ={this.displaybutton}>Search</button>
             </div>
             {showform}
          </div>
        </div>
     )
  }
}

export default NavBar;
