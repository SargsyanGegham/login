import { LOGIN } from '../types';

export let LogInAC = (ob) => ({
    type: LOGIN,
    data: ob.data,
    isauthenticated: ob.isauthenticated
});
