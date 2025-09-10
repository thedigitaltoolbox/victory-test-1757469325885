import type { RouteObject } from "react-router-dom";
import home from "./pages/home";

const routes: RouteObject[] = [
  { path: "home", element: <home /> },
];
export default routes;
