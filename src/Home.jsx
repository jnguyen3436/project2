import React, { Component } from 'react'

export default class Home extends Component {
    state ={
        advice :[],
        gif:null,
        info:[],
        dog:[]
      }

    render() {
        return (
            <div>
        <img id="dog" height ="300px" src={this.state.dog.message} alt ="doggo"/>
        <div id="name">First name :{this.state.info.name}</div>
        <div id="lastname">Last name : {this.state.info.surname}</div>
        <div id="region">From : {this.state.info.region}</div>
        <div id="advice"> Advice: {this.state.advice.advice}</div> 
        {/* <Switch>
          <Route path= "/#" component={Home}/>
          <Route path= "/list" component={List}/>
          </Switch> */}

        <div>
        <button onClick={this.getAll}>Click Here !!!</button>
        <button onClick={this.postProfile}>Add Friend!!</button>
        </div>
            </div>
        )
    }
}
