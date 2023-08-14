import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched,setEnteredNameIsTouched]=useState(false)
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  let formIsValid = false;
  
    if (enteredNameIsValid) {
      formIsValid=true
    } 
  

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true)
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredNameIsTouched(false);
    setEnteredName("")
  }
  
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  
  const nameInputBlurHander = () => {
    setEnteredNameIsTouched(true)
  }
  const nameInputClasses = nameInputIsInvalid
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
          onBlur={nameInputBlurHander}
        />
        {nameInputIsInvalid && (
          <p className="error-text">entered text is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
