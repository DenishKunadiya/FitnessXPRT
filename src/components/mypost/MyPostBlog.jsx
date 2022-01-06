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
    <div className="container d-flex flex-wrap justify-content-start">
      {blog &&
        blog.map((postblog, index) => {
          return (
            <ul class="cards">
              <li className="myblog-li">
                <a href="" class="card-myblog">
                  <img
                    // src={bg2}
                    src={`http://${postblog.blogImage}`}
                    class="card__image"
                    alt=""
                  />
                  <div class="card__overlay">
                    <div class="card__header">
                      <div class="card__header-text">
                        <h3 class="card__title">{postblog.blogName}</h3>
                      </div>
                    </div>
                    <p class="card__description">{postblog.description}</p>
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
  console.log("state in blogPost component", state);
  return {
    blogs: state.allBlog.getblog?.data?.data,
    // blogid: state.allBlog.getblog.data.data._id,
    user: state.login.login.data,
  };
};

export default connect(mapStateToProps)(MyPostBlog);
