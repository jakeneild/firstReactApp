import React, { Component } from 'react'


export default class EmployeeList extends Component {
    state = {
        employees: [
            { id: 1, name: "Caitlin"},
            { id: 2, name: "Gabe"},
            { id: 3, name: "Josh"},
            { id: 4, name: "Mary"}
        ]
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                {
                    this.state.employees.map(employee =>  <li>{employee.name}</li> )
                }
                </ul>
            </React.Fragment>
        )
    }
}