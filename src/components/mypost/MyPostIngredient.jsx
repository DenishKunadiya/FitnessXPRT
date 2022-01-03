import React, { Component } from "react";
import bg from "../../assets/bg.jpg";
import "./mypost.css";
const MyPostIngredient = () => {
  return (
    <div className="container d-flex flex-wrap">
      <div className="card">
        <img className="card-img-top" src={bg} alt="Card image cap" />
        <h5 className="card-title">Card title</h5>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={bg} alt="Card image cap" />
        <h5 className="card-title">Card title</h5>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MyPostIngredient;
