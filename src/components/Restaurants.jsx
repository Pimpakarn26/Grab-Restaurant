import Card from "./Card";
import { useEffect, useState } from "react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
   useEffect(() => {
     fetch("http://localhost:3000/restaurants")
       .then((res) => {
         return res.json();
       })
       .then((response) => {
         setRestaurants(response);
       })
       .catch((err) => {
         console.log(err.message);
       });
   }, []);
  
  return (
    <div className="flex">
    <div className="flex flex-wrap justify-center gap-4">
      { restaurants &&
         restaurants.map((restaurants) => {
        return (
          <Card
          key={restaurants.id}
          title={restaurants.title}
          img={restaurants.img}
          type={restaurants.type} 
          />
        );
      }
      )}
    </div>
  </div>




  );
};

export default Restaurants;