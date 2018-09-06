import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attending: "",
      food: ""
    };

    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.onSubmit.bind(this);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, attending, food } = this.state;

    axios
      .post("/", { name, attending, food })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { name, attending, food } = this.state;
    return (
      <div className="container">
        <Header />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              id="name"
              placeholder="John Smith"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="attending">Attending (Yes, No)</label>
            <select
              className="form-control"
              id="attending"
              value={attending}
              onChange={this.onChange}
            >
              <option> </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="food">Food Selection</label>
            <select
              className="form-control"
              id="food"
              value={food}
              onChange={this.onChange}
            >
              <option value=" " />
              <option value="Beef Wellington">Beef Wellington</option>
              <option value="Loch Duart Salmon">Loch Duart Salmon</option>
              <option value="Vegan/Vegetarian Curry">
                Vegan/Vegetarian Curry
              </option>
              <option value="Chicken Salad">Chicken Salad</option>
            </select>
          </div>
          <button type="submit" className="btn mb-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
