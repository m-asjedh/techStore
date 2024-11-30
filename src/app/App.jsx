import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
