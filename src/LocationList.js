import React, { Component } from 'react'


export default class Locationlist extends Component {
    render() {
        return (
            <React.Fragment>
            {
                this.props.locations.map(location =>
                    <div>
                        {location}
                    </div>
                )
            }
            </React.Fragment>
        )
    }
}