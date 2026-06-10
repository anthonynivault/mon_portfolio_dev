import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";
import LegalNotice from "../pages/LegalNotice";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";

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
    element: <NotFound />,
  },
  {
    path: "/mentions-legales",
    element: <LegalNotice />,
  },
  {
  path: "/confidentialite",
  element: <PolitiqueConfidentialite />,
},
]);

export default router;