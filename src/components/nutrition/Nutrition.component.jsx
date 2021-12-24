import React, { Component } from "react";

import "./nutrition.styles.css";
import NutritionPage from "../nutritionpage/nutritionpage.component";
export default class Nutrition extends Component {
  state = {
    nutritionname: "",
    ingredient: [],
    procedure: [],
    nutritionImage: "",
  };
  ingredient() {
    this.setState({ ingredient: [...this.state.ingredient, ""] });
  }
  handleChange(e, index) {
    this.state.ingredient[index] = e.target.value;
    this.setState({ ingredient: this.state.ingredient });
  }
  procedure() {
    this.setState({ procedure: [...this.state.procedure, ""] });
  }
  handleChanges(e, index) {
    this.state.procedure[index] = e.target.value;
    this.setState({ procedure: this.state.procedure });
  }
  handleNutritionname(e) {
    this.state.nutritionname = e.target.value;
    this.setState({ nutritionname: this.state.nutritionname });
  }

  nutritionImage(e) {
    this.state.nutritionImage = e.target.files[0];
    this.setState({ nutritionImage: e.target.files[0] });
    console.log("nutrtion img", this.nutritionImage);
  }
  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    const formData = new FormData();
    formData.append("some name", this.state.nutritionname);
    // formData.append("some name", this.state.nutritionImage);
    // formData.append("some name", this.state.ingredient);
    // formData.append("some name", this.state.procedure);
    console.log("some name", formData);
  }
  render() {
    const steps = 0;
    return (
      <div>
        <div className="container">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Nutrition Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={this.state.nutritionname}
              onChange={(e) => this.handleNutritionname(e)}
            />
          </div>
        </div>
        <div className="container mb-5">
          <label>Upload Nutrtion Image</label>
          <br />
          <input
            type="file"
            className="mt-2"
            name="image"
            id="nutrtionfile"
            onChange={(e) =>
              this.setState({ nutritionImage: e.target.files[0] })
            }
          />
        </div>
        {this.state.ingredient.map((ingredient, index) => {
          return (
            <div className="container input-group mb-3 " key={index}>
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
                value={ingredient}
                onChange={(e) => this.handleChange(e, index)}
              />
            </div>
          );
        })}
        <div className="container d-flex justify-content-center">
          <button
            className="button-17"
            role="button"
            onClick={(e) => this.ingredient(e)}
          >
            Add Ingredient
          </button>
        </div>
        <br />
        <div className="container">
          <h1>Procedures :</h1>
        </div>
        {this.state.procedure.map((procedure, index) => {
          return (
            <div className="container input-group mb-3 " key={index}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Enter steps -{index + 1}
                </span>
              </div>
              <input
                type="text"
                id="ingredientName"
                className="form-control"
                placeholder="Enter Nutrtion Steps"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={procedure}
                onChange={(e) => this.handleChanges(e, index)}
              />
            </div>
          );
        })}

        <div className="container d-flex justify-content-center ">
          <button
            className="button-17"
            role="button"
            onClick={(e) => this.procedure(e)}
          >
            Add Procedure
          </button>
        </div>

        <br />
        <div className="container d-flex justify-content-center">
          <button
            className="button-17"
            role="button"
            onClick={(e) => this.handleSubmit(e)}
          >
            Submit
          </button>
        </div>
        <NutritionPage />
      </div>
    );
  }
}
