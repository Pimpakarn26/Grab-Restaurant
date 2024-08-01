//import React from 'react'
import { useState } from 'react'

const Add = () => {
  const [restaurant, setRestaurant] =useState({
    title:"",
    type:"",
    img:"",
  });
  const handleChange =(e) =>{
    const {name, value} = e.target;
    setRestaurant({...restaurant,[name]:value})
  }
  const handSubmit = async () =>{
    try {
      const response = await fetch("http://localhost:5000/restaurants/",{
        method:"POST",
        body: JSON.stringify(restaurant),
      });
      if(response.ok){
        alert("Restaurant added successfully!");
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="container mx-auto">
      <div>
        
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="title"
            onChange={handleChange}
            value={restaurant.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Type
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          img
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        <button className="btn btn-outline btn-error">Add Restaurant</button>
      </div>
    </div>
  );
}

export default Add