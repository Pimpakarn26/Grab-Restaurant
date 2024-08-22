import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

const Card = ({ id, name, type, imageUrl }) => {
  const handleDelete = async (id) => {
    try {
      const response = await RestaurantService.deleteRestaurant(id);
      if (response.status === 200) {
        Swal.fire({
          title: "Delete Restaurant",
          text: response.data.message,
          icon: "success",
        });
        window.location.reload();
      }
    } catch (error) {
      Swal.fire({
        title: "Delete Restaurant",
        text: error.response.data.message || error.message,
        icon: "error",
      });
      console.log(error);
    }
  };
  return (
    <div
      className="card card-compact w-72 bg-base-100 shadow-xl h-96"
      id="card"
    >
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>

        {user &&
          (user.roles.includes("ROLES_MODERATOR") ||
            user.roles.includes("ROLES_ADMIN")) && (
            <div className="card-actions justify-end">
              {user.roles.includes("ROLES_ADMIN") && (
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              )}
              <a href={`/edit${id}`} className="btn btn-warning">
                Edit
              </a>
            </div>
          )}
      </div>
    </div>
  );
};

export default Card;
