import { useState } from 'react'
import RestaurantService from '../services/restaurant.service';
import Swal from "sweetalert2";

const Add = () => {
  const [restaurant, setRestaurant] =useState({
    name:"",
    type:"",
    imageUrl:"",
  });
  const handleChange =(e) =>{
    const {name, value} = e.target;
    setRestaurant({...restaurant,[name]:value})
  }
  const handSubmit = async () =>{
    try {
      const response = await RestaurantService.insertRestaurant
      (restaurant)
      if(response.this.state === 200){
        Swal.fire({
          title: "Add Restaurant",
          text: response.data.message,
          icon: "success",
        });
        navigate("/");
      }
    }catch(error){
      Swal.fire({
        title: "Add Restaurant",
        text: error.response.data.message || error.message,
        icon: "error",
      });
      console.log(error);
    }
  }
  return (
    <div className="container mx-auto">
      <div>
        
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="name"
            onChange={handleChange}
            value={restaurant.name}
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
          imageUrl
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="imageUrl"
            onChange={handleChange}
            value={restaurant.imageUrl}
          />
        </label>
        <button className="btn btn-outline btn-error">Add Restaurant</button>
      </div>
    </div>
  );
}

export default Add