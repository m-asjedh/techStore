import { IoTrashBinSharp } from "react-icons/io5";
import image from "../assets/buds2.webp";
import Button from "./Button";
import { FcOk } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AddCart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate(`/checkout`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between items-center border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt="Product 1"
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <p className="text-lg font-medium">Wireless Earbuds</p>
              <p className="text-sm text-gray-500">Model: X1 Pro</p>
            </div>
          </div>
          <div className="text-center sm:text-left sm:ml-4">
            <p className="text-lg font-medium">2 x $99.99</p>
            <p className="text-sm text-gray-500">Quantity: 2</p>
          </div>
          <div className="text-center sm:text-right sm:ml-4">
            <p className="text-xl font-bold text-green-500">$199.98</p>
            <Button
              title="Remove"
              containerClass="bg-red-500 hover:bg-red-200 text-sm"
              leftIcon={<IoTrashBinSharp />}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between items-center border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt="Product 2"
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <p className="text-lg font-medium">Bluetooth Speaker</p>
              <p className="text-sm text-gray-500">Model: SoundMax</p>
            </div>
          </div>
          <div className="text-center sm:text-left sm:ml-4">
            <p className="text-lg font-medium">1 x $129.99</p>
            <p className="text-sm text-gray-500">Quantity: 1</p>
          </div>
          <div className="text-center sm:text-right sm:ml-4">
            <p className="text-xl font-bold text-green-500">$129.99</p>
            <Button
              title="Remove"
              containerClass="bg-red-500 hover:bg-red-200 text-sm"
              leftIcon={<IoTrashBinSharp />}
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Delivery Address</p>
            <p className="text-lg font-medium">No 01, Main Street</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-lg font-medium">+94111111</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-medium">Subtotal</p>
          <p className="text-lg font-bold">$329.97</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-medium">Shipping</p>
          <p className="text-lg font-bold">Free</p>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <p className="text-xl font-bold">Total</p>
          <p className="text-xl font-bold text-green-500">$329.97</p>
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
    </div>
  );
};

export default AddCart;
