import React, { Component } from 'react'
import StarRatingComponent from "react-star-rating-component";
import jwt_decode from "jwt-decode"


import 'bootstrap'
import '../css/StyleRecInitiale.css'

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"



class Recommandation_initiale extends Component{

    constructor(){
     super()
     this.state = {
        recommandations : [],
        suggestions : [],
        rating : 1
      }
    }
    

    componentDidMount(){
      //recommandation pas prete
      fetch('http://localhost:5000/lieux/suggestions')
       .then(response => response.json())
       .then(data => this.setState({ suggestions : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)

      //recommandation prete
      console.log('recommandation called')
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
        fetch(`http://localhost:5000/recommandation/lieux?id_user=${decoded.id}`)
       .then(response => response.json())
       .then(data => {
          this.setState({ recommandations : data }, () =>{
            console.log(this.state.recommandations) 
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

    
    render(){
        const { rating } = this.state.rating;  
        if(this.state.recommandations.length > 0){
        return(
            <div>
                <Sidebar/> 
                 
              <div className="container">
                <section id="showcase">
                  <div className="container"></div>
                  <h1>Des recommandations pour vous</h1>
                  <p>Nous avons trouvé dans notre catalogue, une liste de lieu d'interet qui nous semblent correspondre à vos préférences.</p>
                  <p>Explorer nos recommandations ci-dessous et dite-nous si vous en etes satisfait !</p>
                </section>
                <section className="recommandation-1">
                <h2 className="text-muted"> Recommandations </h2>
                  <div className="recommandation-items-1">
                      {this.state.recommandations.map((recommandation) => {
                            return <div>
                                       <div className="card card-recommandation-1">
                                           <div className="card-body card-body-recommandation-1">
                                                  <h3 className="card-title">{recommandation.nomlieu}</h3>
                                                  <h6 className="card-subtitle mb-2 text-muted">{recommandation.categorie}</h6>
                                                  <p className="card-text card-text-recommandation-1">Adresse : {recommandation.adresse}</p>
                                                  <p className="card-text card-text-recommandation-1">Telephone : {recommandation.telephone}</p>
                                                  <div className="card-text-recommandation-1">
                                                  <StarRatingComponent 
                                                     name={recommandation.nomlieu} 
                                                     starCount={5}
                                                     value={rating}
                                                     onStarClick={this.onStarClick.bind(this)}
                                                  /></div>    
                                           </div>
                                       </div>   
                                   </div>
                       })}
                  </div>   
                </section> 
             </div>
              <Navbar/> 
            </div>
        )} else{
          return(
            <div>
              <Sidebar/> 
              <div className="container">
                <section id="showcase">
                  <h1>Bienvenue</h1>
                  <p>Vous êtes perdu ? Vous ne savez pas où sortir ?</p>
                  <p> On vous propose cette liste de suggestions de lieux d'intérêt sur la ville d'Oran.</p>
                  <p>Veuillez noter les lieux que vous connaissez déjà, pour nous aider à trouver de bonnes recommandations </p>
                </section>
                <section className="recommandation">
                   <h2 className="text-muted"> Suggestions </h2>
                   <div className="suggestion-items">
                      {this.state.suggestions.map((suggestion) => {
                        return <div>
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
        }
    
  }
}
export default Recommandation_initiale

/** 
 *    if(this.state.recommandations.length>0){
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
            <section className="recommandation-1">
               <h2 className="text-muted"> Suggestions </h2>
               <div className="suggestion-items">
                  {this.state.suggestions.map((suggestion) => {
                    return <div key={suggestion.idlieu}>
                              <div class="card mb-5 card-suggestion-1">
                                  <img class="card-img-top" src="/src/img/pic02.jpg" />
                                  <div class="card-img-overlay text-white">
                                    <h1 class="card-title suggestion-titre-1">{suggestion.nomlieu}</h1>
                                    <p className="suggestion-p-1">Appuyez sur les étoiles ci-dessous et donnez une note à ce lieu si vous le connaissez, sinon ne rien faire</p>
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
    <div className="container"></div>
*/