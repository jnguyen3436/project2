import React, { Component } from 'react'
import axios from 'axios'
import {Link,Switch,Route} from 'react-router-dom'
import personDetails from './personDetails'

export default class List extends Component {
    state = {theList:[]}
componentDidMount(){
    
        axios.get("https://ironrest.herokuapp.com/johnny",).then(profile=>{
          console.log(profile)
          this.setState({theList:profile.data})
        })
    
}
    showTheList=()=>{
      return this.state.theList.map(profile=>{
          return(
              
        <Link className="list-group-item list-group-item-action" key={profile.id} to={`/list/${profile.id}`}> 
        
        
              <div>
                  
              <img src={profile.dog} width="200px" alt={profile.firstName}/>
              <h4>{profile.firstName}  {profile.lastName}</h4>
              <h6>{profile.location}</h6>
              <h5>{profile.advice}</h5>
                  
              </div>
              </Link>
          )
      })

    }
    

  render() {
      return (
          <div>
              <div className="container">
          <div className="row">
            <div className="col-5" >
              <div className="list-group">
                
              {this.showTheList()} 
              </div>
            </div>

            <Switch>
              <Route exact path="/country/:id" component={personDetails}/>
            </Switch>
            {/* <CountryDetails countryInfo={this.state.countries}/> */}


          </div>
        </div>
              
              Friends
          </div>
      )
  }
}
