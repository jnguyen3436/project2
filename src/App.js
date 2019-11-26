import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import {Link,Switch,Route} from 'react-router-dom'
import List from './Components/List'
import Home from "./Components/Home"
import Friend from "./Components/Friend"
export default class App extends Component {
 

  render() {
    return (
      <div className="App">


        <nav  className="navbar navbar-light" >Fake friend generator!!      
        <Link to="/list" className="a" color="white">Friends List </Link>
        <Link to="/friend">Create a Friend</Link>
        <Link to="/home"> Friend Generator</Link>
         </nav>
        
        
        <Switch>
          <Route path= "/home" component={Home}/>
          <Route path= "/friend" component={Friend}/>
          <Route path= "/list" component={List} />
          </Switch>

      </div>
    )
  }
}
  


axios.delete("https://ironrest.herokuapp.com/johnny/5dd6b3ecaa6dd300172da7c6")