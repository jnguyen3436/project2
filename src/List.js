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
            })
        })
        .catch(err => {
            console.log(err)
        })
    //     .then(profile=>{
    //       console.log(profile)
        //   this.setState({theList:profile.data})
    // }}
        //     ,()=>{
        //       console.log("the list")
        //       console.log(this.state.theList)
        //       let test = this.state.theList.map(person => 
        //           person.firstName + " " + person.lastName
        //       )
        //       console.log(test)
        //       return test
              
        //   })
       // }
        
}


    // showTheList=()=>{
    //   return this.state.theList.map(profile=>{
    //       return(
              
    //     <Link className="list-group-item list-group-item-action" key={i} to={`/list/${profile.id}`}> 
    //           {profile.firstName}  
    //     </Link>
    //       )
    //   })

    // }

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
              <Route exact path="/country/:id" component={profile}/>
            </Switch>
            {/* <CountryDetails countryInfo={this.state.countries}/> */}


          </div>
        </div>
            
            


          
              
          
      )
  }
}
