import React, { Component } from 'react'
import axios from 'axios'

export default class List extends Component {
    state = {theList:[]}

    getTheList =()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers",).then(profile=>{
          console.log(profile)
          this.setState({theList:profile})
        })
    }
    showTheList=()=>{
        this.getTheList()
      return this.state.theList.map(profile=>{
          return(
              
              <li>
              <h4>{profile.name}</h4>
              <img src={profile.image_url} width="200px" alt={profile.name}/>
              <p>{profile.description}</p>
              </li>
              
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
