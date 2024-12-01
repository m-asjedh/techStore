/* eslint-disable react/prop-types */
import { useState } from "react";
const CheckoutModal = ({ closeModal, openConfirmModal }) => {
  const [paymentMethod, setPaymentMethod] = useState("visa");

  return (
    <div className=" flex justify-center items-center bg-black min-h-screen bg-opacity-50 z-50">
      <div className="relative p-6  w-full mx-10 bg-white rounded-lg shadow-lg border">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setPaymentMethod("visa")}
            className={`py-2 px-4 rounded-md font-medium ${
              paymentMethod === "visa"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            VISA
          </button>
          <button
            onClick={() => setPaymentMethod("paypal")}
            className={`py-2 px-4 rounded-md font-medium ${
              paymentMethod === "paypal"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            PayPal
          </button>
        </div>

        {paymentMethod === "visa" ? (
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Credit Card Details
            </h3>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Card No</label>
              <input
                type="text"
                placeholder="Enter your card number"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-2">PayPal Details</h3>
            <p className="text-sm mb-4">
              You will be redirected to PayPal to complete your purchase.
            </p>
          </div>
        )}

        <button
          onClick={openConfirmModal}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
