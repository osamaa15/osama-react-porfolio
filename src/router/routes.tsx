import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Shell from "../components/Shell";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Shell />,
  },
  { path: "*", element: <PageNotFound /> },
]);

export default routes;
