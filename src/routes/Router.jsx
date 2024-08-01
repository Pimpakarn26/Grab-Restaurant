import {createBrowserRouter} from "react-router-dom";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path:"/login",
    element: <Login />,
  },
]);

export default router;