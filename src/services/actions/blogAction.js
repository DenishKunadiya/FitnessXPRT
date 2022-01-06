import {
    GET_ALL_BLOG,
    GET_NEW_CREATED_BLOG,
    GET_NEW_UPDATED_BLOG,
    GET_SINGLE_BLOG,
} from "../constants";
import { AuthApiCall } from "../../helper/api";

export const fetchBlogs = (payload) => (dispatch) => {
    AuthApiCall("blog/get-all-blog", "get", payload)
        .then((blogAllData) => {
            console.log("all blog data", blogAllData);
            dispatch({
                type: GET_ALL_BLOG,
                payload: blogAllData,
            });
        })
        .catch((error) => {
            console.log("error in GET_ALL_BLOG action", error.message);
        });
};
export const updateBlogDispatch = (userBlog) => ({
    type: GET_NEW_CREATED_BLOG,
    payload: userBlog,
});
export const newUpdateBlogDispatch = (updatedBlog) => ({
    type: GET_NEW_UPDATED_BLOG,
    payload: updatedBlog,
});
// export const oldUpdateBlogDispatch = (blogs) => ({
//     type: GET_SINGLE_BLOG,
//     payload: blogs,
// });