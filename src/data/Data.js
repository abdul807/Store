// export const MEALS = [
//   {
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

// const Data = () =>{

//   const loadedMovies = [];
//    const Base_URL = "https://react-cd9ef-default-rtdb.firebaseio.com/Meals.json"
//    const fetchdata = async () => {
//     const response = await fetch(Base_URL)
//     const data = await response.json()

//       for (const key in data) {
//         loadedMovies.push({
//           id: key,
//           Name: data[key].Name,
//           Description: data[key].Description,
//           Price: data[key].Price

//         })
//       }
//    }

//   //  fetchdata()

//    return loadedMovies;
//   // fetch('https://react-cd9ef-default-rtdb.firebaseio.com/Meals.json')
//   // .then(response=> response.json())
//   // .then(data=> {
//   //   const loadedMovies = [];
//   //     for (const key in data) {
//   //       loadedMovies.push({
//   //         id: key,
//   //         title: data[key].title,
//   //         openingText: data[key].openingText,
//   //         releaseDate: data[key].releaseDate,

//   //       })
//   //     }
//   // })

// }

// export default Data;

const Base_URL = "https://react-cd9ef-default-rtdb.firebaseio.com/Meals.json";

export const LoadMeals = async () => {
  const loadedMeals = [];

  const response = await fetch(Base_URL);
  const data = await response.json();

  for (const key in data) {
    loadedMeals.push({
      id: key,
      Name: data[key].Name,
      Description: data[key].Description,
      Price: data[key].Price,
    });
  }
  return loadedMeals;
};

const Address_URL =
  "https://react-cd9ef-default-rtdb.firebaseio.com/Address.json";

export const Address = async (body) => {
  const response = await fetch(Address_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  const data = await response.json();
  // console.log(data)
  return data
};
