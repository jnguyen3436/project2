import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import {Link,Switch,Route} from 'react-router-dom'
import List from './Components/List'
import Generator from "./Components/Generator"
import Friend from "./Components/Friend"
import Landing from "./Components/Landing"
export default class App extends Component {
 

  render() {
    return (
      <div className="App">


        <nav  className="navbar navbar-light" >
        <Link to="/">Fake friend generator!!</Link>  
        <Link to="/list" className="a" color="white">Friends List </Link>
        <Link to="/friend">Create a Friend</Link>
        <Link to="/generator"> Friend Generator</Link>
         </nav>
        
        
        <Switch>
          <Route path= "/" component={Landing}/>
          <Route path= "/generator" component={Generator}/>
          <Route path= "/friend" component={Friend}/>
          <Route path= "/list" component={List} />
          </Switch>

      </div>
    )
  }
}
  


axios.delete("https://ironrest.herokuapp.com/johnny/5dd6b3ecaa6dd300172da7c6")