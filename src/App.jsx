import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useNavbarVisibility from "./hooks/useNavbarVisibilty";
import Footer from "./components/Footer";
import useFooterVisibility from "./hooks/useFooterVisibilty";
import { ToastContainer } from "react-toastify";

const App = () => {
  const showNavbar = useNavbarVisibility();
  const showFooter = useFooterVisibility();

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      <ToastContainer />
      {showNavbar && <Navbar />}
      <div className="flex-grow">
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
