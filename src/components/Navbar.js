import React, { Component } from 'react'
import {Link, withRouter} from "react-router-dom"

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleNavbar.css"

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/Login')
    }

    render(){
        return(
            <div>
                <div className="navbar">
                    <div className="logo">
                        <h4> Oran Ville</h4>
                    </div>
                    
                   <div className="menu">
                   <Link to="/Recommandation-initiale"><a href="#"> Recommandation </a></Link>
                   <Link to="/Recommandation"><a href="#"> Recommandation affinée </a></Link>
                    <a href="#" onClick = {this.logOut.bind(this)}>Deconnexion</a>
                   </div>

                </div>
               

            </div>
        )
    }
}
export default withRouter(Navbar) 
/**<div className="search-box">
                        <input className="search-txt" type="text" name="" placeholder="Rechercher"/>
                        <a className="search-btn" href="#">
                           <i className="fas fa-search"></i>
                        </a>
                    </div> */