/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TsParticles from "./TsParticles";

const PaymentConfirmModal = ({ closeConfirmModal }) => {
  const navigate = useNavigate();

  const handleBackToShopping = () => {
    toast.info("Returning to checkout...");
    closeConfirmModal();
    navigate("/home");
  };

  return (
    <div>
      <TsParticles />
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="relative p-6 max-w-sm w-full mx-auto bg-white rounded-lg shadow-lg border">
          <h2 className="text-xl font-bold text-center mb-4">Thank You</h2>
          <p className="text-sm text-center mb-6">
            Your payment has been successfully processed.
          </p>
          <div className="flex justify-around">
            <button
              onClick={handleBackToShopping}
              className="bg-red-500 text-white py-2 px-4 rounded-md font-medium hover:bg-red-600"
            >
              Back To Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmModal;
