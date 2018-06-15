import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        output: [
            {name:"Thisguy"},
            {name: "Thatguy"},
            {name: "Otherguy"}
        ]
    };

    changeNameHandler = () => {
        this.setState({output: [
            {name:"Thisguyoverthere"},
            {name: "Thatguy"},
            {name: "Otherguy"}
        ]})
    };

    newNameHandler = (event) => {
        this.setState({output: [
            {name: "Thisguyoverthere"},
            {name: event.target.value},
            {name: "Otherguy"}
        ]})
    };


    render() {
        const style = {
            backgroundColor: 'blue',
            font: 'inherit',
            margin: '2px solid green',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '12px'
        };

        return (
          <div className="App">
              <button style={style} onClick={this.changeNameHandler}>Change</button>
              <UserOutput name={this.state.output[0].name}/>
              <UserOutput name={this.state.output[1].name}/>
              <UserOutput name={this.state.output[2].name}/>
              <UserInput name={this.state.output[1].name} changed={this.newNameHandler}/>
          </div>
    );
  }
}

export default App;
