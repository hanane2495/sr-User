import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleLieux.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Espaces_verts extends Component{

    constructor(){
     super()
     this.state = {
        espaces_verts : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/espaces_verts')
       .then(response => response.json())
       .then(data => this.setState({ espaces_verts : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                {this.state.espaces_verts.map((espaces_vert) => {
                    return <div key={espaces_vert.idlieu}>
                              <h1>{espaces_vert.nomlieu}</h1>
                              <h3>{espaces_vert.categorie}</h3>
                              <p>adresse : {espaces_vert.adresse}</p>
                              <p>telephone : {espaces_vert.telephone}</p>
                              <p>superficie : {espaces_vert.superficie}</p>
                           </div>
                })}
              </div>
            </div>
        )
    }
}
export default Espaces_verts