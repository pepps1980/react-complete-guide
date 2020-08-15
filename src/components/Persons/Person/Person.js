import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from "./Person.module.css";
import withClass from '../../../hoc/withClass';
import Auxilliary from "../../../hoc/Auxilliary";

class Person extends Component {
  render() {
    console.log("[Person.js] redering...");
    return (
      <Auxilliary>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
