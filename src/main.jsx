import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "routes/index";
import Blog from "routes/pages/Blog";
import Financiamiento from "routes/pages/Financiamiento";
import Proyectos from "routes/pages/Proyectos";
import Testimoniales from "routes/pages/Testimoniales";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <h1 className="text-6xl text-red-500 font-bold">Error 404</h1>
    ),
  },
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
  {
    path: "/financiamiento",
    element: <Financiamiento />,
  },
  {
    path: "/testimoniales",
    element: <Testimoniales />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
