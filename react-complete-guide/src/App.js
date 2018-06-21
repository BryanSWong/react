import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


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

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        click={() => this.deletePersonHandler(index)}
                        changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi Im a react app</h1>
                <p>This is really working</p>
                <button style= {style} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
            );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
