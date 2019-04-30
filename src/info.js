import React, { Component } from 'react';
import Axios from 'axios'

class Info extends Component {
    state = {showinfo:[]}

    componentWillMount(){
     Axios.get('http://localhost:3000/info')
     .then(res =>{
             this.setState({showinfo : res.data}) 
                 }
          )
    }
  
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
                 {showinfo.map(elem =>(
                     <tr>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                       {Object.values(elem).map((subelem,i) => <td key = {"cell_" + + i}>{subelem}</td>)}
                    </tr>))}
              </tbody>
          </table>
      </div>
    );
  }
}

export default Info;