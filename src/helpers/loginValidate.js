export function loginValidate( email, Password) {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(!emailPattern.test(email)) return "Enter a valid email";
    if(!passwordPattern.test(Password)) return "Enter a valid Password";
    return null;
}