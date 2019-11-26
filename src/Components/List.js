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
              
              <div key={profile._id}>
                  <div>-----------------------------------------------</div>
              <img src={profile.dog} width="200px" alt={profile.firstName}/>
              <h4>{profile.firstName}  {profile.lastName}</h4>
              <h6>{profile.location}</h6>
              <h5>{profile.advice}</h5>
                    <img src={profile.gif} alt={profile._url}/>
                    <button onClick={this.removeFriend} >Remove Friend :c</button>
                  <div>-----------------------------------------------</div>
              </div>
              
          )
      })

    }

    removeFriend=()=>{
        //console.log(this.profile.key)
        window.alert("This feature isn't working right now, stay posted for future updates!")
        //axios.delete(`https://ironrest.herokuapp.com/johnny/${this.profile._id}`)
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