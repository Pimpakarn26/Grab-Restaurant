import React from "react";
import { useState } from "react";

const Add = () => {
    const [restaurants, setRestaurants] = useState({
        title: "",
        type: "",
        img: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurants({ ...restaurants, [name]: value });
      };
    
      const handSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
          const response = await fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(restaurants),
          });
          if (response.ok) {
            alert("Restaurant added successfully");
            setRestaurants({ title: "", type: "", img: "" });
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      return (
        <div className="container mx-auto p-4">
          <div>
            <h1 className="text-2xl text-center mb-4">Add Restaurant</h1>
          </div>
          <form onSubmit={handSubmit} className="space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              Restaurant Name
              <input
                type="text"
                className="grow p-2 border border-gray-300 rounded"
                placeholder="Restaurant Name"
                name="title"
                onChange={handleChange}
                value={restaurants.title}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Restaurant Type
              <input
                type="text"
                className="grow p-2 border border-gray-300 rounded"
                placeholder="Restaurant Type"
                name="type"
                onChange={handleChange}
                value={restaurants.type}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Restaurant ImageUrl
              <input
                type="text"
                className="grow p-2 border border-gray-300 rounded"
                placeholder="Restaurant ImageUrl"
                name="img"
                onChange={handleChange}
                value={restaurants.img}
              />
            </label>
            {restaurants.img && (
              <div className="flex justify-center mt-4">
                <img
                  src={restaurants.img}
                  alt="Restaurant Preview"
                  className="max-w-full h-auto rounded"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            )}
            <button className="btn   btn-outline btn-primary mx-auto block" type="submit">
              Add Restaurant
            </button>
          </form>
        </div>
      );
    };
    
    export default Add;