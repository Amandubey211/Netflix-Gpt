const CheckValidateData = (email, password, userName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isUserNamevalid = /^[A-Za-z][A-Za-z0-9_]{4,25}$/.test(userName);

  if (!isEmailValid) return "Email Is Not Valid";
  if (!isPasswordValid)
    return "Your password must contain between 4 and 60 characters.";
  if (!isUserNamevalid) return "UserName Is Not Valid";
  return null;
};

export default CheckValidateData;
