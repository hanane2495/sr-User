import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleLieux.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Musees extends Component{

    constructor(){
     super()
     this.state = {
        musees : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/musees')
       .then(response => response.json())
       .then(data => this.setState({ musees : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                {this.state.musees.map((musee) => {
                    return <div key={musee.idlieu}>
                              <h1>{musee.nomlieu}</h1>
                              <h3>{musee.categorie}</h3>
                              <p>adresse : {musee.adresse}</p>
                              <p>telephone : {musee.telephone}</p>
                           </div>
                })}
              </div>
            </div>
        )
    }
}
export default Musees