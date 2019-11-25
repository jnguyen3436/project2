import React, { Component } from 'react'

export default class Friend extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Advice"/>
                    <input type="text" placeholder="Image URL"/>
                    <input type="text" placeholder="GIPHY Gif URL"/>
                    <input type="submit" value="Submit when done"/>
                </form>
                helo
            </div>
        )
    }
}
