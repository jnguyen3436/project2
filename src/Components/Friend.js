import React, { Component } from 'react'
import axios from "axios"

export default class Friend extends Component {

    state ={
        firstName:null,
        lastName:null,
        location:null,
        advice:null,
        dog:null,
        gif:null,
    }

    handleChange=(e)=> {
        console.log(e.target.value);
        //console.log(e.target.id)
        //if(e.target.id===firstName)

        switch (e.target.id){
            case "firstName":

                    this.setState({

                        firstName:e.target.value
            
                    });
                    break;
            case "lastName":

                    this.setState({

                        lastName:e.target.value
            
                    });
                    break;
            case "advice":

                    this.setState({

                        advice:e.target.value
            
                    });
                    break;
                    case "location":

                            this.setState({
        
                                location:e.target.value
                    
                            });
                            break;
            case "dog":

                    this.setState({

                        dog:e.target.value
            
                    });
                    break;
            case "gif":

                    this.setState({

                        gif:e.target.value
            
                    });
                    break;
                    
            
                    default:
                        console.log("AHHH ITS BROKEN")
        }
        
        // this.setState({

        //     firstName:e.target.value

        // }
        // )
        
      }

      postProfile=()=>{
          
        axios.post("https://ironrest.herokuapp.com/johnny/",
        {
            dog:this.state.dog,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            location:this.state.location,
            advice:this.state.advice,
          gif:this.state.gif


       })
       window.alert("Friend Added");
    //    this.setState({
    //     firstName:null,
    //     lastName:null,
    //     location:null,
    //     advice:null,
    //     dog:null,
    //     gif:null,
    //   });
      }


    render() {
        return (
            <div>
                <h3>Create Your Friend!</h3>
                <form>
                    <input id="firstName" type="text" placeholder="First Name" onChange={this.handleChange}/>
                    <input id="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}/>
                    <input id="location" type="text" placeholder="Location" onChange={this.handleChange}/>
                    <input id="advice"type="text" placeholder="Advice" onChange={this.handleChange}/>
                    <input id="dog"type="text" placeholder="Image URL" onChange={this.handleChange}/>
                    <input id="gif"type="text" placeholder="GIPHY Gif URL" onChange={this.handleChange}/>
                    <input type="submit" value="Submit when done" onClick={this.postProfile}/>
                </form>
                
            </div>
        )
    }
}
