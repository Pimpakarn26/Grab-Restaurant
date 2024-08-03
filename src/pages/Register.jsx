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

    const handleSubmit = async () => {
    try {
      const register = await AuthService.register(
        user.username,
        user.email,
        user.password
      );
      if (register.status === 200) {
        Swal.fire({
          title: "User Registration",
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
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "User Registration",
        text: error.response.data.message || error.message,
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
    };

    return (
      <div className="container mx-auto">
        <div></div>
        <div className="space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Type
            <input
              type="text"
              className="grow"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            img
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </label>
          <div className="space-x-2 mt-4 text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Register
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            cancle
          </button>
          </div>
        </div>
      </div>
    );
};

export default Register;