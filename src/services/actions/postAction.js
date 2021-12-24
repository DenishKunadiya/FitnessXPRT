import { FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from "../constants";
const initialState = {
    loading: false,
    users: [],
    error: "",
};

const fetchPost = () => {
    return {
        type: FETCH_POST,
    };
};
const fetchPostSuccess = (posts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts,
    };
};
const fetchPostError = (error) => {
    return {
        type: FETCH_POST_ERROR,
        payload: error,
    };
};