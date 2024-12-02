import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-5 border-t border-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="TechStore Logo" className="h-10 w-10 mr-2" />
            <span className="text-white text-2xl font-bold">TechStore</span>
          </div>
          <p className="text-sm mb-2">Your one-stop shopping destination.</p>
          <p className="text-sm mb-2"> 9/3 Kandy Road, Kengalla</p>
          <p className="text-sm">Hotline: (+94) 74 114 6366</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/home" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:text-white">
                Account
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#twitter" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#facebook" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#instagram" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-5 text-sm">
        <p>© 2024 TechStore. All rights reserved.</p>
        <p>
          <a href="#privacy" className="hover:text-white mr-2">
            Privacy Policy
          </a>
          <a href="#cookies" className="hover:text-white">
            Cookies
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
