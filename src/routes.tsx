import { lazy } from "react";
import { createHashRouter, Navigate } from "react-router-dom";

import { ROUTES_LIST, ROUTE_PATHS } from "./constants.ts";

const Carts = lazy(() =>
  import("./pages/Carts").then((module) => ({ default: module.Carts })),
);

const Cart = lazy(() =>
  import("./pages/Cart").then((module) => ({ default: module.Cart })),
);

const router = createHashRouter([
  {
    path: ROUTES_LIST.ROOT,
    element: <Navigate to={ROUTE_PATHS.CARTS} />,
  },
  {
    path: ROUTE_PATHS.CARTS,
    element: <Carts />,
  },
  {
    path: ROUTE_PATHS.CART(),
    element: <Cart />,
  },
]);

export default router;
