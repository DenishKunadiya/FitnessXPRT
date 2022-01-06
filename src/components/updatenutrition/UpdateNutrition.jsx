import React, { useState } from "react";
import { store } from "../../services/store";
// import "./nutrition.styles.css";
import "./updatenutrition.css";
import {
  createNutrition,
  updateUserNutrition,
} from "../../helper/api/nutrition";
import { Link, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const UpdateNutrition = ({ history, singleNut }) => {
  console.log("update nutrition match", singleNut);
  const [ingredient, setIngredient] = useState([]);
  const [procedure, setProcedure] = useState([]);
  const [nutrition, setNutrition] = useState("");
  const [image, setimage] = useState("");
  const id = singleNut._id;
  console.log(id);
  let handleChange = (i, e) => {
    let newFormValues = [...ingredient];
    newFormValues[i][e.target.name] = e.target.value;
    setIngredient(newFormValues);
  };
  let handleChangeProcedure = (i, e) => {
    let FormValues = [...procedure];
    FormValues[i][e.target.name] = e.target.value;
    setProcedure(FormValues);
  };
  let addFormFields = () => {
    setIngredient([...ingredient, {}]);
  };
  let addProcedure = () => {
    setProcedure([...procedure, {}]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...ingredient];
    newFormValues.splice(i, 1);
    setIngredient(newFormValues);
  };
  let removeProcedure = (i) => {
    let FormValues = [...procedure];
    FormValues.splice(i, 1);
    setProcedure(FormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(ingredient));
  };

  async function submitForm(e) {
    // console.log(this.state);
    e.preventDefault();
    // const { nutritionname, ingredient, procedure, image } = this.state;
    var formData = new FormData();
    formData.append("nutritionname", nutrition);
    formData.append("procedure", procedure);
    formData.append("ingredient", ingredient);
    formData.append("image", image);
    formData.append("id", id);
    // console.log("formData : ", formData.get("image"));
    updateUserNutrition(formData);
    // updateNutrition(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
              defaultValue={singleNut.nutritionname}
              onChange={(e) => setNutrition(e.target.value)}
            />
            {/* <input
              type="text"
              className="form-control input-text d-none"
              placeholder="nutrition name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              // value={this.state.nutritionname}
              value={singleNut._id}
            /> */}
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
            // value={singleNut.nutritionImage}
            onChange={(e) => setimage(e.target.files[0])}
          />
        </div>
        <div className="container">
          {ingredient.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Ingredient-{index + 1}</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Ingredient"
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
              />
              {index ? (
                <button
                  type="button"
                  className="button-17 mt-5 bg-danger"
                  onClick={() => removeFormFields(index)}
                >
                  Remove Ingredient
                </button>
              ) : null}
            </div>
          ))}
          <div className="container d-flex justify-content-center">
            <button
              className="button-17 mt-5"
              type="button"
              onClick={() => addFormFields()}
            >
              Add Ingredient
            </button>
          </div>
        </div>

        <div className="container">
          {procedure.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>procedure-{index + 1}</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Procedure"
                value={element.name || ""}
                onChange={(e) => handleChangeProcedure(index, e)}
              />
              {index ? (
                <button
                  type="button"
                  className="button-17 mt-5"
                  onClick={() => removeProcedure(index)}
                >
                  Remove Procedure
                </button>
              ) : null}
            </div>
          ))}
          <div className="container d-flex justify-content-center">
            <button
              className="button-17 mt-5"
              type="button"
              onClick={() => addProcedure()}
            >
              Add Procedure
            </button>
          </div>
        </div>
        <div className="container d-flex justify-content-center mt-5 ">
          <button
            className="button-17 bg-success"
            role="button"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
        {/* <input type="submit" value=""  /> */}
      </form>
      <Link to="/nutrition">
        <div className="container d-flex justify-content-center ">
          <button className="button-17 mt-5" role="button">
            Back to nutrition
          </button>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state in updatenutrition", state);
  return {
    singleNut: state.singleNutrition.getSingleNutrition.data.message,
  };
};
export default connect(mapStateToProps)(UpdateNutrition);
