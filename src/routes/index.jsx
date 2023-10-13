import UseScrollToTop from "@hooks/UseScrollToTop";
import { Fragment, Suspense } from "react";
import { Outlet, Route } from "react-router-dom";
import Loading from "./Loading/Loading";

export default function RenderRoutes(routes) {
  return routes.map((route) => {
    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<Loading />}>
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
