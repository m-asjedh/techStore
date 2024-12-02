import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useNavbarVisibility from "./hooks/useNavbarVisibilty";
import Footer from "./components/Footer";

const App = () => {
  const showNavbar = useNavbarVisibility();

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      {showNavbar && <Navbar />}
      <Outlet />
      {showNavbar && <Footer />}
    </div>
  );
};

export default App;
