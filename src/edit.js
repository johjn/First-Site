import React, { Component } from 'react';
import { Link } from "react-router";
import Axios from 'axios';


class Edit extends Component {
  state = {obj:0}
  
  componentWillMount(){
    const url = `http://localhost:3000/info/${this.props.params.id}`
    
    Axios.get(url)
    .then(res =>{
       this.state.obj = res.data[0]
       this.setState({obj : res.data[0]}) 

                }
         )
   }
  render() {
    const {obj} = this.state
    return (
      <div className="Edit">
           <form className = "editform">
            <input className = "id "type = "textfield" placeholder = {obj.id_angajati}/>
            <tr/>
            <input className = "name "type = "textfield" placeholder = {obj.name}/>
            <tr/>
            <input className = "lastname "type = "textfield" placeholder = {obj.lastname}/>
            <tr/>
            <input className = "salary "type = "textfield" placeholder = {obj.salary}/>
            <tr/>
            <button>Save</button>
            <button><Link to ="/info">Cancel</Link></button>
         </form>
      </div>
    );
  }
}

export default Edit;