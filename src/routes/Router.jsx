import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Layout from "../components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
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
    path: "/dashboard",
    element: <div>Admin</div>,
    children: [
      {
        path: "user",
        element: <div>Dashboard User</div>,
      },
    ],
  },
]);

export default router;
