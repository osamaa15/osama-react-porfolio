import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();
  const pageTitle = useMemo(() => {
    switch (location.pathname) {
      //   case "/auth/account-settings":
      //     return "Account Settings";
      default:
        document.title = "Muhammad Osama Iftikhar";
        return "";
    }
  }, [location.pathname]);
  return { pageTitle };
};

export default usePageTitle;
