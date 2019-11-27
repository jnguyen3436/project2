import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import List from './Components/List'
import Generator from "./Components/Generator"
import Friend from "./Components/Friend"
import Landing from "./Components/Landing"
import Navbar from 'react-bootstrap/Navbar'
import { Button,Form,FormControl } from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
export default class App extends Component {
 

  render() {
    return (
      <div className="App">

<Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      
      <Nav.Link href="#list">Friends List</Nav.Link>
      <Nav.Link href="#friend">Create A Friend</Nav.Link>
      <Nav.Link href="#generator">Friend Generator</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>





        
        {/* <nav  className="navbar navbar-light" >
        <Link style={{color:'white'}} to="/home">Fake friend generator!!</Link>  
        <Link style={{color:'white'}} to="/list" className="a" color="white">Friends List </Link>
        <Link style={{color:'white'}} to="/friend">Create a Friend</Link>
        <Link style={{color:'white'}} to="/generator"> Friend Generator</Link>
         </nav> */}
        
        
        <Switch>
          <Route path= "/home" component={Landing}/>
          <Route path= "/generator" component={Generator}/>
          <Route path= "/friend" component={Friend}/>
          <Route path= "/list" component={List} />
          </Switch>

      </div>
    )
  }
}
  


axios.delete("https://ironrest.herokuapp.com/johnny/5ddd5e54b23a8d0017ac07bd")