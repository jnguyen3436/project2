import React, { Component } from 'react'
import axios from 'axios'
//import GetAxios from './GetAxios'
import {Link,Switch,Route} from 'react-router-dom'
import List from './List'
export default class App extends Component {
  state ={
    advice :[],
    gif:null,
    info:[],
    dog:[]
  }

  componentDidMount(){
    axios.get("https://api.adviceslip.com/advice").then(advice=>{
      this.setState({advice:advice.data.slip})
      
      console.log(advice.data.slip)
    
      
    })

    axios.get("https://api.giphy.com/v1/gifs/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=G").then(gif=>{
        this.setState({gif:gif.data})
        
        console.log(this.state.gif)
       
       })



       axios.get("https://uinames.com/api/").then(info=>{
          this.setState({info:info.data})
          
          console.log(this.state.info)
         
         })

         axios.get("https://dog.ceo/api/breeds/image/random").then(dog=>{
            this.setState({dog:dog.data})
            
            console.log(this.state.dog)
           
           })
    
  }
//"https://api.adviceslip.com/advice"
  getAdvice=()=>{
    axios.get("https://api.adviceslip.com/advice").then(advice=>{
      this.setState({advice:advice.data.slip})
      
      console.log(advice.data.slip)
     
     })
      
    }
  getAxios=(url,theNameofState)=> {

    axios.get(url).then(advice=>{
        this.setState({theNameofState:theNameofState.data})
        
        console.log(theNameofState)
      
        
      })
    
}

  

    //https://api.giphy.com/v1/gifs/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=G
    getGIF=()=>{
      axios.get("https://api.giphy.com/v1/gifs/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=G").then(gif=>{
        this.setState({gif:gif.data.url})
        
        console.log(gif.data.url)
       
       })
        
      }

      //https://uinames.com/api/

      getInfo=()=>{
        axios.get("https://uinames.com/api/").then(info=>{
          this.setState({info:info.data})
          
          console.log(this.state.info)
         
         })
          
        }

        //https://dog.ceo/api/breeds/image/random
        getDog=()=>{
          axios.get("https://dog.ceo/api/breeds/image/random").then(dog=>{
            this.setState({dog:dog.data})
            
            console.log(this.state.dog)
           
           })
            
          }

         getAll=()=>{
           this.getAdvice()
           this.getInfo()
           this.getDog()
         } 

         postProfile=()=>{
          axios.post("https://ironrest.herokuapp.com/johnny/",
          {
            dog:this.state.dog.message,
            firstName:this.state.info.name,
            lastName:this.state.info.surname,
            location:this.state.info.region,
            advice:this.state.advice.advice,


         })
        }
   

  render() {
    return (
      <div className="App">
        <nav>Fake friend generator!!      
        <Link to="/list">Friends List</Link>
        

        </nav>
        {/* {console.log(this.state.gif.data)}   */}
        {/* {this.state.gif && <img src={this.state.gif.data.embed_url} alt ="gif"/>} */}
        
        <img id="dog" height ="300px" src={this.state.dog.message} alt ="doggo"/>
        <div id="name">First name :{this.state.info.name}</div>
        <div id="lastname">Last name : {this.state.info.surname}</div>
        <div id="region">From : {this.state.info.region}</div>
        <div id="advice"> Advice: {this.state.advice.advice}</div> 
        <Switch>
          <Route path= "/list" component={List} />
          </Switch>

        <div>
        <button onClick={this.getAll}>Click Here !!!</button>
        <button onClick={this.postProfile}>Add Friend!!</button>
        </div>
        

      </div>
    )
  }
}
  


//axios.delete("https://ironrest.herokuapp.com/johnny/5dd6ab64aa6dd300172da7af")