import React, { Component } from 'react'

export default class Friend extends Component {
    render() {
        return (
            <div>
                <form>
                    <input id="firstName" type="text" placeholder="First Name"/>
                    <input id="lastName" type="text" placeholder="Last Name"/>
                    <input id="advice"type="text" placeholder="Advice"/>
                    <input id="image"type="text" placeholder="Image URL"/>
                    <input id="gif"type="text" placeholder="GIPHY Gif URL"/>
                    <input type="submit" value="Submit when done"/>
                </form>
                helo
            </div>
        )
    }
}
