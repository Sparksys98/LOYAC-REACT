import instance from "./instance";
import { SET_PROGRAMS } from "./types";

export const getAllPrograms = () => async (dispatch) => {
    try {
        const res = await instance.get(`programs/`);
        const programs = res.data;
        dispatch({
            type: SET_PROGRAMS,
            payload: programs,
        });
    } catch (err) {
        console.error("Error while fetching programs", err);
    }
};
