import React, { Component } from 'react'
import axios from 'axios'

import {Link,Switch,Route} from 'react-router-dom'
import List from './List'
import Home from "./Home"
export default class App extends Component {
 

  render() {
    return (
      <div className="App">


        <nav  className="navbar navbar-light" >Fake friend generator!!      
        <Link to="/list" color="white">Friends List </Link>
        <Link to="/home"> Friend Generator</Link>
         </nav>
        
        
        <Switch>
          <Route path= "/home" component={Home}/>
          <Route path= "/list" component={List} />
          </Switch>

      </div>
    )
  }
}
  


axios.delete("https://ironrest.herokuapp.com/johnny/5dd6af67aa6dd300172da7bc")