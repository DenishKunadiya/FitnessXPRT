import React, { Fragment, useState } from "react";
import "./createBlogPopUp.styles.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "../../services/store";
import { createBlog } from "../../helper/api/blog/index";
const Blogpop = () => {
  const [selectFile, setSelectFile] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const token = store.getState().login.login.access_token;

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogname", title);
    formData.append("description", description);
    formData.append("image", selectFile);
    console.log("selected file in function", description);
    createBlog(formData).then(() => {
      history.push("/blog");
    });
    console.log("formdata", formData);
  }
  return (
    <>
      <div>
        <div className="main-card neo-light">
          <form method="POST">
            <div className="containerg">
              <div className="container mt-5">
                <label className="mt-5">Blog Title</label> &nbsp;
                <input
                  type="name"
                  className=""
                  placeholder="Title"
                  name=""
                  id=""
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label className="">Choose Image</label> &nbsp;
                <input
                  type="file"
                  className="file"
                  name="blogimg"
                  id=""
                  onChange={(e) => setSelectFile(e.target.files[0])}
                />
                <label className="">Enter Description</label> &nbsp;
                <textarea
                  name="description"
                  className="blogtxtarea"
                  id=""
                  cols="3"
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
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
    </>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userData: state.login.login.access_token,
  };
};
export default connect(mapStateToProps)(Blogpop);
