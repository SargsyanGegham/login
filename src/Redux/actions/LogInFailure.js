import {LOGIN_FAILURE} from '../types'

export let LogInFailure = (errorMessage) => ({
    type: LOGIN_FAILURE,
    errorMessage: errorMessage
})
