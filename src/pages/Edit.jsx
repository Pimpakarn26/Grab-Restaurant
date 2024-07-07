import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState({
    title: "",
    type: "",
    img: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurants, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/restaurants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurants),
      });

      if (response.ok) {
        alert("Restaurant updated successfully");
      } else {
        alert("Failed to update restaurant");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl text-center mb-4">Edit Restaurant</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            name="description"
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
        <button
          className="btn btn-success bg-green-500 text-white py-2 px-4 rounded mx-auto block"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;