import { useNavigate, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import Button from "./Button";
import SimilarProducts from "./SimilarProducts";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import products from "../utils/data/products";
import { useCart } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (item) => {
    toast.success("Product Added to Cart");
    addToCart({ ...item, quantity });
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleBuyNow = () => {
    navigate(`/checkout`);
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <div className="flex flex-col md:flex-row gap-6 p-6 mt-10">
          <div className="flex flex-col w-full md:w-1/2 gap-4 cursor-pointer">
            <img
              src={product.image}
              alt={product.productName}
              className="bg-gray-300 w-full h-[350px] object-contain rounded-lg shadow-xl"
            />
            <div className="flex gap-4 justify-center">
              <img
                src={product.image}
                alt={`${product.productName} 1`}
                className="bg-gray-300 w-24 h-24 object-cover rounded-lg shadow-md border-4 border-black"
              />
              <img
                src={product.image}
                alt={`${product.productName} 2`}
                className="bg-gray-300 w-24 h-24 object-cover rounded-lg shadow-md border-4 border-black"
              />
              <img
                src={product.image}
                alt={`${product.productName} 3`}
                className="bg-gray-300 w-24 h-24 object-cover rounded-md shadow-md border-4 border-black"
              />
            </div>
          </div>

          <div className=" flex flex-col w-full md:w-1/2 gap-4">
            <h1 className="text-2xl font-semibold">{product.productName}</h1>
            <p className="text-yellow-500">
              ⭐⭐⭐⭐⭐ ({product.rating || "4.5"})
            </p>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-xl font-bold text-green-600">{product.price}</p>

            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-semibold">Quantity:</span>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 px-2 py-1 border rounded-md text-center"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            <div className="flex gap-4 mt-4">
              <Button
                title="Add Cart"
                containerClass="!bg-blue-500 text-white px-3 py-1 rounded-md !hover:bg-blue-600 !transition"
                leftIcon={<FaCartPlus />}
                onClick={() => handleAddToCart(product)}
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
        <SimilarProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
