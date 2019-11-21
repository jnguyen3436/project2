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
    showList=()=>{

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
