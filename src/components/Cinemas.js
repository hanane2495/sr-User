import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleCinema.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Cinemas extends Component{

    constructor(){
     super()
     this.state = {
        cinemas : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/cinemas')
       .then(response => response.json())
       .then(data => this.setState({ cinemas : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                <div>
          <Sidebar/> 
          <div className="container">
            <section id="showcase_cinema">
              <div className="container"></div>
              <h1>Cinemas</h1>
              <p>Vous trouvez ici tous les cinema de la ville d'Oran ?</p>
            </section>
            <section className="recommandation">
               <h2 className="text-muted"> Cinemas </h2>
               <div className="suggestion-items">
               {this.state.cinemas.map((cinema) => {
                    return <div key={cinema.idlieu}>
                              <div class="card mb-5 card-suggestion">
                                  <img class="card-img-top" src="/src/img/pic06.jpg" />
                                  <div class="card-img-overlay text-white">
                                    <h1 class="card-title suggestion-titre">{cinema.nomlieu}</h1>
                                    <h3 class="card-title text-center">{cinema.categorie}</h3>
                                  </div>
                                  <div class="card-body">
                                     <h5 class="card-title">Adresse : {cinema.adresse}</h5>
                                     <h6 class="card-title">Telephone : {cinema.telephone}</h6>
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
export default Cinemas

/**<div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                
                    return 
                              <h1></h1>
                              <h3>{cinema.categorie}</h3>
                              <p>adresse : {cinema.adresse}</p>
                              <p>telephone : {cinema.telephone}</p>
                           </div>
                })}
              </div>
            </div> */