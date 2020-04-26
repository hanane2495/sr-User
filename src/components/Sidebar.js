import React, { Component } from 'react'
import { Link } from "react-router-dom"

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleProfile1.css"

import jwt_decode from "jwt-decode"


class Sidebar extends Component{
    
    constructor(){
        super()
        this.state = {
            nomutilisateur: '',
            email:''
        }
    }

    componentDidMount(){
        
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        console.log(token)
        this.setState({
            nomutilisateur: decoded.nomutilisateur
        })
        console.log("component did mount, user name : ",decoded.nomutilisateur)
        
    }

    render(){
        return(
            <div>
                <div className="sidebar">
                   <li className="profile">
                      <div className="row">
                          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                              <img src="/src/img/photo_profile.jpg" alt="Avatar" className="avatar"/>
                          </div>
                          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                              <h4>{this.state.nomutilisateur}</h4>
                              <p> {this.state.email} </p>
                          </div>
                     </div> 
                   </li>
                   <Link to ="/Hotels"> <li className="item" id="hotel"><a href="#hotel" className="btn"><i className="fas fa-hotel"></i>Hotels</a></li></Link>
                   <Link to ="/Restaurants"> <li className="item" id="restaurant"><a href="#restaurant" className="btn"><i className="fas fa-utensils"></i>Restaurants</a></li></Link>
                   <Link to ="/Plages"> <li className="item" id="plage"><a href="#plage" className="btn"><i className="fas fa-umbrella-beach"></i>Plages</a></li></Link>
                   <Link to ="/Parc_attraction"> <li className="item" id="parc_attraction"><a href="#parc_attraction" className="btn"><i className="fas fa-child"></i>Parcs d'attraction</a></li></Link>
                   <Link to ="/Centres_Commerciaux"> <li className="item" id="centre_commercial"><a href="#centre_commercial" className="btn"><i className="fas fa-store"></i>Centres commerciaux</a></li></Link>
                   <Link to ="/Centres_Culturels"> <li className="item" id="centre_culturel"><a href="#centre_culturel" className="btn"><i className="fas fa-drum"></i>Centres culturels</a></li></Link>
                   <Link to ="/Cinemas"> <li className="item" id="cinema"><a href="#cinema" className="btn"><i className="fas fa-film"></i>Cinema</a></li></Link>
                   <Link to ="/Espaces_verts"> <li className="item" id="espace_vert"><a href="#espace_vert" className="btn"><i className="fas fa-tree"></i>Espaces verts</a></li></Link>
                   <Link to ="/Bibliotheques"> <li className="item" id="bibliotheque"><a href="#bibliotheque" className="btn"><i className="fas fa-book"></i>Bibliotheques</a></li></Link>
                   <Link to ="/Musees"> <li className="item" id="musee"><a href="#musee" className="btn"><i className="fas fa-archway"></i>Musée</a></li></Link>
                   <Link to ="/Theatres"> <li className="item" id="theatre"><a href="#theatre" className="btn"><i className="fas fa-theater-masks"></i>Théatre</a></li></Link>
               </div>
            </div>

        )
    }
}
export default Sidebar 