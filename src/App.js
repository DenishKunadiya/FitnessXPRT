import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/sign-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";
import Nutrition from "./components/Nutrition/nutrition.component";
import Navbar from "./components/header/Navbar.component";
import Blog from "./components/blog/blog.component";
import Profile from "./components/profile/Profile";
import Excercise from "./components/Excercise/Excercise.component";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/nutrition" element={<Nutrition />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/Excercise" element={<Excercise />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
