import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StylePlage.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Plages extends Component{

    constructor(){
     super()
     this.state = {
        plages : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/plages')
       .then(response => response.json())
       .then(data => this.setState({ plages : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                <div>
          <Sidebar/> 
          <div className="container">
            <section id="showcase_plage">
              <div className="container"></div>
              <h1>Plages</h1>
              <p>Vous trouvez ici toutes les plages de la ville d'Oran ?</p>
            </section>
            <section className="recommandation">
               <h2 className="text-muted"> Plages </h2>
               <div className="suggestion-items">
               {this.state.plages.map((plage) => {
                    return <div key={plage.idlieu}>
                              <div class="card mb-5 card-suggestion">
                                  <img class="card-img-top" src="/src/img/pic06.jpg" />
                                  <div class="card-img-overlay text-white">
                                    <h1 class="card-title suggestion-titre">{plage.nomlieu}</h1>
                                    <h3 class="card-title text-center">{plage.categorie}</h3>
                                  </div>
                                  <div class="card-body">
                                     <h5 class="card-title">Adresse : {plage.adresse}</h5>
                                     <h6 class="card-title">Telephone : {plage.telephone}</h6>
                                     <p class="card-text">Type de plage : {plage.type_plage}</p>
                                     <p class="card-text">Douche : {plage.douche}</p>
                                     <p class="card-text">Longueur : {plage.longueur}</p>
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
export default Plages

/**<Sidebar/>
                <Navbar/>  
              <div className="container"> 
                
                    return 
                              
                              <h3></h3>
                              <p></p>
                              <p></p>
                              <p></p>
                              <p>superficie : {plage.superficie}</p>
                              <p></p>
                              <p>statut : {plage.statut}</p>
                              <p>nombre d'acces : {plage.nombre_acces}</p>
                              <p>parking : {plage.parking}</p>
                              <p></p>
                              <p>toilette : {plage.toilette}</p>
                              <p>vestiaire : {plage.vestiaire}</p>
                              <p>point de ramassage : {plage.point_ramassage}</p>
                              <p>balisage : {plage.balisage}</p>
                              <p>airs de jeux : {plage.airs_de_jeux }</p>
                              <p>poste de protection civile : {plage.poste_protection_civil}</p>
                              <p>plaque de signalisation : {plage.plaque_signalisation}</p>
                           </div>
                })}
              </div>
            </div> */