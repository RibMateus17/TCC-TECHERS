const passwordLenght = 3;

const validationInputs = (email, username, password) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const validationEmail = emailRegex.test(email);
  const validUsername = username.length > 0;
  const validationGeneral = (
    validationEmail && password.length >= passwordLenght && validUsername
  );
  
  return validationGeneral;
};

export default validationInputs;