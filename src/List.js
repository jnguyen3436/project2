import React, { Component } from 'react'
import axios from 'axios'

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
              
              <div>
              <h4>{profile.firstName}  {profile.lastName}</h4>
              <h6>{profile.location}</h6>
              <img src={profile.dog} width="200px" alt={profile.firstName}/>
              
              </div>
              
          )
      })

    }
    

  render() {
      return (
          <div>
              
              Friends
              {this.showTheList()} 
          </div>
      )
  }
}
