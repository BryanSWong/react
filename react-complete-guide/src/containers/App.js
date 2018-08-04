import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor', props);
        this.state = {
            persons: [
                {id: 'yolds', name: 'Dude', age: "33" },
                {id: 'foldsnf', name: 'SomeGuy', age: 34 },
                {id: 'nbdsaof', name: 'ThisGuy', age: 35 }
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0,
            authenticated: false
        };
    }

    componentWillMount () {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('[Update App.js] Inside getDerivedStateFromProps', nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate(){
        console.log('[Update App.js] Inside getSnapshotBeforeUpdate');
    }

    componentDidUpdate(){
        console.log('[Update App.js] Inside componentDidUpdate');
    }

    // state = {
    //     persons: [
    //         {id: 'yolds', name: 'Dude', age: 33 },
    //         {id: 'foldsnf', name: 'SomeGuy', age: 34 },
    //         {id: 'nbdsaof', name: 'ThisGuy', age: 35 }
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // };

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
        this.setState( (prevState, props) => {
            return {showPersons: !doesShow, toggleClicked: prevState.toggleClicked + 1}
        });
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // modern syntext
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    loginHandler = () => {
        this.setState({authenticated: true});
    };


    render() {

        console.log('[App.js] Inside Render()');

        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons
                persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangeHandler}/>;
        }

        return (

            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                    login={this.loginHandler}/>
                <AuthContext.Provider value={this.state.authenticated}>
                {persons}
                </AuthContext.Provider>
            </Aux>
            );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default withClass(App, classes.App);
