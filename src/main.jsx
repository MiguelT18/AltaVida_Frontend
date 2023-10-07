import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import RenderRoutes, { routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>{RenderRoutes(routes)}</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
