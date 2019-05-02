import React, { Component } from 'react';
import { Link } from "react-router";
import Axios from 'axios';


class Edit extends Component {
  state = {id:'',name:'', lastname:'', salary:0}

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  componentWillMount(){
    const url = `http://localhost:3000/info/${this.props.params.id}`
    
    Axios.get(url)
    .then(res =>{
       this.setState({id : res.data[0].id_angajati}) 
       this.setState({name : res.data[0].name}) 
       this.setState({lastname : res.data[0].lastname}) 
       this.setState({salary : res.data[0].salary}) 

                }
         )
   }

   updateinfo(event){
    const url = `http://localhost:3000/update/${this.props.params.id}`

    Axios.put(url, {
      name: this.state.name,
      lsname: this.state.lastname,
      sal: this.state.salary
    
    })
    .then(res =>{
      console.log(res)})
    .catch(err => {
        console.log(err);
      });
   }
  render() {
    
    return (
      <div className="Edit">
           <form className = "editform">
            <input className = "id "type = "textfield"  name = "id" value = {this.state.id || ''}/>
            <tr/>
            <input className = "name "type = "textfield" name = "name" onChange={this.handleChange.bind(this)} value = {this.state.name}/>
            <tr/>
            <input className = "lastname "type = "textfield" name = "lastname" onChange={this.handleChange.bind(this)} value = {this.state.lastname}/>
            <tr/>
            <input className = "salary "type = "textfield" name ="salary" onChange={this.handleChange.bind(this)} value = {this.state.salary}/>
            <tr/>
            <button onClick = {this.updateinfo.bind(this)}>Save</button>
            <button><Link to ="/info">Cancel</Link></button>
         </form>
      </div>
    );
  }
}

export default Edit;