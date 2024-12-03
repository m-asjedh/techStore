/* eslint-disable react/prop-types */
import Button from "./Button";
import { FaCartPlus, FaGratipay } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";
import "./styles/ProductCardStyles.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ReactPaginateComponent from "./ReactPaginateComponent";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(0);

  const productsPerPage = 6;
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    VanillaTilt.init(boxes, {
      max: 10,
      speed: 200,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 500,
      transition: true,
    });

    return () => {
      boxes.forEach((box) => box.vanillaTilt?.destroy());
    };
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleBuyNow = () => {
    navigate(`/checkout`);
  };

  const handleAddToCart = (item) => {
    toast.success("Product Added to Cart");
    addToCart({ ...item, quantity: 1 });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 overflow-x-hidden ">
        {currentProducts.map((item) => (
          <div key={item.id} className="mx-auto my-8 w-64 cursor-pointer  ">
            <div className=" shadow-2xl rounded-lg overflow-hidden relative box text-black ">
              <div className="absolute top-3 right-3  text-lg ">
                <FaGratipay />
              </div>

              <div className="p-3">
                <h3 className="text-lg font-semibold  text-center mb-2">
                  {item.productName}
                </h3>
              </div>

              <div className="relative">
                <img
                  src={item.image}
                  alt="Airpods 3"
                  className="w-full h-24 object-contain mx-auto"
                  onClick={() => handleProductClick(item.id)}
                />
              </div>

              <div className="text-center mt-2">
                <div className="text-md font-medium">LKR{item.price}</div>
              </div>

              <div className="p-3 flex justify-between text-xs">
                <div className="flex items-center gap-1">
                  <IoStarSharp className="text-yellow-400" />
                  <span>4.5</span>
                </div>
                <span>5.1K Sold</span>
              </div>

              <div className="p-3">
                <div className="flex gap-3">
                  <Button
                    title="Add Cart"
                    containerClass="!bg-blue-500 text-white px-3 py-1 rounded-md !hover:bg-blue-600 !transition"
                    leftIcon={<FaCartPlus />}
                    onClick={() => handleAddToCart(item)}
                  />
                  <Button
                    title="Buy Now"
                    containerClass="!bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                    rightIcon={<FaMoneyCheckAlt />}
                    onClick={handleBuyNow}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginateComponent
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </>
  );
};

export default ProductCard;
