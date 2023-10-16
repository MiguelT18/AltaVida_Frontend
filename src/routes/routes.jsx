import { lazy } from "react";

export const routes = [
  {
    path: "/",
    element: lazy(async () => await import("../pages/Home/Home")),
  },
  {
    path: "/nosotros",
    element: lazy(async () => await import("../pages/Nosotros/Nosotros")),
  },
  {
    path: "/catalogo",
    element: lazy(async () => await import("../pages/Catalogo/Catalogo")),
  },
  {
    path: "/desarrollos",
    children: [
      {
        path: "/desarrollos",
        element: lazy(
          async () => await import("../pages/Desarrollos/Desarrollos")
        ),
      },
      {
        path: "/desarrollos/altamira",
        element: lazy(
          async () =>
            await import("../pages/Desarrollos/Proyectos/AltaMira/AltaMira")
        ),
      },
      {
        path: "/desarrollos/bless",
        element: lazy(
          async () => await import("../pages/Desarrollos/Proyectos/Bless/Bless")
        ),
      },
      {
        path: "/desarrollos/riovida",
        element: lazy(
          async () =>
            await import("../pages/Desarrollos/Proyectos/RioVida/RioVida")
        ),
      },
    ],
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
