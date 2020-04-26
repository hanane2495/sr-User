import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleLieux.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Centres_Culturels extends Component{

    constructor(){
     super()
     this.state = {
        centres_culturels : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/centres_culturels')
       .then(response => response.json())
       .then(data => this.setState({ centres_culturels : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                {this.state.centres_culturels.map((centre_culturel) => {
                    return <div key={centre_culturel.idlieu}>
                              <h1>{centre_culturel.nomlieu}</h1>
                              <h3>{centre_culturel.categorie}</h3>
                              <p>adresse : {centre_culturel.adresse}</p>
                              <p>telephone : {centre_culturel.telephone}</p>
                           </div>
                })}
              </div>
            </div>
        )
    }
}
export default Centres_Culturels