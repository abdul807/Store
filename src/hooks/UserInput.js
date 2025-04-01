import React, { useState } from "react";

const UserInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);


  const InputisValid = validateValue(enteredValue);
  const inputisInvalid = !InputisValid && isTouched;

  const handleChange = (e) => {
    setEnteredValue(e.target.value)
  };

  const handleTouch = () => {
    setIsTouched(true);
  }

  const reset =() =>{
    setEnteredValue("");
    setIsTouched(false);
  }
  return {
    handleChange,
    enteredValue,
    handleTouch,
    inputisInvalid
    ,InputisValid,
    isTouched,
    reset
  };
};

export default UserInput;
