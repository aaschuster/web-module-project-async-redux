import axios from "axios";

export const GET_RESULTS = "GET_RESULTS";
export const SET_FETCHING_TRUE = "SET_FETCHING_TRUE";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL = "GET_FAIL";

export const getResults = val => dispatch => {
    dispatch(setFetchingTrue());
    
    axios.request(`https://api.funtranslations.com/translate/yoda.json?text=${val}`).then(res => {
        dispatch(getSuccess(res.data.contents.translated));
    }, err => {
        dispatch(getFail(err.message));
    })
    return ({ type: GET_RESULTS });
}

export const setFetchingTrue = () => {
    return ({ type: SET_FETCHING_TRUE });
}

export const getSuccess = results => {
    return ({ type: GET_SUCCESS, payload: results});
}

export const getFail = err => {
    return ({ type: GET_FAIL, payload: err});
}