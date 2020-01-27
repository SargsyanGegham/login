import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form';
import { Login_Reducer, Singup_Reducer } from './reducers';
import{ composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let Login = Login_Reducer;
let Singup = Singup_Reducer;
const  reducers = combineReducers({
    Login: Login,
    Singup: Singup,
    form: formReducer
});

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

