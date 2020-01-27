import React, { useEffect } from 'react';
import { reduxForm } from 'redux-form';
import SingupForm from './SingupForm/SingupForm';

import './Singup.css';

let LoginReduxForm = reduxForm({form: 'login'})(SingupForm);

const SingUp = (props) => {
    const { redirectProfile } = props;
    useEffect(() => {
        redirectProfile()
    }, [ redirectProfile ]);

    return (
        <div className="singUp">
          <LoginReduxForm {...props}/>
        </div>
    )
}

export default SingUp;