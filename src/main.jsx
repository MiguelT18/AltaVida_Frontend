import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import RenderRoutes from "./routes";
import { routes } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>{RenderRoutes(routes)}</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
