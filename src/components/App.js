import React, { Component } from 'react'
import 'bootstrap'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from "./Header"
import Login from "./Login"
import Inscription from "./Inscription"
import Apropos from "./Apropos"
import Profile from './Profile'
import Hotels from './Hotels'
import Restaurants from './Restaurants'
import Plages from './Plages'
import Centres_Commerciaux from './Centres_Commerciaux'
import Centres_Culturels from './Centres_Culturels'
import Cinemas from './Cinemas'
import Espaces_verts from './Espaces_verts'
import Parc_attraction from './Parc_attraction'
import Musees from './Musees'
import Theatres from './Theatres'
import Bibliotheques from './Bibliotheques'
import Recommandation from './Recommandation'
import Recommandation_initiale from './Recommandation_initiale'
 

class App extends Component{
    render(){
        return(
            <Router>
              <div> 
                 <Switch>
                 <Route path="/" exact component={Apropos}/>
                 <Route path="/Login" component={Login}/>
                 <Route path="/Inscription" component={Inscription}/>
                 <Route path="/Profile" component={Profile}/>
                 <Route path="/Hotels" component={Hotels}/>
                 <Route path="/Restaurants" component={Restaurants}/>
                 <Route path="/Cinemas" component={Cinemas}/>
                 <Route path="/Centres_Commerciaux" component={Centres_Commerciaux}/>
                 <Route path="/Centres_Culturels" component={Centres_Culturels}/>
                 <Route path="/Plages" component={Plages}/>
                 <Route path="/Bibliotheques" component={Bibliotheques}/>
                 <Route path="/Theatres" component={Theatres}/>
                 <Route path="/Musees" component={Musees}/>
                 <Route path="/Espaces_verts" component={Espaces_verts}/>
                 <Route path="/Parc_attraction" component={Parc_attraction}/>
                 <Route path="/Recommandation" component={Recommandation}/>
                 <Route path="/Recommandation-initiale" component={Recommandation_initiale}/>
                 </Switch>
              </div>
            </Router>
        )
    }
}
export default App