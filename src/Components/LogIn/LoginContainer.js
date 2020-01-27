import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { LogInAC } from '../../Redux/actions';
import LogIn from './LogIn';
import { loginApi } from '../../api/api';

const LoginContainer = (props) => {
    const { history, LogInFetch, Login, form} = props;
    // fetch log in
    const handleSubmit = useCallback(data =>{
        loginApi.then(data => {      
            LogInFetch(data);
        });
    }, [ LogInFetch ]);

    // if authorization is successful redirect in profile 
    const redirectProfile = useCallback(() =>{
        if(!Login.isauthenticated) return;
            history.push('/profile'); 
    }, [ history, Login ]);
    
    return (
        <LogIn 
            handleSubmit = {handleSubmit}
            {...form} 
            isauthenticated = {Login.isauthenticated}
            redirectProfile = {redirectProfile}
        />
    )
};

let mapStateToProps = (state) =>({
    Login: state.Login,
    form: state.form,
})

let mapDispatchToProps = {
    LogInFetch: (data) =>{
        return dispatch => {
            setTimeout(() => {
                dispatch(LogInAC(data))
            },2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
