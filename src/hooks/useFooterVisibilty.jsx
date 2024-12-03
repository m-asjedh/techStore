import { useLocation } from "react-router-dom";

const useFooterVisibility = () => {
  const location = useLocation();

  return (
    location.pathname !== "/" &&
    location.pathname !== "/signin" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/checkout"
  );
};

export default useFooterVisibility;
