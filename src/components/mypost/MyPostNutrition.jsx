import React, { useState } from "react";
import { connect } from "react-redux";
import bg from "../../assets/bg.jpg";
import bg2 from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";
import { fetchNutritionss } from "../../services/actions/getAllNutritionAction";
import "./mypost.css";
const MyPostNutrition = ({ nutritions = [] }) => {
  const [nutrition, setNutrition] = useState(nutritions);
  // useEffect(() => {
  //   if (!nutritions.length) {
  //     fetchnut();
  //   }
  //   setNutrition(nutritions);
  // }, [nutritions]);
  return (
    <div className="container d-flex flex-wrap justify-content-start border ">
      {nutrition &&
        nutrition.map((nut, index) => {
          return (
            <div className="wrapper-blog" id="app">
              <div className="card-form card-form-my-blog ">
                <div className="card-list-nutrition">
                  <div className="card-item -front">
                    <div className="card-item__side">
                      <div className="card-item__cover">
                        <img src="" className="card-item__bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-form__inner">
                  <i className="bi bi-trash trash-nutrition"></i>
                  <Link to="/updatenutrition">
                    <i className="fa fa-credit-card credit-card-nutrition"></i>
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

const mapStateToProps = (state) => {
  console.log("state in mynut ", state);
  return {
    nutritions: state.allNutrition.getnutrition?.data?.message,
  };
};
// const mapDispatchToProp = (dispatch) => {
//   return {
//     fetchnut: () => dispatch(fetchNutritionss()),
//   };
// };
export default connect(mapStateToProps)(MyPostNutrition);
