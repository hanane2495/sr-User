import React, { Component } from 'react'
import StarRatingComponent from "react-star-rating-component";
import jwt_decode from "jwt-decode"

import 'bootstrap'
import "../css/bootstrap.min.css"
import "../css/StyleLieux.css"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


class Profile extends Component{

    constructor(){
     super()
     this.state = {
        suggestions : [],
        rating : 1
    }
    }
    

    componentDidMount(){
        fetch('http://localhost:5000/lieux/suggestions')
       .then(response => response.json())
       .then(data => this.setState({ suggestions : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
        
    }


    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        console.log(nextValue)
        console.log(name)
        
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        fetch(`http://localhost:5000/lieux/suggestions/evaluation?id_user=${decoded.id}&nomlieu=${name}&rating=${nextValue}`)
        .catch(err => console.error(err))
        
      }

    
    render(){
        const { rating } = this.state.rating;
        return(
            <div>
                <Sidebar/>
                <Navbar/>  
              <div className="container"> 
                {this.state.suggestions.map((suggestion) => {
                    return <div key={suggestion.idlieu}>
                              <h1>{suggestion.nomlieu}</h1>
                              <h3>{suggestion.categorie}</h3>
                              <p>adresse : {suggestion.adresse}</p>
                              <p>telephone : {suggestion.telephone}</p>
                              <h2>Rating from state: {rating}</h2>
                              <StarRatingComponent 
                                  name={suggestion.nomlieu} 
                                  starCount={5}
                                  value={rating}
                                  onStarClick={this.onStarClick.bind(this)}
                                />
                           </div>
                })}
              </div>
            </div>
        )
    }
}
export default Profile