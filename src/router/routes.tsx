import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Shell from "../components/Shell";
import CommentList from "../pages/CommentList";
import Admin from "../pages/Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
  },
  {
    path: "/_admin",
    element: <Admin />,
  },
  {
    path: "/_comments",
    element: <CommentList />,
  },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
