import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NotAllowed from "../pages/NotAllowed.jsx"
import AdminPage from "../pages/AdminPage.jsx";
import UserProfile from "../components/UserProfile.jsx";
import UserPage from "../pages/UserPage.jsx";
import Layout from "../components/Layout.jsx";
import AdminLayout from "../components/AdminLayout.jsx";
import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";

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
    element: <ModOrAdminPage>
      <Edit/>
      </ModOrAdminPage>,
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
    path: "/notallowed",
    element: <NotAllowed />,
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
