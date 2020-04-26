import React, { Component } from 'react'

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleRestaurant.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Restaurants extends Component{

    constructor(){
     super()
     this.state = {
        restaurants : []
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/restaurants')
       .then(response => response.json())
       .then(data => this.setState({ restaurants : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                <div>
          <Sidebar/> 
          <div className="container">
            <section id="showcase_restaurant">
              <div className="container"></div>
              <h1>Restaurantss</h1>
              <p>Vous trouvez ici tous les restaurants de la ville d'Oran ?</p>
            </section>
            <section className="recommandation">
               <h2 className="text-muted"> Restaurants </h2>
               <div className="suggestion-items">
               {this.state.restaurants.map((restaurant) => {
                    return <div key={restaurant.idlieu}>
                              <div class="card mb-5 card-suggestion">
                                  <img class="card-img-top" src="/src/img/pic05.jpg" />
                                  <div class="card-img-overlay text-white">
                                    <h1 class="card-title suggestion-titre">{restaurant.nomlieu}</h1>
                                    <h3 class="card-title text-center">{restaurant.categorie}</h3>
                                  </div>
                                  <div class="card-body">
                                     <h5 class="card-title">Adresse : {restaurant.adresse}</h5>
                                     <h6 class="card-title">Telephone : {restaurant.telephone}</h6>
                                     <p class="card-text">nombre d'etoiles : {restaurant.nb_etoile}</p>
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
export default Restaurants

/**<div>
                 <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                
                    return 
                              <h1></h1>
                              <h3>{restaurant.categorie}</h3>
                              <p>adresse : {restaurant.adresse}</p>
                              <p>telephone : {restaurant.telephone}</p>
                              <p>nombre d'etoiles : {restaurant.nb_etoile}</p>
                           </div>
                })}
              </div>
            </div> */