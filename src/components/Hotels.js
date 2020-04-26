import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleHotel.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Hotels extends Component{

    constructor(){
     super()
     this.state = {
        hotels : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/hotels')
       .then(response => response.json())
       .then(data => this.setState({ hotels : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                <div>
          <Sidebar/> 
          <div className="container">
            <section id="showcase_hotel">
              <div className="container"></div>
              <h1>Hotels</h1>
              <p>Vous trouvez ici tous les hotels de la ville d'Oran ?</p>
            </section>
            <section className="recommandation">
               <h2 className="text-muted"> Hotels </h2>
               <div className="suggestion-items">
               {this.state.hotels.map((hotel) => {
                    return <div key={hotel.idlieu}>
                              <div class="card mb-5 card-suggestion">
                                  <img class="card-img-top" src="/src/img/pic05.jpg" />
                                  <div class="card-img-overlay text-white">
                                    <h1 class="card-title suggestion-titre">{hotel.nomlieu}</h1>
                                    <h3 class="card-title text-center">{hotel.categorie}</h3>
                                  </div>
                                  <div class="card-body">
                                     <h5 class="card-title">Adresse : {hotel.adresse}</h5>
                                     <h6 class="card-title">Telephone : {hotel.telephone}</h6>
                                     <p class="card-text">nombre d'etoiles : {hotel.nb_etoile}</p>
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
export default Hotels
/** <div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                
                    return 
                              <h1></h1>
                              <h3></h3>
                              <p>adresse : </p>
                              <p>telephone : </p>
                              <p></p>
                           </div>
                })}
              </div>
            </div>*/