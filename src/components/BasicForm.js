import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const isNotEmpty = val => val.trim() !== '';
  const {
    value: enteredFirstName,
    hasError: firstNameInputIsInvalid,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    valueIsValid: enteredFirstNameIsValid,
    reset: resetFirstNameInput,
    setIsTouched: setEnteredFirstNameIsTouched,
  } = useInput(isNotEmpty);

  
  const {
    value: enteredLastName,
    hasError: lastNameInputIsInvalid,
    valueChangeHandler: LastNameInputChangeHandler,
    inputBlurHandler: LastNameInputBlurHandler,
    valueIsValid: enteredLastNameIsValid,
    reset: resetLastNameInput,
    setIsTouched: setEnteredLastNameIsTouched,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmailInput,
    setIsTouched: setEnteredEmailIsTouched,
  } = useInput((val) => isNotEmpty(val) && val.includes("@"));


  
  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredEmailIsValid&&enteredLastNameIsValid) {
    formIsValid = true;
  }
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredFirstNameIsTouched(true)
    setEnteredLastNameIsTouched(true)
    setEnteredEmailIsTouched(true);
    if (
      !enteredEmailIsValid ||
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid
    ) return ;
    resetFirstNameInput();
    resetLastNameInput()
    resetEmailInput()
  }

  const firstNameInputClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  const EmailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onBlur={LastNameInputBlurHandler}
            onChange={LastNameInputChangeHandler}
          />
        </div>
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="emailId">email</label>
        <input
          type="text"
          id="emailId"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
