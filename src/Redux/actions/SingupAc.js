import { SINGUP } from '../types';

export let SingupAC = (ob) => ({
    type: SINGUP,
    isregistered: ob.isregistered 
});
