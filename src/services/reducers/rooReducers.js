import { combineReducers } from "redux";
// import blogFormInput from "./reducer";
import { loginUser } from "../reducers/loginReducer";
export default combineReducers({
    login: loginUser,
});