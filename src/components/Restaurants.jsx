import React from "react";
import Card from "./Card";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              imageUrl={restaurant.imageUrl}
              name={restaurant.name}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};
//ไปเช็คที่restaurantmodel
export default Restaurants;