import React from "react";
import Header from "../components/Header";
import MealList from "../components/MealList";
import Mealinfo from "../components/Mealinfo";
import { MEALS } from "../data/Data";
import "./home.css";
// import { useStoreContext } from "../context/context";

const Homepage = () => {
  // const {total} = useStoreContext();
  return (
    <div className="home">
      <Header />

      <Mealinfo />

      <MealList meals={MEALS} />
    </div>
  );
};

export default Homepage;
