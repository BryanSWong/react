import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {name: 'Dude', age: 33 },
            {name: 'SomeGuy', age: 34 },
            {name: 'ThisGuy', age: 35 }
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        // console.log('was clicked');
        // DONT DO THIS this.state.persons[0].name = 'ThatGuy';
        this.setState({
            persons: [
                {name: newName, age: 37 },
                {name: 'SomeGuy', age: 34 },
                {name: 'ThisGuy', age: 35 }
            ]
        });
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Dude', age: 37 },
                {name: event.target.value, age: 34 },
                {name: 'ThisGuy', age: 35 }
            ]
        });
    }

  render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        };

    return (
      <div className="App">
          <h1>Hi Im a react app</h1>
          <p>This is really working</p>
          <button style= {style} onClick={this.switchNameHandler.bind(this, 'ThatDude')}>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Dude!')}>Hobbies: running</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
