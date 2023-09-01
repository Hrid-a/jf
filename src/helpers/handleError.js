
const handleError = (errCode) => {

  switch (errCode){
    case "auth/invalid-email":
      return "Invalid email, Please Enter a valid email";
    case "auth/email-already-exists":
      return "The email you Entred already exists";
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "The email or password are not correct";
    default:
      return "something happend";
    
  }
  
}

export default handleError