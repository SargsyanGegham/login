import {SINGUP, SINGUP_FAILURE} from '../types';

let initialstate = {
    data: [],
    loading: false,
    isregistered: false,
    isError: false,
    errorMessage: ""

}

export let Singup_Reducer = (state = initialstate, action) => {
    switch(action.type) {
        case SINGUP: 
        return { ...state,
            loading: true,
            isregistered: action.isregistered,
            isError: false,
        }

        case SINGUP_FAILURE:
            return {...state,
                isError: true,
                errorMessage: action.errorMessage
            }
        default: return state;
    }

};
