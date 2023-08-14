import { useEffect, useRef,useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameIsTouched,setEnteredNameIsTouched]=useState(false)
  const nameInputRef = useRef();

  useEffect(() => {
    if(enteredNameIsValid) console.log('name is valid')
  }, [enteredNameIsValid])
  

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true)
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName("")
    console.log(nameInputRef.current.value);
  }
  
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  
  
  const nameInputChangeHandler = (event) => {
    setEnteredNameIsTouched(false);
    setEnteredName(event.target.value);
  }
  
  const nameInputBlurHander = () => {
    setEnteredNameIsTouched(true)
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false)
    }
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
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHander}
        />
        {nameInputIsInvalid && (
          <p className="error-text">entered text is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
