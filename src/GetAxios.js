import React from 'react'
import axios from 'axios'

export default function GetAxios(url,theNameofState) {

    axios.get(url).then(advice=>{
        this.setState({theNameofState:theNameofState.data})
        
        console.log(theNameofState)
      
        
      })
    
}
