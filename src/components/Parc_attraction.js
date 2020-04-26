import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleParcattraction.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Parc_attraction extends Component{

    constructor(){
     super()
     this.state = {
        parc_attraction : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/parcs_attraction')
       .then(response => response.json())
       .then(data => this.setState({ parc_attraction : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                <div>
          <Sidebar/> 
          <div className="container">
            <section id="showcase_parcattraction">
              <div className="container"></div>
              <h1>Parcs d'attraction</h1>
              <p>Vous trouvez ici tous les parcs d'attraction de la ville d'Oran ?</p>
            </section>
            <section className="recommandation">
               <h2 className="text-muted"> Parc d'attraction </h2>
               <div className="suggestion-items">
               {this.state.parc_attraction.map((parc_attraction) => {
                    return <div key={parc_attraction.idlieu}>
                              <div class="card mb-5 card-suggestion">
                                  <img class="card-img-top" src="/src/img/pic03.jpg" />
                                  <div class="card-img-overlay text-white">
                                    <h1 class="card-title suggestion-titre">{parc_attraction.nomlieu}</h1>
                                    <h3 class="card-title text-center">{parc_attraction.categorie}</h3>
                                  </div>
                                  <div class="card-body">
                                     <h5 class="card-title">Adresse : {parc_attraction.adresse}</h5>
                                     <h6 class="card-title">Telephone : {parc_attraction.telephone}</h6>
                                  </div>
                              </div>
                            </div>
                          })}
                </div>   
            </section> 
         </div>
          <Navbar/> 
        </div>
</div>
            
        )
    }
}
export default Parc_attraction

/**<div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                
                    return <div >
                              <h1></h1>
                              <h3>{parc_attraction.categorie}</h3>
                              <p>adresse : {parc_attraction.adresse}</p>
                              <p>telephone : {parc_attraction.telephone}</p>
                           </div>
                })}
              </div>
            </div> */