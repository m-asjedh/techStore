/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentCloseModal = ({ closeConfirmationModal }) => {
  const navigate = useNavigate();

  const handleYes = () => {
    toast.success("Payment cancelled. Redirecting to home...");
    closeConfirmationModal();
    navigate("/home");
  };

  const handleNo = () => {
    toast.info("Returning to checkout...");
    closeConfirmationModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative p-6 max-w-sm w-full mx-auto bg-white rounded-lg shadow-lg border">
        <h2 className="text-xl font-bold text-center mb-4">Cancel Payment</h2>
        <p className="text-sm text-center mb-6">
          Are you sure you want to cancel the payment and leave?
        </p>
        <div className="flex justify-around">
          <button
            onClick={handleYes}
            className="bg-red-500 text-white py-2 px-4 rounded-md font-medium hover:bg-red-600"
          >
            Yes, Cancel
          </button>
          <button
            onClick={handleNo}
            className="bg-green-500 text-white py-2 px-4 rounded-md font-medium hover:bg-green-600"
          >
            No, Stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCloseModal;
