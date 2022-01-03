import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../header/Navbar.component";
import "./BlogCreate.styles.css";

const BlogPopUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* <Navbar /> */}
      <div className="container ">
        <Link to="/createblog">
          <button className="btn profile-edit-btn blog-btn">
            Create new blog
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogPopUp;
