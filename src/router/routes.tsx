import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Shell from "../components/Shell";
import CommentList from "../pages/CommentList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
  },
  {
    path: "/Z87c6GDUeduGbDCa9qCjc2MOeLJ6mIFiois",
    element: <CommentList />,
  },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
