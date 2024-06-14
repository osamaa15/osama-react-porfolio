import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Shell from "../components/Shell";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "section",
    element: <Shell />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default routes;
