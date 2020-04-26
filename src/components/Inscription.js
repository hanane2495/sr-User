import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import jwt_decode from "jwt-decode"

import Header from './Header';
import "../css/StyleInscription.css"
import "../css/bootstrap.min.css"

import { register } from './UserFunctions';

class Inscription extends Component{
    
    constructor(){
        super()
        this.state ={
            nomutilisateur: '',
            email: '',
            mot_de_passe: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        console.log("onChange called")
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.email)
    }

    onSubmit(e){
        console.log("onSubmit called")
        e.preventDefault()

        const user = {
            nomutilisateur: this.state.nomutilisateur,
            email: this.state.email,
            mot_de_passe: this.state.mot_de_passe
        }
        console.log(this.state.email)
        register(user).then(res =>{
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            fetch(`http://localhost:5000/users/creerprofil?id_user=${decoded.id}`)
                console.log("register called")
                console.log(decoded.id)
                console.log(res)
                this.props.history.push('/Profile')
        
        })
        
    }

    render(){
        return(
            <div className="container-fluid banner">
                <div className="ban">
                <Header/>
                     <img src="/src/css/wahran1.jpg"/>
                </div>
                <div className="inner-banner">
                <div className="cont">
                      <form onSubmit = {this.onSubmit}>
                          <h2>S'inscrire</h2>
                          <p>Nom d'utilisateur</p>
                           <input type="text" name="nomutilisateur" placeholder="Nom utilisateur" value={this.state.nomutilisateur} onChange={this.onChange} />
                           <p>Email</p>
                           <input type="text" name="email" placeholder="exe_mple@gmail.com" value={this.state.email} onChange={this.onChange} />
                           <p>Mot de passe</p>
                           <input type="password" name="mot_de_passe" placeholder="Entrer un mot de passe" value={this.state.mot_de_passe} onChange={this.onChange} />
                           <p>Confirmer le mot de passe</p>
                           <input type="password" name="mot_de_passe" placeholder="Entrer le mot de passe a nouveau"/>
                           <br/>
                           <button type="submit" name="button"> S'inscrire</button>
                      </form>
                 </div>
                </div>
            </div>
        )
    }
}
export default Inscription