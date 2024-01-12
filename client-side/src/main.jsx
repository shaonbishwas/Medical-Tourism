import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Doctors from "./Pages/Doctors/Doctors.jsx";
import ApplyVisa from "./Pages/ApplyVisa/ApplyVisa.jsx";
import Error from "./Pages/Error/Error.jsx";
import DoctorDetails from "./Pages/DoctorDetails/DoctorDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "applyvisa",
        element: <ApplyVisa />,
      },
      {
        path: "doctors",
        element: <Doctors></Doctors>
      },
      {
        path: "doctordetails",
        element: <DoctorDetails></DoctorDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
