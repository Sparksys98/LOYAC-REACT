import instance from "./instance";
import { SET_ERRORS } from "./types"

export const createProgram = (programData, history) => async (dispatch) => {
    try {
        const formData = new FormData();
        for (const key in programData) formData.append(key, programData[key]);
        await instance.post('program/create/', formData);
        history.push("/welcome");

    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload: error.response.data,
        })
    }
};