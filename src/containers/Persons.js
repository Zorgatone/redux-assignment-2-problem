import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

function makePerson() {
  return {
    id: new Date().getTime(), // not really unique but good enough here!
    name: "Max",
    age: Math.floor(Math.random() * 40)
  };
}

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={() => this.props.addUser(makePerson())} />
        {this.props.users.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.removeUser(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  addUser: person => dispatch({ type: "ADD_USER", value: person }),
  removeUser: id => dispatch({ type: "REMOVE_USER", value: id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
