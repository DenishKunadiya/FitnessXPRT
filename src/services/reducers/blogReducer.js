import {
    GET_ALL_BLOG,
    GET_NEW_CREATED_BLOG,
    GET_NEW_UPDATED_BLOG,
    GET_SINGLE_BLOG,
} from "../constants";

const initialState = {
    getblog: [],
};
export const allBlog = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOG:
            return {
                ...state,
                getblog: action.payload,
            };

        case GET_NEW_CREATED_BLOG:
            return {
                ...state,
                getblog: {
                    ...state,
                    getblog: action.payload,
                },
            };
        case GET_NEW_UPDATED_BLOG:
            return {
                ...state,
                getblog: {
                    ...state,
                    getblog: action.payload,
                },
            };
            // case GET_SINGLE_BLOG:
            //     return {
            //         ...state,
            //         getblog: {
            //             ...state,
            //             getblog: action.payload,
            //         },
            //     };

        default:
            return state;
    }
};