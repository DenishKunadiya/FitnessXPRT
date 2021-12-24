import React, { Component } from "react";

export default class Ingredient extends Component {
  state = {
    addIngredient: [],
  };
  addIngredientBox() {
    this.setState({ addIngredient: [...this.state.addIngredient, ""] });
  }
  render() {
    return (
      <div>
        {this.state.addIngredient.map((addIngredient, index) => {
          return (
            <div className="input-group mb-3 " key={index}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Enter Your Ingredient Name -{index + 1}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Nutrition Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          );
        })}
        <div className="container d-flex justify-content-center">
          <button
            className="add-ingredient-btn"
            onClick={() => this.addIngredientBox()}
          >
            Add Ingredients
          </button>
        </div>
      </div>
    );
  }
}
