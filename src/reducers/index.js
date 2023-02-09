import { SET_FETCHING_TRUE, GET_SUCCESS, GET_FAIL} from "../actions"

const initState = {
    isFetching: false,
    err: ""
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FETCHING_TRUE:
            return {...state, isFetching: true };
        case GET_SUCCESS:
            return {...state, isFetching: false, results: action.payload };
        case GET_FAIL:
            return {...state, isFetching: false, err: action.payload };
        default:
            return state;
    }
}

