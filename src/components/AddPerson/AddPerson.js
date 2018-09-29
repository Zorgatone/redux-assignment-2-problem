import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: ""
    };

    this.nameChangedHandler = this.nameChangedHandler.bind(this);
    this.ageChangedHandler = this.ageChangedHandler.bind(this);
  }

  nameChangedHandler(event) {
    this.setState({ name: event.target.value });
  }

  ageChangedHandler(event) {
    this.setState({ age: Number(event.target.value) });
  }

  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameChangedHandler}
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={this.ageChangedHandler}
          value={this.state.age}
        />
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
