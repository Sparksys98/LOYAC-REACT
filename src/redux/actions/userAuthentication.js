import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, SET_ERRORS, GET_PROFILE } from "./types";
import instance from "./instance";

export const checkForExpiredToken = () => dispatch => {
    const access = localStorage.getItem("access");

    if (access) {
        const currentTime = Date.now() / 1000;
        const user = jwt_decode(access);
        if (user.exp >= currentTime) {
            dispatch(setCurrentUser(access));
            if (user.is_staff === false)
                dispatch(getProfile())
        } else {
            dispatch(setCurrentUser());
        }
    }
};


const setCurrentUser = access => async (dispatch) => {
    let user = null
    setAuthToken(access);
    let applicant = null;
    if (access) {
        user = jwt_decode(access)
        if (user.is_staff === false) {
            const res = await instance.get("applicant/");
            applicant = res.data;
        }
    }
    dispatch({
        type: GET_PROFILE,
        payload: applicant
    })
    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    })
    return { type: SET_CURRENT_USER, payload: user };
}


const setAuthToken = access => {
    if (access) {
        localStorage.setItem("access", access);
        instance.defaults.headers.Authorization =
            `Bearer ${access}`;
    } else {
        delete instance.defaults.headers.Authorization;
        localStorage.removeItem("access");
    }
};

export const login = (userData, history) => async dispatch => {
    try {
        const res = await instance.post("login/", userData);
        const { access } = res.data;
        dispatch(setCurrentUser(access));
    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload: error.response.data,
        })
    }
};

export const signup = (userData, history) => async (dispatch) => {
    try {
        const res = await instance.post('signup/staff/', userData);
        const { access } = res.data;
        dispatch(setCurrentUser(access));
        dispatch(login(userData))
        history.push("/welcome");
    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload: error.response.data,
        })
    }
};
export const signup_applicant = (userData, history) => async (dispatch) => {
    try {
        const res = await instance.post('signup/applicant/', { user: userData });
        const { access } = res.data;
        dispatch(setCurrentUser(access));
        dispatch(login(userData))
        history.push("/welcome");
    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload: error.response.data,
        })
    }
};

export const logout = () => setCurrentUser();

export const getProfile = () => {
    const access = localStorage.getItem("access");
    let applicant = null;
    if (access) {
        return async dispatch => {
            try {
                const res = await instance.get("applicant/");
                applicant = res.data;
                dispatch({
                    type: GET_PROFILE,
                    payload: applicant,
                });

            } catch (error) {
                dispatch({
                    type: SET_ERRORS,
                    payload: error.response.data,
                });
            }
        };
    }
};