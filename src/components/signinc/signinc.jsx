import React, { Component } from "react";

import "./nutrition.styles.css";
import NutritionPage from "../nutritionpage/nutritionpage.component";
export default class Nutrition extends Component {
  // state = {
  //   addText: [],
  //   addIngredient: [],
  //   nutritionName: "",
  //   ingredientName: "",
  //   procedureStep: "",
  // };
  // addTextBox() {
  //   this.setState({ addText: [...this.state.addText, ""] });
  // }
  // addIngredientBox() {
  //   this.setState({ addIngredient: [...this.state.addIngredient, ""] });
  // }
  // submit(e) {
  //   e.preventDefault();
  // }
  // handleChange(e) {
  //   const nutritionData = {
  //     ...this.state.nutritionName,
  //     ...this.state.ingredientName,
  //     ...this.state.procedureStep,
  //   };
  //   nutritionData[e.target.id] = e.target.value;
  //   this.setState(nutritionData);
  //   console.log("spread state", this.state);
  // }
  state = {
    addIngredient: [],
  };
  addCountry() {
    this.setState({ addIngredient: [...this.state.addIngredient, ""] });
  }
  handleChange(e, index) {
    this.state.addIngredient[index] = e.target.value;
    this.setState({ addIngredient: this.state.addIngredient });
  }
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    const steps = 0;
    return (
      <div>
        {this.state.addIngredient.map((country, index) => {
          return (
            <div className="input-group mb-3 " key={index}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Enter Your Ingredient Name -{index + 1}
                </span>
              </div>
              <input
                type="text"
                id="ingredientName"
                className="form-control"
                placeholder="Nutrition Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={country}
                onChange={(e) => this.handleChange(e, index)}
              />
            </div>
          );
        })}
        <button onClick={(e) => this.addCountry(e)}>add input</button>
        <button onClick={(e) => this.handleSubmit(e)}>btn</button>
        {/* <form onSubmit={this.submit}>
          <div className="container mt-3">
            <div className="input-group mb-3 ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Enter Your Nutrition Name
                </span>
              </div>
              <input
                type="text"
                id="nutritionName"
                className="form-control"
                placeholder="Nutrition Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name={this.state.nutritionName}
                onChange={(e) => this.handleChange(e)}
              />
            </div>

            {this.state.addIngredient.map((addIngredient, index) => {
              return (
                
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

            <h3>Procedure :</h3>
            {this.state.addText.map((addText, index) => {
              return (
                <div className="container" key={index}>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      Step : {index + 1}
                    </label>
                    <textarea
                      id="procedureName"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                      cols="2"
                      value={this.state.precedureStep}
                      onChange={(e) => this.handleChange(e)}
                    ></textarea>
                  </div>
                </div>
              );
            })}

            <div className="container d-flex justify-content-center flex-column nutrition-btn-container">
              <button
                className="bg-warning mb-3 btn-grad"
                onClick={() => this.addTextBox()}
              >
                Add Step
              </button>
              <button className="bg-success btn-grad" onClick={(e) => this.handleSubmit(e)}>Submit</button>
            </div>
          </div>
        </form> */}
        <NutritionPage />
      </div>
    );
  }
}
