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
          title: "Restaurant Update",
          text: response.data.message,
          icon: "success",
        });
        navigate("/");
      }
    }catch (error) {
      console.log(error);
      Swal.fire({
        title: "Restaurant Update Failed",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };
  return (
<div className="container flex flex-col items-center p-4 mx-auto space-y-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">TITLE</span>
            </label>
            <input
              type="text"
              placeholder="ชื่ออาหาร"
              className="input input-bordered"
              required
              name="name"
              id="name"
              value={restaurant.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">TYPE</span>
            </label>
            <input
              type="text"
              placeholder="หมวดหมู่"
              className="input input-bordered"
              required
              name="type"
              id="type"
              value={restaurant.type}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">IMAGE</span>
            </label>
            <input
              type="text"
              placeholder="รูปอาหาร"
              className="input input-bordered"
              required
              name="imageUrl"
              id="imageUrl"
              value={restaurant.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Edit;