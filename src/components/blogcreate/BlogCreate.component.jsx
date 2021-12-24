import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogCreate.styles.css";

const Blogpop = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
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

export default Blogpop;
