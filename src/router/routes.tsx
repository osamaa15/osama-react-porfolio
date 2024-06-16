import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Shell from "../components/Shell";
import CommentList from "../pages/CommentList";
import Admin from "../pages/Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "comments",
        element: <CommentList />,
      },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
