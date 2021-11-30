import React, { Component } from "react";
import blogpost from "../../assets/blogpost.jpg";
import blogpost2 from "../../assets/blogpost2.jpg";
import "./blogpost.styles.css";
export default class BlogPost extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6">
              <div className="card mb-3">
                <img src={blogpost} alt="Profile" />
                <div className="container blog-post-footer">
                  <div className="row">
                    <div className="col-md-2">dsd</div>
                    <div className="col-md-2">sdf</div>
                    <div className="col-md-8 text-end">fsdfd</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
              <div className="card mb-3">
                <img src={blogpost2} alt="Profile" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
