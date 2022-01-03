import { AuthApiCall, ApiCall } from "..";
import { updateBlogDispatch } from "../../../services/actions/blogAction";
import store from "../../../services/store";

export const createBlog = (body) => {
    return new Promise((resolve, reject) => {
        AuthApiCall("blog/create-blog", "post", body).then((updateUsersBlog) => {
            store.dispatch(updateBlogDispatch(updateUsersBlog.data.data));
        });
    });
    //  Return Promise
    //  Call API
    //  Dispatch Action
    //  Send Resolve Promise
    //  Put the Catch, If any issue then send Reject Promise
};

// export const getBlogAllUser = (body) => {
//     return new Promise((resolve, reject) => {
//         AuthApiCall("blog/get-all-blog", "post", body);
//     });
// };
// export const getBlogAll = (body) => {
//     return new Promise((resolve, reject) => {
//         AuthApiCall("blog/get-blog", "post", body);
//     });
// };

export const getBlogAllUser = (body) => {
    return new Promise((resolve, reject) => {
        AuthApiCall("blog/get-all-blog", "post", body)
            .then((updateUsersBlog) => {
                console.log("updateUsersBlog", updateUsersBlog.data.message);
                //  Dispatch Action to update the user
                store.dispatch(updateBlogDispatch(updateUsersBlog.data.message));
                resolve();
            })
            .catch(reject);
    });
};
export const updateUserBlog = (body) => {
    return new Promise((resolve, reject) => {
        AuthApiCall("blog/update-blog", "post", body)
            .then((updateUsersBlog) => {
                console.log("updateUsersBlog", updateUsersBlog.data.message);
                //  Dispatch Action to update the user
                // store.dispatch(updateBlogDispatch(updateUsersBlog.data.message));
                resolve();
            })
            .catch(reject);
    });
};