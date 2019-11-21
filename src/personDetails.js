import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import list from './List'

class personDetails extends Component {


    findCountry = (id) => {
        return list.find((aCountry)=>{
            return aCountry.id === id
        })
    }

    getBorders = (borders)=>{
        return borders.map((eachBorder)=>{
            let country = this.findCountry(eachBorder);
            return (
            <li>
                <Link to={`/country/${eachBorder}`}>
                    {country.name.common}
                </Link>
            </li>
            )
        })
    }


    render() {
        //console.log(this.props)
        let id = this.props.match.params.id; 
        console.log(' use ',id, " to find the right country ", list)
        console.log(list[0].id)

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

export default personDetails;