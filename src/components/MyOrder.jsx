import React, { useState } from "react";
import { useStoreContext } from "../context/context";

const MyOrder = (props) => {
  const { Items, removeItemHandler, addItemHandler, setItems } = useStoreContext();
  let [quantity, Setquantity] = useState(props.amount);
  const [totalAmount, setTotal] = useState(0);


  const remove = () => {
    removeItemHandler(props.id);
  };

  const Add = (e) => {
    e.preventDefault();
    Setquantity(()=>{
        const newQuantity = +quantity + 1
        return newQuantity
    })
    console.log(props.id)

    Items.map((item)=> {
        if(item.id === props.id){
            item.amount = quantity
            item.price = props.price * quantity

        }
        return Items
    })
    console.log(Items)

  
  };
  return (
    <div className="meal-container">
      <div className="meal">
        <div className="meal-name">
          <h4>{props.name}</h4>
        </div>

        <div className="price">
          <h4>${props.price}</h4>
          <p>x{quantity}</p>
        </div>
      </div>
      <div className="actions">
        <div className="add" onClick={Add}>
          +
        </div>
        <div className="remove" onClick={remove}>
          -
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
