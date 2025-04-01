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
            name={meal.Name}
            id={meal.id}
            
            key={meal.Name}
            description={meal.Description}
            price={meal.Price}
            onAddToCArt={Savehandler}
          />
        );
      })}
    </div>
  );
};

export default MealList;
