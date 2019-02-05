import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { id: 'sdf1', name: 'Max', age: '26' },
      { id: 's12df1', name: 'Manu', age: '29' }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.state.persons[0].name = 'asdf';
    console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: '26' },
        { name: 'Manu', age: '27' }
      ]
    })
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    console.log('was clicked');
    this.setState({
      persons: persons
    })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          );
        })}
      </div>);
      style.backgroundColor = 'red';
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>I am a react app123</h1>
        <p className={classes.join(' ')}>this is working</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
      //  React.createElement('div',{className:'App'},React.createElement('h1',null,'how are you?'))
    );
  }
}

export default App;
