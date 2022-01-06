import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/sign-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";
import Nutrition from "./components/Nutrition/nutrition.component";
import Navbar from "./components/header/Navbar.component";
import Blog from "./components/blog/blog.component";
import Profile from "./components/profile/Profile";
import Exercise from "./components/Excercise/Exercise.component";
import EditProfile from "./components/edit-profile/Editprofile.component";
import NutritionProcedure from "./components/createBlogPopUp/createBlogPopUp.component";
// import Route from "./components/Route";
import NutritionPage from "./pages/nutritionPage";
import BlogPage from "./pages/homepage/BlogPage";
import ExercisePage from "./pages/homepage/ExercisePage";
import ProfilePage from "./pages/homepage/ProfilePage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import EditBlog from "./components/editblog/EditBlog";
import UpdateNutrition from "./components/updatenutrition/UpdateNutrition";
import MyPostBlog from "./components/mypost/MyPostBlog";

function App() {
  return (
    <BrowserRouter>
      <div className="containerbody">
        <Switch>
          <Route exact path="/signup" component={SignUp} />{" "}
          <Route exact path="/signin" component={SignIn} />{" "}
          <ProtectedRoutes exact path="/nutrition" component={NutritionPage} />{" "}
          <ProtectedRoutes exact path="/blog" component={BlogPage} />{" "}
          <ProtectedRoutes exact path="/Exercise" component={ExercisePage} />{" "}
          <ProtectedRoutes exact path="/profile" component={ProfilePage} />{" "}
          <ProtectedRoutes exact path="/editProfile" component={EditProfile} />{" "}
          <Route exact path="/blog/EditBlog/:id" component={EditBlog} />{" "}
          <ProtectedRoutes
            exact
            path="/updatenutrition/:id"
            component={UpdateNutrition}
          />{" "}
          <ProtectedRoutes exact path="/myblog" component={MyPostBlog} />{" "}
          <ProtectedRoutes
            exact
            path="/createblog"
            component={NutritionProcedure}
          />{" "}
          <Redirect to="/signup" />
        </Switch>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
