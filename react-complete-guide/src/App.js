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

    switchNameHandler = () => {
        // console.log('was clicked');
        // DONT DO THIS this.state.persons[0].name = 'ThatGuy';
        this.setState({
            persons: [
                {name: 'ThatDude', age: 37 },
                {name: 'SomeGuy', age: 34 },
                {name: 'ThisGuy', age: 35 }
            ]
        })
    };
  render() {
    return (
      <div className="App">
          <h1>Hi Im a react app</h1>
          <p>This is really working</p>
          <button onClick={this.switchNameHandler}>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies: running</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
