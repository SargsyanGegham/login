import React, { useEffect } from 'react';
import { reduxForm } from 'redux-form';
import LoginForm from './LoginForm/LoginForm';

import './Login.css';

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LogIn = (props) => { 
   const {redirectProfile} = props;
    useEffect(() => {
        redirectProfile();
    }, [ redirectProfile ]);
       
    return (
        <div className = "logIn">
            <div>
              <LoginReduxForm onSubmit = {() => false} {...props} />
            </div>
        </div>
    )
};

export default LogIn;