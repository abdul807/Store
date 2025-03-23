import React from "react";
import Meal from "./Meal";
import "./meallist.css";
import { useStoreContext } from "../context/context";

const MealList = (props) => {
  const { addItemHandler } = useStoreContext();

  const Savehandler = (item) => {
    console.log(item)
    addItemHandler(item);
  };
  return (
    <div className="meallist">
      {props.meals.map((meal, index) => {
        return (
          <Meal
            name={meal.name}
            
            key={meal.name}
            description={meal.description}
            price={meal.price}
            onAddToCArt={Savehandler}
          />
        );
      })}
    </div>
  );
};

export default MealList;
