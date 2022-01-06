import { GET_SINGLE_BLOG } from "../constants";

const initialState = {
    getSingleBlog: [],
};
export const singleBlog = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_BLOG:
            return {
                ...state,
                getblog: action.payload,
            };

        default:
            return state;
    }
};