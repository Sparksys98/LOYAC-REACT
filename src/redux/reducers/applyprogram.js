import { APPLY_PROGRAM } from "../actions/types";
const initialState = [];
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case APPLY_PROGRAM:
            return { ...state, programs: [state.programs, payload] }
        default:
            return state;
    }
};