import React, { Component } from 'react'
import axios from 'axios'

export default class List extends Component {
    state = {theList:[]}
componentDidMount(){
    
        axios.get("https://ironrest.herokuapp.com/johnny",).then(profile=>{
          console.log(profile.data)
          this.setState({
              theList:profile.data
            })
        })
    
}
    showTheList=()=>{
        
      return this.state.theList.map((profile, i)=>{
          //console.log(i)
          return(  
            //   <div id = {i} key={profile._id}>
            //       <div>-----------------------------------------------</div>
            //   <img src={profile.dog} width="200px" alt={profile.firstName}/>
            //   <h4>{profile.firstName}  {profile.lastName}</h4>
            //   <h6>{profile.location}</h6>
            //   <h5>{profile.advice}</h5>
            //     <img src={profile.gif} alt={profile._url}/>
            //     <p style={{display:'none'}} classNameName="bob">{profile._id}</p>
            //         <button onClick={this.removeFriend} >Remove Friend :c</button>
            //       <div>-----------------------------------------------</div>
            //   </div>
              



              <div className="col-lg-4 col-sm-6 mb-4" id={i} key={profile._id}>
              <div className="card h-100">
                <img className="card-img-top" src={profile.dog} width='60%' height='60%' alt="blah"/>
                <div className="card-body">
                  <h4 className="card-title">
                    <p>{profile.firstName} {profile.lastName}</p>
                  </h4>
                    <h5>{profile.location}</h5>
                  <p className="card-text">{profile.advice}</p>
                  <img src={profile.gif} width='60%' height='60%' alt="thegif"/>
                </div>
                
              </div>
                  <button onClick={this.removeFriend} >Remove Friend :c</button>
              </div>
           
          )
      })

    }
    
    removeFriend=(e)=>{
        // let copyList = [...this.state.theList]
        let index = e.target.parentElement.id
        console.log(e.target.parentElement)
        let copy = [...this.state.theList]

        copy.splice(index, 1)

        this.setState({
            theList: copy
        })


        // console.log(e.target.parentElement.id)
        // let item = 
    //     console.log()
    //    // window.alert("This feature isn't working right now, stay posted for future updates!")
    //     axios.delete(`https://ironrest.herokuapp.com/johnny/${this.profile._id}`)
    //     .then(data =>{
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    }
    

  render() {
      return (

        
<div className="container">

  
  <h1 className="my-4">Friends List
    <small>...just fyi they're not real</small>
  </h1>

  <div className="row">
   
  {this.showTheList()} 
  </div>
  

  
  
</div>




        //   <div>
              
        //       Friends
        //       {this.showTheList()} 
        //   </div>
      )
  }
}