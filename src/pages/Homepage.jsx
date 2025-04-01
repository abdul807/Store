import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import MealList from "../components/MealList";
import Mealinfo from "../components/Mealinfo";
import { LoadMeals } from "../data/Data";
import "./home.css";

// import { useStoreContext } from "../context/context";

const Homepage = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  // const {total} = useStoreContext();


 useEffect(()=>{

  const fetechMeals = async () =>{
  
    try {
      const response = await LoadMeals();
      console.log(response)
      setMeals(response)
      
    } catch (error) {
      setError(true)
      console.log('this is the eroor', error)
      setLoading(false)
      
      
      
    }
  }
  fetechMeals();
  setLoading(false)

 },[])




  return (
    <div className="home">
      <Header />

      <Mealinfo />
      

     {loading? <p className="loading">Loading...</p> : <MealList meals={meals} /> }
     {/* {error? <p className="loading">There is an error</p> : <MealList meals={meals} /> }   */}
    </div>
  );
};

export default Homepage;
