import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

    state = {
        input:[
            {word: ''}
        ]
    };

    inputHandler = (event) => {
        this.setState({input:[{word: event.target.value}]})
    };

    deleteHandler = (inputIndex) => {
        const input = [...this.state.input];
        input.splice(inputIndex, 1);
        this.setState({input: input})
    };

    render() {

        let input = null;

        if(this.state.input[0].word.length > 0){
            input = (
                <div>
                    {this.state.input[0].word.split('').map((text, index) => {
                        return <Char
                            letter={text}
                            key="123"
                            clicked={() => this.deleteHandler(index)}
                        />
                    })}
                </div>
            );
        }

        return <div className="App">
            <Input word={this.state.input[0].word} changed={this.inputHandler}/>
            <Validation word={this.state.input[0].word.length}/>
            {input}
         </div>
    }
}

export default App;


/*
* 1. Create input field (in app component) with a change listener which outputs the length
* of the text below it (e.g in a paragraph).
* COMPLETE
*
* 2. Create a new component (=> ValidationComponent) which receives the text length as a prop.
* COMPLETE
*
* 3. Inside the ValidationComponent, either output "text too short" or "Text long enough"
* depending on the ext length (e.g take 5 as a minimum length)
* COMPLETE
*
* 4. Create another component (=> CharComponent) and style it as inline box
* (=> display: inline-block, padding: 16 px, text-align: center, margin: 16px, border:1 px solid black
* COMPLETE
*
* 5. Render a list of CharComponents where each CharComponent receives a different letter entered text
* (in the initial input field) as a prop.
* COMPLETE
*
* 6. when you click a char component it should be removed form the entered text.
*
*
* */