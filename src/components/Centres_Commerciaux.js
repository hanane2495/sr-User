import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleLieux.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Centres_Commerciaux extends Component{

    constructor(){
     super()
     this.state = {
        centres_commerciaux : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux//centre_commerciaux')
       .then(response => response.json())
       .then(data => this.setState({ centres_commerciaux : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                {this.state.centres_commerciaux.map((centre_commercal) => {
                    return <div key={centre_commercal.idlieu}>
                              <h1>{centre_commercal.nomlieu}</h1>
                              <h3>{centre_commercal.categorie}</h3>
                              <p>adresse : {centre_commercal.adresse}</p>
                              <p>telephone : {centre_commercal.telephone}</p>
                           </div>
                })}
              </div>
            </div>
        )
    }
}
export default Centres_Commerciaux