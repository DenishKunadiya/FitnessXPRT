import React, { useEffect, useState } from "react";
import bg from "../../assets/bg.jpg";
import bg2 from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MyPostNutrition from "./MyPostNutrition";
import { fetchNutritionss } from "../../services/actions/getAllNutritionAction";
import "./mypost.css";
const MyPostBlog = ({ blogs = [] }) => {
  const [blog, setBlog] = useState(blogs);
  // useEffect(() => {
  //   if (!nutritions.length) {
  //     fetchnut();
  //   }
  //   setNutrition(nutritions);
  // }, [nutritions]);
  return (
    <div className="container d-flex flex-wrap justify-content-start border ">
      {/* {blog &&
        blog.map((postblog, index) => {
          return (
            <div className="wrapper-blog" id="app">
              <div className="card-form card-form-my-blog ">
                <div className="card-list-nutrition">
                  <div className="card-item -front">
                    <div className="card-item__side">
                      <div className="card-item__cover">
                        <img
                          src={postblog.blogimage}
                          className="card-item__bg"
                        />
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
                  <div className="card-title">{postblog.blogname}</div>
                  <div className="card-description">
                    <p>{postblog.description}</p>
                  </div>
                  {/* <div className="card-description">
                    <h1>Ingredients</h1>
                    {postblog.ingredient}
                    <br />
                  </div> */}
      {/* </div> */}
      {/* // </div> */}
      {/* // </div> */}
      {/* // ); */}
      {/* })}  */}
      <ul class="cards">
        <li>
          <a href="" class="card-myblog">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Jessica Parker</h3>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state in blogPost component", state);
  return {
    blogs: state.allBlog.getblog?.data?.data,
    // blogid: state.allBlog.getblog.data.data._id,
    user: state.login.login.data,
  };
};

export default connect(mapStateToProps)(MyPostBlog);
