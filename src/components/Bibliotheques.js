import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleLieux.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Bibliotheques extends Component{

    constructor(){
     super()
     this.state = {
        bibliotheques : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/bibliotheques')
       .then(response => response.json())
       .then(data => this.setState({ bibliotheques : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                {this.state.bibliotheques.map((bibliotheque) => {
                    return <div key={bibliotheque.idlieu}>
                              <h1>{bibliotheque.nomlieu}</h1>
                              <h3>{bibliotheque.categorie}</h3>
                              <p>adresse : {bibliotheque.adresse}</p>
                              <p>telephone : {bibliotheque.telephone}</p>
                           </div>
                })}
              </div>
            </div>
        )
    }
}
export default Bibliotheques