import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from "react-router";


class Info extends Component {
    state = {showinfo:[]}

    componentWillMount(){
     Axios.get('http://localhost:3000/info')
     .then(res =>{
             this.setState({showinfo : res.data}) 
                 }
          )
    }

    handleRemove = (e) => {
      console.log(e.id_angajati)
      this.props.params.id = e.id_angajati
      const url = `http://localhost:3000/delete/${this.props.params.id}`
  
      Axios.delete(url)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
  render() {
      const {showinfo} = this.state
      let head = ["","","Id","Name","Lastname","Salary"]

    return (
      <div className="info">
          <table>
              <thead>
                  <tr>
                    {head.map((elemh,indh) => <td key = {"head_" + + indh}>{elemh}</td>)}
                  </tr>
              </thead>
              <tbody>
                 {showinfo.map((elem,index) =>(
                     <tr>
                        <td><button><Link to ={`/edit/${elem.id_angajati}`}>Edit</Link></button></td>
                        <td><button onClick={this.handleRemove.bind(this,elem)}>Delete</button></td>
                       {Object.values(elem).map((subelem,i) => <td key = {"cell_" + + i}>{subelem}</td>)}
                    </tr>))}
              </tbody>
          </table>
      </div>
    );
  }
}

export default Info;