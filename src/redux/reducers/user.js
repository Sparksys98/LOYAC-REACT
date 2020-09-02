import { SET_CURRENT_USER, GET_PROFILE } from "../actions/types";

const initialState = {
    user: null,
    applicant: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: payload,
            };
        case GET_PROFILE:
            return {
                ...state,
                applicant: payload,
            };
        default:
            return state;
    }
};

export default reducer;
