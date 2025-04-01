// import { useState } from 'react'
import React, { useState } from "react";
import "./ordermodal.css";
import Button from "./Button";
import { useStoreContext } from "../context/context";
import MyOrder from "./MyOrder";
import Details from "./Details";


const OrderModal = (props) => {

  
  const { Items } = useStoreContext();
  const [showAddress, SetshowAddress] = useState(false);


 

  const Order = () => {
    SetshowAddress(true);
  };

  const totalPrice = Items.reduce((curNumber, item) => {
    const total_ = item.price * item.amount;
    return curNumber + total_;
  }, 0);

  const add = (item) => {
    const index = Items.findIndex((i) => i.id === item.id);
    // console.log(index);
  };

  // const totalPrice = Items.forEach((item)=>{
  //     return item.price * item.amount
  // })

  return (
    <div className="backdrop">
      <div className="orderlist">
        {Items.length === 0 ? (
          <p>NO ITEMS ADDED</p>
        ) : (
          Items.map((item, index) => {
            return (
              <MyOrder
                name={item.name}
                price={item.price}
                amount={item.amount}
                key={index}
                id={item.id}
              />
            );
          })
        )}

        <div className="total-amount">
          <div className="spend">
            <h4>Total Amount</h4>
          </div>
          <div className="amount">${totalPrice.toFixed(2)}</div>
        </div>

        <div className="btns">
          <Button className="btn" onClick={Order}>
            Order
          </Button>
          <Button className="btn" onClick={props.onClose}>
            Close
          </Button>
        </div>
          {showAddress && <Details />}
       
      </div>
    </div>
  );
};

export default OrderModal;
