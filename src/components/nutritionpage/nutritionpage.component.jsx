import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  deleteUserNutrition,
  getSingleNutrition,
  SingleUserNutrition,
} from "../../helper/api/nutrition";
// import bg2 from '../../assets/bg2.jpg'
import {
  fetchNutrition,
  fetchNutritionss,
} from "../../services/actions/getAllNutritionAction";
import "./nutritionpage.styles.css";
const NutritionCard = ({ nutritions = [], fetchnut, props }) => {
  const [nutrition, setNutrition] = useState(nutritions);
  useEffect(() => {
    if (!nutritions.length) {
      fetchnut();
    }
    setNutrition(nutritions);
  }, [nutritions]);

  const getSinglenut = (id) => {
    alert(id);
    getSingleNutrition(id);
    // SingleUserNutrition(id);
  };
  const deleteNutrition = (id) => {
    deleteUserNutrition(id);
  };

  return (
    <div>
      {nutrition &&
        nutrition.map((nut, index) => {
          return (
            <div className="wrapper" id="app">
              <div className="card-form ">
                <div className="card-list-nutrition">
                  <div className="card-item -front">
                    <div className="card-item__side">
                      <div className="card-item__cover">
                        <img
                          src={`http://${nut.nutritionImage}`}
                          className="card-item__bg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-form__inner">
                  <i
                    className="bi bi-trash trash-nutrition"
                    onClick={() => deleteNutrition(nut._id)}
                  ></i>
                  <Link to={"/updatenutrition/" + nut._id}>
                    <i
                      className="fa fa-credit-card credit-card-nutrition"
                      onClick={() => getSinglenut(nut._id)}
                    ></i>
                  </Link>
                  <i className="fa fa-bookmark-o save-nutrition"></i>
                  <div className="card-title">{nut.nutritionname}</div>
                  <div className="card-description">
                    <p>{nut.procedure}</p>
                  </div>
                  <div className="card-description">
                    <h1>Ingredients</h1>
                    {nut.ingredient},
                    <br />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   console.log("state in Nutrition page component", state);
//   return {
//     posts: state,
//   };
// };
const mapStateToProps = (state) => {
  // console.log("state in nut component", state);
  return {
    nutritions: state.allNutrition.getnutrition?.data?.message,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    fetchnut: () => dispatch(fetchNutritionss()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProp
)(withRouter(NutritionCard));
