import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";
import LegalNotice from "../pages/LegalNotice";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projets/:slug",
        element: <ProjectDetails />,
      },
      {
        path: "/mentions-legales",
        element: <LegalNotice />,
      },
      {
        path: "/politique-de-confidentialite",
        element: <PolitiqueConfidentialite />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;