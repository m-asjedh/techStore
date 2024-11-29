import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
