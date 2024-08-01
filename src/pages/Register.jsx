import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";

const Register = () => {
    const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };
    const handleSubmit = async () =>{
        try{
            const register = await AuthService.register(user.username, user.email, user.password)
            if(register.status === 200){
                Swal.fire({
                  title: "User Registeration",
                  text: register.data.message,
                  icon: "success",
                });
                setUser({
                  username: "",
                  email: "",
                  password: "",
                });
                navigate("/login");
            }
        }catch (error){
            console.log(error);
            Swal.fire({
              title: "User Registeration",
              text: error.reponse.data.message || error.message,
              icon: "error",
            });
        }
    };
    const handleCancel = () => {
        setUser({
            username:"",
            email:"",
            password:"",
        })
        navigate("/");
    }
    return (
      <div className="container mx-auto">
        <div></div>
        <div className="space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              className="grow"
              placeholder="Restaurant Name"
              name="username"
              onChange={handleChange}
              value={restaurant.username}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Type
            <input
              type="text"
              className="grow"
              placeholder="Restaurant Name"
              name="email"
              onChange={handleChange}
              value={restaurant.email}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            img
            <input
              type="text"
              className="grow"
              placeholder="Restaurant Name"
              name="password"
              onChange={handleChange}
              value={restaurant.password}
            />
          </label>
          <button className="btn btn-primary" onClick={handleChange}>
            Register
          </button>
          <button className="btn btn-secondary" onClick={handleChange}>
            {" "}
            cancle{" "}
          </button>
        </div>
      </div>
    );
};

export default Register;