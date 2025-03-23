import React, { useContext,  useState } from "react";

const StoreContext = React.createContext();

export const useStoreContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [Items, setItems] = useState([]);
  

  const addItemHandler = (item) => {

    // const exist = Items.some((i) => i.id === item.id);
    // console.log(exist);

    // if (exist) {
    //   const updatedAmout = item.amount;
    // //   const updatedId = item.id;
    //   setItems((prev) => {
    //     return prev.map((i) => {
    //       if (i.id === item.id) {
    //         console.log("in content ", { ...i, amount: i.amount + updatedAmout });
    //       }
    //       return prev
    //     });
        
    //     // setTotal((prev) => prev + item.amount);
    //     // return prev;

    //     // const updatedItems = [item, ...prev];
    //     // console.log("updated", updatedItems)
    //     // return updatedItems;
    //   });
    //    console.log("this is the items" , Items)
    // }

    setItems((prev) => {
      const updatedItems = [item, ...prev];
      // console.log("updated", updatedItems)
      return updatedItems;
    });

  };

  const removeItemHandler = (id) => {
    setItems((prev)=>{
        const updatedItems = Items.filter((item)=> item.id !== id)
        return updatedItems
    })
  };

  const values = {
    Items,
    addItemHandler,
    removeItemHandler,
    setItems
   
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

// dummy data for testing purposes
