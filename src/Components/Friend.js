import React, { Component } from 'react'
import axios from "axios"

export default class Friend extends Component {

    state ={
        firstName:null,
        lastName:null,
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
       
      }


    render() {
        return (
            <div>
                <form>
                    <input id="firstName" type="text" placeholder="First Name" onChange={this.handleChange}/>
                    <input id="lastName" type="text" placeholder="Last Name"/>
                    <input id="location" type="text" placeholder="Location"/>
                    <input id="advice"type="text" placeholder="Advice"/>
                    <input id="dog"type="text" placeholder="Image URL"/>
                    <input id="gif"type="text" placeholder="GIPHY Gif URL"/>
                    <input type="submit" value="Submit when done" onClick={this.postProfile}/>
                </form>
                helo
            </div>
        )
    }
}
