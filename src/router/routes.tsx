import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import PageNotFound from "../PageNotFound";

const routes = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "*", element: <PageNotFound /> },
]);

export default routes;
