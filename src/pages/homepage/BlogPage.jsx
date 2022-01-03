import React from "react";
import BlogPostComponent from "../../components/blog-post/BlogPost.component";
import BlogPopUp from "../../components/blogcreate/BlogCreate.component";
import Navbar from "../../components/header/Navbar.component";

function BlogPage() {
  return (
    <div>
      <Navbar />
      <BlogPopUp />
      <BlogPostComponent />
    </div>
  );
}

export default BlogPage;
