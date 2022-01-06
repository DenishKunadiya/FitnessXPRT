import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import bg from "../../assets/bg.jpg";
import bg2 from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";
import { fetchNutritionss } from "../../services/actions/getAllNutritionAction";
import "./mypost.css";
const MyPostNutrition = ({ nutritions = [], fetchnut }) => {
  const [nutrition, setNutrition] = useState(nutritions);
  useEffect(() => {
    if (!nutritions.length) {
      fetchnut();
    }
    setNutrition(nutritions);
  }, [nutritions]);
  return (
    <div className="container d-flex flex-wrap justify-content-start">
      {nutrition &&
        nutrition.map((nut, index) => {
          return (
            <ul class="cards">
              <li className="myblog-li">
                <a href="" class="card-myblog">
                  <img
                    src={`http://${nut.nutritionImage}`}
                    class="card__image"
                    alt=""
                  />
                  <div class="card__overlay">
                    <div class="card__header">
                      <div class="card__header-text">
                        <h3 class="card__title">{nut.nutritionname}</h3>
                      </div>
                    </div>
                    <h3>Procedure</h3>
                    <p class="card__description">{nut.procedure}</p>
                    <h3>Ingredient</h3>
                    <p class="card__description">{nut.ingredient}</p>
                    {/* <p class="card__description">{nut.description}</p> */}
                  </div>
                </a>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state in mynut ", state);
  return {
    nutritions: state.allNutrition.getnutrition?.data?.message,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    fetchnut: () => dispatch(fetchNutritionss()),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(MyPostNutrition);
