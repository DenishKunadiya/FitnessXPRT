import React, { Component } from "react";
import "./nutritionpage.styles.css";
export default class NutritionPage extends Component {
  render() {
    return (
      <div>
        <div className="wrapper" id="app">
          <div className="card-form">
            <div className="card-list-nutrition">
              <div className="card-item -front">
                <div className="card-item__side">
                  <div className="card-item__cover">
                    <img
                      src="https://images.pexels.com/photos/6529940/pexels-photo-6529940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="card-item__bg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-form__inner">
              <div className="card-title">Bread and strawberries</div>
              <div className="card-description">
                <p>
                  step 1: Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Distinctio, repellat eligendi, voluptate sequi, ullam ut
                  nostrum omnis soluta maxime praesentium ipsam suscipit alias
                  quos. Earum alias sunt dolore! Et quas provident tenetur quia
                  alias, molestias voluptas odio sequi modi ad totam labore
                  dolor esse, officia, eveniet fugit dignissimos ipsum minima.
                </p>
              </div>
              <div className="card-description">
                <h1>Ingredients</h1>
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name, name,name,
                name,name, name,name, name,name, name,name,
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
