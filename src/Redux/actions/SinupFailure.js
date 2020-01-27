import {SINGUP_FAILURE} from '../types';

export let SinupFailure = (errorMessage) => ({
    type: SINGUP_FAILURE,
    errorMessage: errorMessage
});
