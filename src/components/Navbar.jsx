import { FaCartShopping, FaClipboardList } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black sticky top-0 z-30 mx-auto flex w-full items-center justify-between px-10 py-2 overflow-x-hidden">
      <div>
        <Link to="/home">
          <img src={Logo} width={40} alt="Logo" />
        </Link>
      </div>

      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {ismenuOpen ? (
          <IoClose size={30} />
        ) : (
          <GiHamburgerMenu size={30} color="white" />
        )}
      </div>

      <div className="hidden lg:flex flex-row gap-6">
        {["Home", "Products", "Cart", "Account"].map((item, index) => {
          const links = ["/home", "/products", "/cart", "/account"];
          const icons = [
            <AiFillHome size={18} key="home" />,
            <FaClipboardList size={18} key="products" />,
            <FaCartShopping size={18} key="cart" />,
            <MdAccountCircle size={20} key="account" />,
          ];
          return (
            <Link
              to={links[index]}
              key={index}
              className="flex flex-col items-center justify-center relative ms-10 font-general text-xs uppercase text-white after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black cursor-pointer"
            >
              <div>{item}</div>
              <div className="hidden lg:block">{icons[index]}</div>
            </Link>
          );
        })}
      </div>

      {ismenuOpen && (
        <div className="fixed inset-0 bg-white z-3200 flex flex-col items-center justify-center gap-10 lg:hidden">
          <IoClose
            size={30}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
          <Link
            to="/home"
            className="text-lg font-bold uppercase cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-lg font-bold uppercase cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-lg font-bold uppercase cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Cart
          </Link>
          <Link
            to="/account"
            className="text-lg font-bold uppercase cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Account
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
