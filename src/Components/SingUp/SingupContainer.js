import React, { useCallback } from 'react';
import {singupApi } from '../../api/api';
import { connect } from 'react-redux';
import SingUp from './SingUp';
import { SingupAC } from '../../Redux/actions';

const SingupContainer = (props) => {
    const {
        history,
        Singup,
        form,
        SingUpFetch
    } = props;
    // fetch singup in
    const handleSubmit = useCallback(() => {
        singupApi.then(data => {  
            SingUpFetch(data);
        });
    }, [ SingUpFetch ]);
    
    // if registration successful redirect in profile
    const redirectProfile = useCallback(() =>{
        if(Singup.isregistered){
            history.push('/profile'); 
        }
    }, [ history, Singup ]);
    
    return (
        <SingUp 
           handleSubmit = {handleSubmit}
           {...form} 
           isregistered = {Singup.isregistered}
           redirectProfile = {redirectProfile}
        />
    )
};

let mapStateToProps = (state) =>({
    Singup: state.Singup,
    form: state.form,
})

let mapDispatchToProps = {
    SingUpFetch: (data) =>{
        return dispatch => {
            setTimeout(() => {
                dispatch(SingupAC(data))
            },2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingupContainer)
