import React, { Component } from 'react'


export default class Locationlist extends Component {
    state = {
        locations: [
            { id: 1, name: "12 South"},
            { id: 2, name: "3rd and Western"},
            { id: 3, name: "Clarksville"}
        ]
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                {
                    this.state.locations.map(location =>  <li>{location.name}</li> )
                }
                </ul>
            </React.Fragment>
        )
    }
}