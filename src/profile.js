import React, { Component } from 'react';
import theList from './List'
import axios from "axios"

class profile extends Component {
    

    findCountry = (id) => {
        return theList.find((aCountry)=>{
            return aCountry._id === id
        })
    }

    getInfo=()=>{
        axios.get("https://uinames.com/api/").then(info=>{
          this.setState({info:info.data})
          
          console.log(this.state.info)
         
         })
          
        }

   


    render() {
        //console.log(this.props)
        let id = this.props.match.params.id; 
        console.log(theList)
        console.log(' use ',id, " to find the right country ", theList)
        

        let theCountry = this.findCountry(id)

   
        return (
            <div className="details">
                <div className="col-7">
                    <h1>{theCountry.name.common}</h1>
                    <table className="table">
                    <thead></thead>
                        <tbody>
                            <tr>
                            <td >Capital</td>
                            <td>{theCountry.capital}</td>
                            </tr>
                            <tr>
                            <td>Area</td>
                            <td>{theCountry.area}
                                <sup>2</sup>
                            </td>
                            </tr>
                            <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {this.getBorders(theCountry.borders)}
                                </ul>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default profile;