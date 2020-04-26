import React, { Component } from 'react'
import StarRatingComponent from "react-star-rating-component";
import jwt_decode from "jwt-decode"


import 'bootstrap'
import "leaflet/dist/leaflet.css"
import '../css/StyleRecommandation.css'

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"



class Recommandation extends Component{

    constructor(){
     super()
     this.state = {
        latitude :'',
        longitude:'',
        recommandations : [],
        recommandation_affinee : [],
        rating : 1
      }
      this.calculerDistance = this.calculerDistance.bind(this)
      
    }
    

    componentDidMount(){
      //map
      /*
      this.map = L.map('map', {
        center:[35.6911100, -0.6416700],
        zoom: 6,
        zoomControl:false
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom:20,
      }).addTo(this.map);
      <p><div id="map" style={{height:280}} on></div></p>
      */

      //recommandation prete
      console.log('recommandation called')
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
        fetch(`http://localhost:5000/recommandation/lieux?id_user=${decoded.id}`)
       .then(response => response.json())
       .then(data => {
          this.setState({ recommandations : data }, () =>{
            console.log(this.state.recommandations)
            //calculer position
            console.log('getPosition called')
            
            const location = window.navigator && window.navigator.geolocation

            if(location){
              location.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
      
                this.setState({latitude : latitude, longitude : longitude}, () => {
                  //resultat position
                  console.log('latitude : '+this.state.latitude+' longitude : '+this.state.longitude)
                  var recommandation_affinee = [];
                  for(var i=0;i<this.state.recommandations.length;i++){
                    recommandation_affinee.push({
                        idlieu: this.state.recommandations[i].idlieu,
                        nomlieu: this.state.recommandations[i].nomlieu,
                        categorie: this.state.recommandations[i].categorie,
                        adresse: this.state.recommandations[i].adresse,
                        telephone: this.state.recommandations[i].telephone,
                        distance: this.calculerDistance(latitude,longitude,this.state.recommandations[i].latitude, this.state.recommandations[i].longitude)
                    })
                         
                  }
                  recommandation_affinee.sort((a, b) => {
                       return a.distance -b.distance
                  })
                  console.log(recommandation_affinee)
                  this.setState({recommandation_affinee : recommandation_affinee})
                })  
              })
            }(error) => {
              console.log(error)
            } 
          })
        })
       .catch(err => console.error(err))   
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        console.log(nextValue)
        console.log(name)
        
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        fetch(`http://localhost:5000/lieux/feedback?id_user=${decoded.id}&nomlieu=${name}&rating=${nextValue}`)
        .catch(err => console.error(err))
        
      }

      calculerDistance(lat1,lng1,lat2,lng2){
        var pi = 0.017453292519943295;    // Math.PI / 180
        var cos = Math.cos;
        var a = 0.5 - cos((lat2 - lat1) * pi)/2 +
            cos(lat1 * pi) * cos(lat2 * pi) *
            (1 - cos((lng2 - lng1) * pi))/2;
    
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    
    render(){
        const { rating } = this.state.rating;
         
        return(
            <div>
                <Sidebar/> 
                 
              <div className="container">
                <section id="showcase">
                  <div className="container"></div>
                  <h1>Recommandations affinées</h1>
                  <p> Pour vous faciliter la tâche, nous avons triee la liste de lieux recommandés selon la distance qui vous separe </p>
                </section>
                <section className="recommandation">
                <h2 className="text-muted"> Recommandations affinées </h2>
                  <div className="recommandation-items">
                      {this.state.recommandation_affinee.map((recommandation) => {
                            return <div key={recommandation.idlieu}>
                                       <div className="card card-recommandation">
                                           
                                           <div className="card-body card-body-recommandation">
                                                  <h3 className="card-title">{recommandation.nomlieu}</h3>
                                                  <h6 className="card-subtitle mb-2 text-muted">{recommandation.categorie}</h6>
                                                  <p className="card-text card-text-recommandation">Adresse : {recommandation.adresse}</p>
                                                  <p className="card-text card-text-recommandation">Telephone : {recommandation.telephone}</p>
                                                  <h5 className="card-text card-text-recommandation"> Distance : {recommandation.distance}</h5>
                                                  <div className="card-text-recommandation">
                                                  <StarRatingComponent 
                                                     name={recommandation.nomlieu} 
                                                     starCount={5}
                                                     value={rating}
                                                     onStarClick={this.onStarClick.bind(this)}
                                                  /></div>
                                                 <button type="button" className="btn btn-info ml-2" data-toggle="modal" data-target="#exampleModal">Afficher carte</button>
                                                 <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                   <div class="modal-dialog" role="document">
                                                     <div class="modal-content">
                                                        <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Carte geographique</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                         <span aria-hidden="true">&times;</span>
                                                        </button>
                                                     </div>
                                                     <div class="modal-body">
                                                        <div id="map-container-google-18" className="z-depth-1-half map-container-11"  style={{height: 300}}>
                                                           <iframe src={`https://maps.google.com/maps?q=Oran&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                                             frameborder="0" style={{height:300, width:450}} allowfullscreen></iframe>
                                                        </div>
                                                     </div>
                                                     <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                                     </div>
                                                   </div>
                                                 </div>
                                                </div>    
                                           </div>
                                       </div>   
                                   </div>
                       })}
                  </div>   
                </section> 
             </div>
              <Navbar/> 
            </div>
        )
     
  }
}
export default Recommandation

/**
  <div className="overflow">
   <img className="card-img-top" src="/src/img/pic02.jpg"/>
  </div> */

  /**else{
      return(
        <div>
          <Sidebar/> 
          <div className="container">
            <section id="showcase">
              <div className="container"></div>
              <h1>Bienvenue</h1>
              <p>Vous êtes perdu ? Vous ne savez pas où sortir ?</p>
              <p> On vous propose cette liste de suggestions de lieux d'intérêt sur la ville d'Oran.</p>
              <p>Veuillez noter les lieux que vous connaissez déjà, pour nous aider à trouver de bonnes recommandations </p>
            </section>
            <section className="recommandation">
               <h2 className="text-muted"> Suggestions </h2>
               <div className="suggestion-items">
                  {this.state.suggestions.map((suggestion) => {
                    return <div key={suggestion.idlieu}>
                              <div class="card mb-5 card-suggestion">
                                  <img class="card-img-top" src="/src/img/pic02.jpg" />
                                  <div class="card-img-overlay text-white">
                                    <h1 class="card-title suggestion-titre">{suggestion.nomlieu}</h1>
                                    <p className="suggestion-p">Appuyez sur les étoiles ci-dessous et donnez une note à ce lieu si vous le connaissez, sinon ne rien faire</p>
                                  </div>
                                  <div class="card-body">
                                     <h5 class="card-title">{suggestion.nomlieu}</h5>
                                     <h6 class="card-title">{suggestion.categorie}</h6>
                                     <p class="card-text">Adresse : {suggestion.adresse}</p>
                                     <p class="card-text">Telephone : {suggestion.telephone}</p>
                                     
                                     <StarRatingComponent 
                                       name={suggestion.nomlieu} 
                                       starCount={5}
                                       value={rating}
                                       onStarClick={this.onStarClick.bind(this)}
                                      />
                                     
                                  </div>
                              </div>
                            </div>
                          })}
                </div>   
            </section> 
         </div>
          <Navbar/> 
        </div>
    )
    } */