import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projets/:slug",
    element: <ProjectDetails />,
  },
  {
    path: "*",
    errorElement: <NotFound />,
  },
]);

export default router;