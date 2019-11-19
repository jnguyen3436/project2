import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state ={
    advice :[]
  }

  componentDidMount(){
    axios.get("https://api.adviceslip.com/advice").then(advice=>{
      this.setState({advice:advice.data.slip})
      
      console.log(advice.data.slip)
    
      
    })
    
  }

  getAdvice=()=>{
    axios.get("https://api.adviceslip.com/advice").then(advice=>{
      this.setState({advice:advice.data.slip})
      
      console.log(advice.data.slip)
    
      
    })
  }
   

  render() {
    return (
      <div className="App">
        <nav>COOL NAV BAR!!</nav>
        {this.state.advice.advice}
        <div>
        <button onClick={this.getAdvice}>Click Here Grace!!</button>
        </div>
        

      </div>
    )
  }
}
  


