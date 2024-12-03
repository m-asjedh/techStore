import { IoTrashBinSharp } from "react-icons/io5";
import Button from "./Button";
import { FcOk } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AddCart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleCheckout = () => {
    navigate(`/checkout`);
  };

  const handleRemoveFromCart = (id) => {
    toast.error("Product removed from cart");
    removeFromCart(id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between items-center border-b pb-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <div>
                  <p className="text-lg font-medium">{item.productName}</p>
                  <p className="text-sm text-gray-500">Model: {item.model}</p>
                </div>
              </div>
              <div className="text-center sm:text-left sm:ml-4">
                <p className="text-lg font-medium">
                  {item.quantity} x LKR{item.price}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Button
                    title="-"
                    containerClass="bg-gray-300 px-2 rounded hover:bg-gray-400"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  />
                  <span>{item.quantity}</span>
                  <Button
                    title="+"
                    containerClass="bg-gray-300 px-2 rounded hover:bg-gray-400"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  />
                </div>
              </div>
              <div className="text-center sm:text-right sm:ml-4">
                <p className="text-xl font-bold text-green-500">
                  LKR{item.price * item.quantity}
                </p>
                <Button
                  title="Remove"
                  containerClass="bg-red-500 hover:bg-red-600 text-sm"
                  leftIcon={<IoTrashBinSharp />}
                  onClick={() => handleRemoveFromCart(item.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {cart.length > 0 && (
        <>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Subtotal</p>
              <p className="text-lg font-bold">LKR{totalPrice}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Shipping</p>
              <p className="text-lg font-bold">Free</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold text-green-500">
                LKR{totalPrice}
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleCheckout}
                title="Proceed to Checkout"
                containerClass="bg-blue-300 hover:bg-blue-600 text-sm"
                rightIcon={<FcOk />}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddCart;
