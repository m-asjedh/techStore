/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCcPaypal, FaCcVisa } from "react-icons/fa6";

const CheckoutModal = ({ closeModal, openConfirmModal }) => {
  const [paymentMethod, setPaymentMethod] = useState("visa");

  return (
    <div className="flex justify-center items-center bg-black min-h-screen bg-opacity-50 z-50">
      <div className="relative p-6 w-full mx-10 bg-white rounded-lg shadow-lg border">
        <div className="absolute top-2 right-2">
          <button title="Close" onClick={closeModal}>
            <IoMdCloseCircle />
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
        <div className="flex justify-around mb-6">
          <button onClick={() => setPaymentMethod("visa")} title="Visa">
            <FaCcVisa color="black" size={40} />
          </button>
          <button onClick={() => setPaymentMethod("paypal")} title="PayPal">
            <FaCcPaypal color="black" size={40} />
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

        <div className="flex justify-center">
          <button
            onClick={openConfirmModal}
            className="bg-blue-500 text-white  px-10 rounded-3xl "
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
