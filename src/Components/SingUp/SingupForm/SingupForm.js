import React from 'react';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { Input } from '../../common/FormsControls/FormsControls';
import {
    requierField,
    minLengthCreator,
    emailValidator,
    passwordConfirmValidator
} from '../../../utils/validators/validators';
import { useTranslation } from 'react-i18next';

// length validator
const minLenght = minLengthCreator(6);

let SingupForm = (props) => {
    const { t } = useTranslation();
    
    return (
        <div className="singUp__form">
            <form onSubmit = {() => false}>
                <div className="singUp__title">
                    <span>{t("SingUp.1")}</span> 
                </div>
                <Field 
                    component={Input} 
                    type="email" name="email"  
                    placeholder={t("SingUp.2")}
                    validate={[ requierField,emailValidator]}
                />
                <Field component={Input} 
                    type="password" name="password"  
                    placeholder={t("SingUp.3")} 
                    validate={[requierField, minLenght]}
                />
                <Field component={Input} 
                    type="password"
                    name="confirmpassword"  
                    placeholder={t("SingUp.4")} 
                    validate = {[passwordConfirmValidator, requierField]}
                />
                <Field component={Input} 
                    type="text" name="text"  
                    placeholder={t("SingUp.5")} 
                    validate={[requierField]}
                />
            </form>
            <button 
                onClick={() => props.handleSubmit(props)} 
                className="singUp__button"
                disabled={props.invalid}
            >
                {t("SingUp.1")}
            </button>
             <div  className="singUp__text" onClick={ props.handleSubmit } >
                <p>{t("SingUp.6")}</p>
            </div>
            <NavLink to="/login">
                <button  className = "logIn__button">
                    {t("SingUp.7")}
                </button>
            </NavLink>   
            </div>
    )
};

export default SingupForm;