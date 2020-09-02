import { combineReducers } from "redux";

// Reducers
import user from "./user";
import errors from "./errors";
import programsReducer from "./programs"
import applyprogramReducer from "./applyprogram"
export default combineReducers({
    user,
    errors,
    programs: programsReducer,
    program: applyprogramReducer
});