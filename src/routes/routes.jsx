import { lazy } from "react";

export const routes = [
  {
    path: "/",
    element: lazy(async () => await import("../pages/Home/Home")),
  },
  {
    path: "/proyectos",
    element: lazy(async () => await import("../pages/Proyectos")),
  },
  {
    path: "/financiamiento",
    element: lazy(async () => await import("../pages/Financiamiento")),
  },
  {
    path: "/testimoniales",
    element: lazy(async () => await import("../pages/Testimoniales")),
  },
  {
    path: "/blog",
    element: lazy(async () => await import("../pages/Blog")),
  },
];
