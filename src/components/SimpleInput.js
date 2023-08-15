import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    valueIsValid: enteredNameIsValid,
    reset: resetNameInput,
    setIsTouched: setEnteredNameIsTouched,
  } = useInput((v)=>v.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmailInput,
    setIsTouched: setEnteredEmailIsTouched,
  } = useInput((inp)=>
    inp.trim() !== "" &&
      inp.includes("@") 
  );
  //const [enteredName, setEnteredName] = useState("");
  //const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  //const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredEmailIsValid =
  //   enteredEmail.trim() !== "" &&
  //   enteredEmail.indexOf("@") > 0 &&
  //   enteredEmail.indexOf(".") - enteredEmail.indexOf("@") > 1;

  //const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  //const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    // setEnteredNameIsTouched(false);
    // setEnteredName("");
    resetNameInput();
    resetEmailInput()
  };

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const nameInputBlurHander = () => {
  //   setEnteredNameIsTouched(true);
  // };
  // const emailInputBlurHander = () => {
  //   setEnteredEmailIsTouched(true);
  // };
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  const EmailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">entered text is not valid</p>
        )}
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">entered email is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
