import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import SuspenseContent from "./components/SuspenseContent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseContent />}>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);

//ต้องไปเช็คว่ามีอะไรเปลี่ยน
