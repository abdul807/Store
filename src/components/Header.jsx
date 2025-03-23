import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import OrderModal from "./OrderModal";
import { useStoreContext } from "../context/context";

const Header = () => {
  // const [counter, Setcounter] = useState(0)
  const [showModal, setShowModal] = useState(false);
const { Items } = useStoreContext();
  const ToShow = () => {
    setShowModal(true);
  };

  const CloseModal = () => {
    console.log("Closing modal...");
    setShowModal(false);
  };

  const numberOfCartItems= Items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0)

  // const numberOfCartItems = Items.length;
  
   


  return (
    <header className="header">
      <div className="logo">
        <h2>ReactMeals</h2>
      </div>
      {showModal && <OrderModal onClose={CloseModal} />}

      <div className="cart" onClick={ToShow}>
        <FontAwesomeIcon icon={faCartShopping} />
        {/* <h1>cartbox</h1> */}
        <h4>Your Cart</h4>
        {/* <div className="counter">{counter}</div> */}
        <div className="counter">{numberOfCartItems}</div>
      </div>
    </header>
  );
};

export default Header;
