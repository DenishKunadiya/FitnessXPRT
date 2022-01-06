import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link, useParams, useHistory } from "react-router-dom";
import { AuthApiCall } from "../../helper/api";
import { deleteUserBlog, updateUserBlog } from "../../helper/api/blog";
import { store } from "../../services/store";

import "../edit-profile/editprofile.styles.css";
const EditBlog = ({ history, match, blogDetails }) => {
  const [Detail, setDetail] = useState(blogDetails);
  const [selectFile, setSelectFile] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  console.log("blog-details", (blogDetails = {}));
  const id = match.params.id;
  // let history = useHistory();
  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogname", title);
    formData.append("description", description);
    formData.append("image", selectFile);
    formData.append("id", id);

    updateUserBlog(formData)
      .then(() => {
        history.push("/blog");
      })
      .catch((error) => {
        console.log("error in editblog", error);
      });
  }
  return (
    <div>
      <div className="main-card neo-light">
        <form method="POST">
          <div className="containerg">
            <div className="container mt-5">
              <div className="container text-center">
                <h1>&lt;----------Update Blog----------&gt;</h1>
              </div>

              <div className="container">
                <input
                  type="name"
                  className="d-none"
                  placeholder="Title"
                  name=""
                  value={id}
                  // onChange={(e) => setIds(id)}
                />
                {}
                <label className="mt-5">New Blogname :</label> &nbsp;
                <input
                  type="name"
                  className=""
                  placeholder="Title"
                  name=""
                  id=""
                  Value={blogDetails.blogName}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label className="">description :</label> &nbsp;
                <input
                  type="name"
                  className=""
                  placeholder="Title"
                  name=""
                  id=""
                  Value={blogDetails.description}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {/* <textarea
                  name="description"
                  type="description"
                  className="blogtxtarea "
                  id=""
                  cols="3"
                  rows="3"
                  Values={blogDetails.blogName}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea> */}
                <label className="">Update image :</label> &nbsp;
                <input
                  type="file"
                  className="file"
                  name="blogimg"
                  id=""
                  // value={blogDetails.blogImage}
                  onChange={(e) => setSelectFile(e.target.files[0])}
                />
              </div>
            </div>
            <div className="container d-flex justify-content-center">
              <input
                type="submit"
                value="submit"
                className="sbmt-btn-profile"
                onClick={submitForm}
              />
            </div>
            <Link to="/blog" className="profile-close-btn">
              <i className="fa fa-close"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state in editblog", state);
  return {
    blogDetails: state.singleBlog?.getblog?.data?.message,
  };
};
export default connect(mapStateToProps)(withRouter(EditBlog));
