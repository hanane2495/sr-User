import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleLieux.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Theatres extends Component{

    constructor(){
     super()
     this.state = {
        theatres : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/theatres')
       .then(response => response.json())
       .then(data => this.setState({ theatres : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                 <Sidebar/>
                 <Navbar/>  
                 <div className="container"> 
                   {this.state.theatres.map((theatre) => {
                      return <div key={theatre.idlieu}>
                                 <h1>{theatre.nomlieu}</h1>
                                 <h3>{theatre.categorie}</h3>
                                 <p>adresse : {theatre.adresse}</p>
                                 <p>telephone : {theatre.telephone}</p>
                             </div>
                })}
              </div>
            </div>
        )
    }
}
export default Theatres