import React, { Component } from 'react'
import "../css/bootstrap.min.css"
import "../css/StyleApropos.css"
import Header from './Header';





class Apropos extends Component{
    render(){
        return(
          <div className="container-fluid"> 
            <div id="slider">
            <div id="headerSlider" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
                    <li data-target="#headerSlider" data-slide-to="1"></li>
                    <li data-target="#headerSlider" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/src/img/wahran 2.jpg" alt="First slide"/>
                        <div className="carousel-caption">
                           <h5>Santa cruz</h5>
                           <p>decouvrez le fort le plus ancien d'Oran</p>
                        </div>
                    </div>
                     <div className="carousel-item">
                       <img className="d-block w-100" src="/src/img/services.jpg" alt="Second slide"/>
                       <div className="carousel-caption">
                           <h5>Oran by the night</h5>
                           <p></p>
                       </div>
                     </div>
                     <div className="carousel-item">
                        <img className="d-block w-100" src="/src/img/plage6.png" alt="Third slide"/>
                        <div className="carousel-caption">
                           <h5>Madagh plage</h5>
                           <p>Explorez les meilleures plages de l'Algérie </p>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
             </div>
        </div>
        <section id="about">
           <div className="container ml-5">
               <div className="row">
                   <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 ">
                       <h2>A propos de nous</h2>
                       <div className="about-content">
                           Deuxième plus grande ville d’Algérie Oran, dite « Wahran El Bahia », est considérée comme une métropole importante. La ville est située au nord-ouest de l’Algérie, à environ 430 km de la capitale Alger. Notre application va vous aidez a mieux explorer cette merveilleuse ville en vous proposant des recommandations sur des lieux de sortie en ville selon vos preferences ainsi que votre localisation actuel, pour cela veuillez nous autoriser à identifiee votre position svp!.  
                       </div>
                   </div> 
               </div>
           </div>
        </section>
        <section id="services">
            
                <h1>Nos services</h1>
            
        </section>
        <Header/>
    
          </div>
        )
    }
}
export default Apropos