import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from "react-router";


class Info extends Component {
  state = {showinfo:[]}

  componentWillMount(){
     this.loadDate()
  }

  loadDate = () =>{
    Axios.get('http://localhost:3000/info')
    .then(res =>{
      this.setState({showinfo : res.data}) 
              }
     )
  }

  // delete from DB
  handleRemove = (e) => {
     this.props.params.id = e.id_angajati
     const url = `http://localhost:3000/delete/${this.props.params.id}`
     Axios.delete(url)
       .then(res => {
          console.log(res);
          this.loadDate();
        })
        .catch(err => {
          console.log(err);
     });
  };
  
  render() {
    const {showinfo} = this.state
    let head = ["","","Name","Lastname","Salary"]

    return (
      <div className="info">
          <button className = "add"><Link to ={`/edit/insert`} >Add</Link></button>
          <table className = "angajati">
              <thead key ="thead">
                <tr key = "trhead">
                    {head.map((elemh,indh) => <td key = {"head_" + + indh}>{elemh}</td>)}
                </tr>
              </thead>
              <tbody key = "tbody">
                 {showinfo.map((elem,index) =>(
                    <tr key = {"trbody" + +index}>
                       <td key = {"but" + + index}><button><Link to ={`/edit/${elem.id_angajati}`}>Edit</Link></button></td>
                       <td key = {"but2" + + index}><button onClick={this.handleRemove.bind(this,elem)}>Delete</button></td>
                       {Object.values(elem).map((subelem,i) => (
                         i !== 0 ? <td key = {"cell_" + + i}>{subelem}</td>:null)
                         )}
                    </tr>))}
              </tbody>
          </table>
      </div>
    );
  }
}

export default Info;