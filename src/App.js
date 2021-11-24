import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/blog/blog.component";
import Navigation from "./components/navigation/navigation.component";
import Nutrition from "./components/nutrition/Nutrition.component";
import Excercise from "./components/excercise/excercise.component";
import SignInandSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignUp from "./components/sign-up/sign-up.component";
function App() {
  return (
    <BrowserRouter>
      <Navigation />

      {/* <Profile /> */}
      <Routes>
        <Route exact path="/nutrition" element={<Nutrition />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/excercise" element={<Excercise />} />
        <Route exact path="/signin" element={<SignInandSignUp />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
