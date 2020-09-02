import { SET_PROGRAMS } from "../actions/types";

export default (programs = [], { type, payload }) => {
    switch (type) {
        case SET_PROGRAMS:
            return payload;
        default:
            return programs;
    }
};