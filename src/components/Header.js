import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../css/StyleHeader.css"



class Header extends Component{
    render(){
        return(
            <div>
              <div className="navbar">
                    <div className="logo">
                        <h4> Oran Ville</h4>
                    </div>
                   <div className="menu">
                   <Link to="/"><a href="#"> A propos</a></Link>
                   <Link to="/Login"><a href="#"> Connexion </a></Link> 
                   </div>
               </div>    
            </div>
        )
    }
}
export default Header