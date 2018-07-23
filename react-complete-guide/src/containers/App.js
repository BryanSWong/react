import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {
    state = {
        persons: [
            {id: 'yolds', name: 'Dude', age: 33 },
            {id: 'foldsnf', name: 'SomeGuy', age: 34 },
            {id: 'nbdsaof', name: 'ThisGuy', age: 35 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const person = {...this.state.persons[personIndex]};
        //const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };


    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // modern syntext
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };


    render() {

        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons
                persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangeHandler}/>;
        }

        return (

            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>
                {persons}
            </div>
            );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
