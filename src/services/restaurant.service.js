import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all reataurant
const getAllRestaurant = async () => {
    return await api.get(RESTO_API);
}

const RestaurantService = {
    getAllRestaurant
};
export default RestaurantService;