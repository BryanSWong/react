import React, { Component } from 'react';
import classes from './App.css';
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

        let persons = null;
        let btnClass = '';

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

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if(this.state.persons.length <= 2){
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length <= 1){
            assignedClasses.push(classes.bold);
        }


        return (

            <div className={classes.App}>
                <h1>Hi Im a react app</h1>
                <p className={assignedClasses.join(' ')}>This is really working</p>
                <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
            );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
