import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Shell from "../components/Shell";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
  },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
