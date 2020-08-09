import React, { Component } from "react";
import Raduim from 'raduim';
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Max", age: 28 },
      { id: '2', name: "Manu", age: 29 },
      { id: '3', name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( { persons: persons} );
  }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id ;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  };

  togglePersonsHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons=null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2)
      classes.push('red');
    if (this.state.persons.length <= 1)
      classes.push('bold');



    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandle}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, I'm a React App!!!")
  // );
}

export default Radium(App);
