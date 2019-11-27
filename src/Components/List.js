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
            //     <p style={{display:'none'}} className="bob">{profile._id}</p>
            //         <button onClick={this.removeFriend} >Remove Friend :c</button>
            //       <div>-----------------------------------------------</div>
            //   </div>
              



              <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card h-100">
                <img class="card-img-top" src={profile.dog}  alt="blah"/>
                <div class="card-body">
                  <h4 class="card-title">
                    <p>{profile.firstName} {profile.lastName}</p>
                  </h4>
                  <p class="card-text">{profile.advice}</p>
                </div>
              </div>
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

        
<div class="container">

  
  <h1 class="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div class="row">
   
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