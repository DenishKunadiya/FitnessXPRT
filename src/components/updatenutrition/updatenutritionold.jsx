import React, { Component } from "react";
import { store } from "../../services/store";
// import "./nutrition.styles.css";
import {
  createNutrition,
  updateUserNutrition,
} from "../../helper/api/nutrition";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class UpdateNutrition extends Component {
  constructor({ history, props, match }) {
    super({ props, match });
    const id = history.location.pathname;
    const sup = id.slice(17);
    console.log("id", sup);
  }
  state = {
    nutritionname: "",
    ingredient: [],
    procedure: [],
    image: "",
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

  image(e) {
    this.state.image = e.target.files[0];
    this.setState({ image: e.target.files[0] });
    console.log("nutrtion img", this.image);
  }
  deleteIngredient(idx) {
    // this.state.procedure.splice(i, 1);
    this.state.ingredient.splice(idx, 1);
    this.setState({ ...this.ingredient });
  }
  deleteProcedure(index) {
    this.state.procedure.splice(index, 1);
    // this.state.ingredient.splice(i, 1);
    this.setState({ ...this.procedure });
  }
  async handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    const { nutritionname, ingredient, procedure, image } = this.state;
    var formData = new FormData();
    formData.append("nutritionname", nutritionname);
    formData.append("procedure", procedure);
    formData.append("ingredient", ingredient);
    formData.append("image", image);
    // formData.append("id", sup);
    console.log("formData : ", formData.get("image"));
    updateUserNutrition(formData);
    // updateNutrition(formData);
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Nutrition Name
              </span>
            </div>

            <input
              type="text"
              className="form-control input-text"
              placeholder="nutrition name"
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
            className="mt-2 "
            name="image"
            id="nutrtionfile"
            onChange={(e) => this.setState({ image: e.target.files[0] })}
          />
        </div>
        {this.state.ingredient.map((ingredient, index) => {
          return (
            <div className="container input-group mb-5 " key={index}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Enter Your Ingredient Name -{index + 1}
                </span>
              </div>
              <input
                type="text"
                id="ingredientName"
                className="form-control input-text"
                placeholder="Enter Ingredient Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={ingredient}
                onChange={(e) => this.handleChange(e, index)}
              />
              <button
                className="delete-btn"
                onClick={() => this.deleteIngredient(index)}
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          );
        })}
        <div className="container d-flex justify-content-center mt-5">
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
            <div className="container input-group mb-5 " key={index}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Enter steps -{index + 1}
                </span>
              </div>
              <input
                type="text"
                id="ingredientName"
                className="form-control input-text"
                placeholder="Enter Nutrtion Procedure"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={procedure}
                onChange={(e) => this.handleChanges(e, index)}
              />

              <button
                className="delete-btn"
                onClick={() => this.deleteProcedure(index)}
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          );
        })}

        <div className="container d-flex justify-content-center ">
          <button
            className="button-17 mt-5"
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state in update", state);
  return {
    nutritions: state.allNutrition.getnutrition?.data?.message,
  };
};

export default connect(mapStateToProps)(withRouter(UpdateNutrition));
<div className="container">
          {procedure.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>procedure-{index + 1}</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Ingredient"
                value={element.name || ""}
                onChange={(e) => handleChangeProcedure(index, e)}
              />
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeProcedure(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button
              className="button add"
              type="button"
              onClick={() => addProcedure()}
            >
              Add
            </button>
          </div>