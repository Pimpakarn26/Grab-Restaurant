import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
   <Navbar />
   <RouterProvider router={router} />
  </React.StrictMode>,
);
