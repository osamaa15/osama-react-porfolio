import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Shell from "../components/Shell";
import CommentList from "../pages/admin/CommentList";
import Admin from "../pages/admin/Admin";
import Utility from "../pages/utilities/Utility";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
  },
  {
    path: "utilities",
    element: <Utility />,
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
