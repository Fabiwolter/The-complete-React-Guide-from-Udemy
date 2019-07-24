import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {id: 'asdjk', name: 'Max', age: 28},
            {id: 'kdsfh', name: 'Fabian', age: 25},
            {id: 'asq1k', name: 'John Cena', age: 66}
        ],
        otherState: 'other state',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} )
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();       //another way to do it
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {      //weather we want to show the Persons div or not
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }



    render() {
        const style = {
            backgroundColor: 'magenta',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={ (event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a turtle</h1>
                <p>This works lol!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch name</button>
                {persons}
            </div>
        );
    }
}

export default App;
