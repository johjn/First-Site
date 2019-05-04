import React, { Component } from 'react';
import { Link } from "react-router";
import Axios from 'axios';


class Edit extends Component {
  state = {id:'',name:'', lastname:'', salary:''}

  //make input controlled
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  componentWillMount(){
     if(this.props.params.id !== 'insert'){
        this.loadDati()
     }
   }

   // select date from DB
   loadDati = () =>{
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

   //insert date in DB
   insertinfo(event){
    const url = `http://localhost:3000/insert`
    Axios.post(url, {
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

   //update date in DB
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
      <div className = "divForm" style = {{ width:'50%'}}>
           <form className = "editform">
              <label>
                 Name:
                 <input className = "name "type = "textfield" name = "name" onChange={this.handleChange.bind(this)} value = {this.state.name}/>
              </label>
              <label>
                 LastName:
                 <input className = "lastname "type = "textfield" name = "lastname" onChange={this.handleChange.bind(this)} value = {this.state.lastname}/>
              </label>
              <label>
                 Salary:
                 <input className = "salary "type = "textfield" name ="salary" onChange={this.handleChange.bind(this)} value = {this.state.salary}/>
               </label>
               {this.props.params.id !== 'insert' ? 
                   <button className ="btn_edit" onClick = {this.updateinfo.bind(this)}> Save</button>
                :
                   <button className ="btn_edit" onClick = {this.insertinfo.bind(this)}> Insert</button>
                }
                <Link  to ="/info"><button className ="btn_edit">Cancel</button></Link>
            </form>
         </div>
      </div>
    );
  }
}

export default Edit;