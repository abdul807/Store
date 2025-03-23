import React, { useRef, useState } from "react";
import Button from "./Button";
import "./meal.css";
import "./button.css";
import { useStoreContext } from "../context/context";

const Meal = (props) => {
  // const [inputValue, setInputValue] = useState(1)
  const amountRef = useRef();

  const [amountValid, setAmountValid] = useState(true)

const { addItemHandler, Items } = useStoreContext();

  const Add = (e) => {
    e.preventDefault();
    console.log(amountRef.current.value);

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountValid(false)
      return;
      
    }

    

    const item = {
      id: Math.floor(Math.random() *16),
      name: props.name,
      price: props.price * enteredAmountNumber,
      amount : enteredAmountNumber
    }
    props.onAddToCArt(item)

    // const exist = Items.some((i) => i.id === item.id);
    // console.log("in meak", exist);

    // if(exist){
    //   console.log([...item, item.amount + enteredAmountNumber])
    // }

    // const data = {
    //   ...props,
    //   quantity: inputValue
    // }

    // console.log(inputValue)
    // addItemHandler(data)
  };

  return (
    <div className="meal-container">
      <div className="meal">
        <div className="meal-name">
          <h4>{props.name}</h4>
        </div>
        <div className="description">
          <p>
            <em>{props.description}</em>
          </p>
        </div>
        <div className="price">
          <h4>${props.price}</h4>
        </div>
      </div>
      <div className="actions">
        <div className="amount">
          Amount
          <input
            type="number"
            // value={inputValue}
            // onChange={(e) => setInputValue(e.target.value)}
            min="1"
            // max="5"
            defaultValue="1"
            ref={amountRef}
          />
        </div>
        <Button className="btn" onClick={Add}>
          + Add
        </Button>
        {!amountValid && <p>Enter a valid number</p>}
      </div>
    </div>
  );
};

export default Meal;
