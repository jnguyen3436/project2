import React, { Component } from 'react'
import axios from 'axios'
//import GetAxios from './GetAxios'




export default class Home extends Component {
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
            this.getGIF()
          
        })
    
        axios.get("https://api.giphy.com/v1/stickers/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=r").then(gif=>{
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

//   getAxios("https://api.giphy.com/v1/stickers/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=G",advice)
    

    //https://api.giphy.com/v1/stickers/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=G
    getGIF=()=>{
      axios.get("https://api.giphy.com/v1/stickers/random?api_key=TdJwdGZNyu4K69K0Cha5IMjFM4LMz45L&tag=&rating=G").then(gif=>{
        
        this.setState({gif:gif.data.data.image_url})
        
          console.log(gif, gif.data.data.url)
        
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
           this.getGIF()
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
      <div className="Home">
          {/* {this.state.gif} */}
          <img src={this.state.gif}  alt = "thegif"/>

        
        <img id="dog" height ="300px" src={this.state.dog.message} alt ="doggo"/>
        <div id="name">First name :{this.state.info.name}</div>
        <div id="lastname">Last name : {this.state.info.surname}</div>
        <div id="region">From : {this.state.info.region}</div>
        <div id="advice"> Advice: {this.state.advice.advice}</div> 

        <div>
        <button onClick={this.getAll}>Click Here !!!</button>
        <button onClick={this.postProfile}>Add Friend!!</button>
        </div>
        
        

      </div>
    )
  }
}
