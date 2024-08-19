import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all reataurant
const getAllRestaurant = async () => {
    return await api.get(RESTO_API);
};

//get restaurant by Id
const getRestaurantById = async (id) => {
    //http://localhost:5000/api/v1/restaurant/1
    return await api.get(RESTO_API + `/${id}`);
}

//add a restaurant
const insertRestaurant = async (id) => {
     return await api.put(RESTO_API + `/${id}`);
};

//update a  restaurant data
const editRestaurant = async (id, restaurant) => {
    return await api.put(RESTO_API + `/${id}`, restaurant) ;
}

//Delete a restaurant
const deleteRestaurant = async (id) => {
    return await api.delete(RESTO_API + `/${id}`);
}
const RestaurantService = {
  getAllRestaurant,
  getRestaurantById,
  editRestaurant,
  deleteRestaurant,
  insertRestaurant,
};
export default RestaurantService;