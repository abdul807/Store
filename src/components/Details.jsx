import React from "react";
import "./details.css";

import Button from "./Button";
import { useStoreContext } from "../context/context";

import UserInput from "../hooks/UserInput";
import { Address } from "../data/Data";

const Details = () => {
    const { Items } = useStoreContext();
  const {
    handleChange: NameValueChange,
    enteredValue: NameValue,
    inputisInvalid: NameError,
    InputisValid: NameInputValid,
    handleTouch: NameTouch,
    reset: resetName
  } = UserInput((value) => value.trim() !== "");

  const {
    handleChange: AddressValueChange,
    enteredValue: AddressValue,
    inputisInvalid: AddressError,
    InputisValid: AddressInputValid,
    handleTouch: AddressTouch,
    reset: resetAddress
  } = UserInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (NameInputValid && AddressInputValid) {
    formIsValid = true;
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(NameValue)
    console.log(AddressValue)


    const data = JSON.stringify({
        Name: NameValue,
        Address: AddressValue,
        Items: Items

    })

    // Address(data)


  const Add_address = async() =>{
    try{
        const response = await Address(data)
        console.log(response)
        console.log('form submitted')
    } catch{
        console.log("error")
    }
  }

  Add_address()



    console.log(data)
    resetName()
    resetAddress()
    // console.log(hasError);
    // console.log(NameInputValid);
    // console.log(NameValue);
  };
  return (
    <div className="order-details">
      <div className="details">
        <div className="heading">Order details</div>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            value={NameValue}
            onChange={NameValueChange}
            onBlur={NameTouch}
          />

          {NameError && <p>Enter a name</p>}

          <br></br>
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            value={AddressValue}
            onChange={AddressValueChange}
            onBlur={AddressTouch}
          />

          {AddressError && <p>Enter a vlid address</p>}
          <Button className="btn" disabled={!formIsValid}>
            Click Me
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Details;
