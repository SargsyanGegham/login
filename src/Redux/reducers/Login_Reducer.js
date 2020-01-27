import {LOGIN, LOGIN_FAILURE} from '../types';

let initialstate = {
    data: [],
    loading: false,
    isauthenticated: false,
    isError: false,
    errorMessage: ""
};

export let Login_Reducer = (state = initialstate, action) => {
    switch(action.type) {
        case LOGIN: 
        return { ...state,
            data: action.data,
            loading: true,
            isauthenticated: action.isauthenticated,
            isError: false,
        }

        case LOGIN_FAILURE:
            return {...state,
                isError: true,
                errorMessage: action.errorMessage
            }
        default: return state;
    }

}
