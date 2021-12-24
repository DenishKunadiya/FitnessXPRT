import React, { Fragment, useState } from "react";
import "./createBlogPopUp.styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "../../services/store";

const Blogpop = ({ userData }) => {
  const [selectFile, setSelectFile] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const token = store.getState().login.login.access_token;
  // console.log("token", token);

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogname", title);
    formData.append("description", description);
    formData.append("blogimage", selectFile);
    // console.log("Form data is here", formData);
    console.log("selected file in function", formData);
    let result = await fetch(
      "http://192.168.1.109:3000/api/blog/create-blog",

      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer" + token,
          responseType: "json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("body", result);

    console.log("formdata", formData);
    // alert("data has been send to API");
  }
  // console.log("selected file", selectFile);

  return (
    <>
      <div>
        <div class="main-card neo-light">
          <form method="POST">
            <div class="containerg">
              <div className="container mt-5">
                <label className="mt-5">Blog Title</label> &nbsp;
                <input
                  type="name"
                  className=""
                  placeholder="Set New Username"
                  name=""
                  id=""
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
                <i class="fa fa-close"></i>
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
