import React from 'react';
import { requierField, minLengthCreator, emailValidator } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form'; 
import { NavLink } from 'react-router-dom';

const minLength  = minLengthCreator(6);

let LoginForm = (props) =>{
    const { t } = useTranslation();
    
    return (
        <div>
            <form  
                onSubmit = {() => false}
                className="logIn__form"
            >
                <div className="logIn__title">
                  <span>{t("LogIn.1")}</span> 
                </div>
                <Field 
                    component={Input} 
                    type="email"
                    name="email" 
                    placeholder={t("LogIn.2")}
                    validate={[emailValidator, requierField]}
                />
                <Field   
                    component={Input}
                    type="password" 
                    name="password" 
                    text="a"
                    placeholder={t("LogIn.3")} 
                    validate={[ requierField, minLength ]}
                />
            </form>
            <button 
                onClick={() => props.handleSubmit(props.login.values)} 
                className = "logIn__button"
                disabled={props.invalid} >
                {t("LogIn.1")}
            </button>
            <div className = "logIn__text">
                <p>{t("LogIn.4")}</p>
            </div>
            <NavLink to = "/singup">
                <button  className = "singUp__button" >
                    {t("LogIn.5")}
                </button>
            </NavLink>
        </div>
    )
}

export default LoginForm;