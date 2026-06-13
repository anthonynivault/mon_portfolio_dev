import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

function RootLayout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [pathname, hash]);

  return <Outlet />;
}

export default RootLayout;