import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <form action="/" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="John Smith"
            />
          </div>
          <div className="form-group">
            <label htmlFor="attending">Attending (Yes, No)</label>
            <select className="form-control" id="attending">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="food">Food Selection</label>
            <select className="form-control" id="food">
              <option>Beef Wellington</option>
              <option>Loch Duart Salmon</option>
              <option>Vegan/Vegetarian Curry</option>
              <option>Chicken Salad</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
