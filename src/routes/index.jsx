import UseScrollToTop from "@hooks/UseScrollToTop";
import { Fragment, Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: lazy(async () => await import("../pages/Home")),
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

export default function RenderRoutes(routes) {
  return routes.map((route) => {
    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <UseScrollToTop>
              <Layout>{route.children ? <Outlet /> : <Component />}</Layout>
            </UseScrollToTop>
          </Suspense>
        }
      >
        {route.children && RenderRoutes(route.children)}
      </Route>
    );
  });
}
