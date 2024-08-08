import {createBrowserRouter} from "react-router-dom";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Layout from "../components/Layout.jsx";
import { Children } from "react";
import AdminLayout from "./AdminLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    Children:[
      {
        path:"",
        element: <Home />
      },
    ],
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
  path: "/dashboard/",
  element: <div>Admin</div>,
  Children: [
    {
      path: "user",
      element: <div>Dashboard User</div>,
    },
  ],
},
]);

export default router;