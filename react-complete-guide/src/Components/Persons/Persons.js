import  React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount () {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount()');
    }

    render () {

        console.log('[Persons.js] Inside Render()');

        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}/>
        });

    }
}

export default Persons;