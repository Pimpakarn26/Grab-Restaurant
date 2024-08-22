import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import RestaurantService from "../services/restaurant.service";
import { response } from "express";
import Swal from "sweetalert2";
 

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });
  //2.Get restaurant by id
  useEffect(() => {
    RestaurantService.getRestaurantById(id).then((response) => {
      if (response.status === 200) {
        setRestaurant(response.data);
      }
    });
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await RestaurantService.editRestaurant(id, restaurant);
      if (response.status === 200) {
        Swal.fire({
          title: "Restaurant update",
          text: response.data.message,
          icon: "success",
        });
        navigate("/");
      }
    }catch (error) {
      console.log(error);
      Swal.fire({
        title: "Restaurant update",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
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
            name="name"
            onChange={handleChange}
            value={restaurant.name}
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
            value={restaurant.type}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Restaurant ImageUrl
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Restaurant ImageUrl"
            name="imageUrl"
            onChange={handleChange}
            value={restaurant.imageUrl}
          />
        </label>
        {restaurant.imageUrl && (
          <div className="flex justify-center mt-4">
            <img
              src={restaurant.imageUrl}
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