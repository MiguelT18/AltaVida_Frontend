import { lazy } from "react";

export const routes = [
  {
    path: "/",
    element: lazy(async () => await import("../pages/Home/Home")),
  },
  {
    path: "/desarrollos",
    element: lazy(async () => await import("../pages/Desarrollos/Desarrollos")),
  },
  {
    path: "/financiamiento",
    element: lazy(
      async () => await import("../pages/Financiamiento/Financiamiento")
    ),
  },
  {
    path: "/testimoniales",
    element: lazy(
      async () => await import("../pages/Testimoniales/Testimoniales")
    ),
  },
  {
    path: "/blog",
    element: lazy(async () => await import("../pages/Blog/Blog")),
  },
];
