import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import "../css/bootstrap.min.css"
import "../css/StyleLoggin.css"
import { login } from './UserFunctions';

import Header from "./Header"



class Login extends Component{
    constructor(){
        super()
        this.state ={
            nomutilisateur: '',
            mot_de_passe: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            nomutilisateur: this.state.nomutilisateur,
            mot_de_passe: this.state.mot_de_passe
        }

        login(user).then(res =>{
            if(res){
                console.log("login called")
                console.log(res)
                this.props.history.push('/Recommandation-initiale')
            }
        })
    }

    render(){
        return( 
            <div className = "Login">    
              <div className="container-fluid banner">
                  <div className="ban">
                     <Header/>
                     <img src="/src/css/wahran1.jpg"/>
                     
                  </div>
                 <div className="inner-banner">
                      <h1>Bienvenue à Oran </h1>
                      <div className="card login-card">
                          <div className="card-header login-card-header">
                             <h3>Se connecter</h3>
                          </div>
                          <div className="card-body login-card-body">
                              <form onSubmit = {this.onSubmit}>
                                  <div className="input-group form-group">
                                      <div className="input-group-prepend">
                                              <span className="input-group-text"><i className="fas fa-user"></i></span>
                                      </div>
                                      <input type="text" className="form-control" name ="nomutilisateur" placeholder="nom d'utilisateur" value={this.state.nomutilisateur} onChange={this.onChange} />
                                  </div>
                                  <div className="input-group form-group">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text"><i className="fas fa-key"></i></span>
                                      </div>
                                      <input type="password" className="form-control" name="mot_de_passe" placeholder="mot de passe" value={this.state.mot_de_passe} onChange={this.onChange} />
                                  </div>
                                  <div className="row align-items-center remember">
                                      <input type="checkbox"/>se souvenir de moi
                                  </div>
                                  <div className="form-group">
                                      <button type="submit" className="btn btn-primary float-right" >Se connecter</button>
                                  </div>
                              </form>
                          </div>
                              <div className="card-footer login-card-footer">
                                  <div className="d-flex justify-content-start links">
                                    Nouveau sur Oran ?<Link to="/Inscription"><a href="#">S'inscrire maintenant</a></Link>
                                  </div>
                                  <div className="d-flex justify-content-center">
                                     <a href="#">Mot de passe oublié ?</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <footer className="container-fluid footer">

              </footer>  
           </div> 
           
        )
    }
}

export default Login