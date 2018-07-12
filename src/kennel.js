//This is old and not used anymore.  Each of the component states are moved to 
//their own files

import React, { Component } from "react"
import EmployeeList from "./employeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"

export default class Kennel extends Component {

    state = {
        animals: [
            {id: 1, name: "Doggy"},
            {id: 2, name: "Ralph"},
            {id: 3, name: "Dogger"},
            {id: 4, name: "Dogster the Third"}
        ],
        employees: [
            { id: 1, name: "Caitlin"},
            { id: 2, name: "Gabe"},
            { id: 3, name: "Josh"},
            { id: 4, name: "Mary"}
        ],
        locations: [
            { id: 1, name: "12 South"},
            { id: 2, name: "3rd and Western"},
            { id: 3, name: "Clarksville"}
        ],
        animalOwners: [
            {id: 1, animal: 1, owner: 1},
            {id: 2, animal: 2, owner: 2},
            {id: 3, animal: 3, owner: 3},
            {id: 4, animal: 4, owner: 4},
        ],
        owners: [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
        ]
    }
  
    render() {
        return (
            <React.Fragment>
                <AnimalList animals={this.state.animals} />
                <EmployeeList employees={this.state.employees} />
                <LocationList locations={this.state.locations} />
            </React.Fragment>
        );
    }
  }