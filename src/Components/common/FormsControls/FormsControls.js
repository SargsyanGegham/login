import React from 'react';
import './FormControl.css';

export const Input = ({input, meta, ...props}) => {
    const hasError =  meta.touched && meta.error
    return (
       <div className = {hasError? "form-control error" : undefined} >
            <div>
                <input  {...input} {...props} />
            </div>
            {hasError && <span className = "error">{meta.error}</span>}
        </div>
    )
};

