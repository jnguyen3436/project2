import React, { Component } from 'react'
import axios from 'axios'
import profile from './profile'
import {Switch,Route} from 'react-router-dom'


export default class List extends Component {
    state = {
        theList:[],
    thePerson:null
}
componentDidMount(){
    
        axios.get("https://ironrest.herokuapp.com/johnny")
        .then(data => {
            console.log(data)
            this.setState({theList: data.data},()=>{
                console.log(this.state.theList)
                //this.postTheList()
            })
        })
        .catch(err => {
            console.log(err)
        })
    
        
}

postTheList=()=>{
    axios.post("https://ironrest.herokuapp.com/johnny",{daBaby:this.state.theList})
     
     
      
    }


   

    showTheList = () => {
        const fullList = this.state.theList.map((profile) => {
            return (
            <button className="list-group-item list-group-item-action" onClick={this.yoMomma}> 
            {profile.firstName} 
            </button>
            )
        })
        console.log(fullList)
        return fullList
        
      }
      yoMomma = ()=>{
          console.log("yo momma")
        // this.setState({
        //     thePerson:this.profile
        // })
        console.log(this.state.thePerson)
    }


  render() {
      return (
          
              <div className="container">
          <div className="row">
            <div className="col-5" >
              <div className="list-group">
              {this.showTheList()} 
              </div>
            </div>



            <Switch>
              <Route exact path="/list/:id" component={profile}/>
            </Switch>
            {/* <CountryDetails countryInfo={this.state.countries}/> */}


          </div>
        </div>
            
            


          
              
          
      )
  }
}
