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
                  <div>-----------------------------------------------</div>
              <img src={profile.dog} width="200px" alt={profile.firstName}/>
              <h4>{profile.firstName}  {profile.lastName}</h4>
              <h6>{profile.location}</h6>
              <h5>{profile.advice}</h5>
                    <img src={profile.gif} alt={profile._url}/>
                  <div>-----------------------------------------------</div>
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