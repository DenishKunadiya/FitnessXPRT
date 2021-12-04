import React, { Component } from "react";
import "./profile-nav.styles.css";
export default class ProfileNav extends Component {
  render() {
    return (
      <div>
        <div className="container profile-nav">
          <div className="row">
            <div className="col-4 text-center">
              <button type="button" class="btn btn-primary">
                Nutrition
              </button>
            </div>
            <div className="col-4 text-center ">
              <button type="button" class="btn btn-primary">
                Blog
              </button>
            </div>
            <div className="col-4 text-center">
              <button type="button" class="btn btn-primary">
                Excercise
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
