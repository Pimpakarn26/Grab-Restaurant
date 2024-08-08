import React from "react";
import Box from "./Box";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Box
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              imageUrl={restaurant.imageUrl}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};
//ไปเช็คที่restaurantmodel
export default Restaurants;