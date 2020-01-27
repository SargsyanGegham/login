// required value validator
export const requierField = value => {
    if (value) return undefined;

    return "Field is required";
}


let confirmPassword = "";

// length validator
export const minLengthCreator = (minLength) => (value) => { 
    confirmPassword = value;
    if (value && value.length < minLength) return `Min length is ${minLength} symbols`;

    return undefined;
}
// rmail validator
export const emailValidator = (value) =>{
  if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return  'Invalid email address';
  return  undefined
}

// password validator
export const passwordConfirmValidator  = (value) =>{
    if(value !== confirmPassword) return  "The passwords don't match";
     
    return  undefined
  }