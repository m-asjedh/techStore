import { useState } from "react";
import { ToastContainer } from "react-toastify";
import CheckoutModal from "../components/CheckoutModal";
import PaymentConfirmModal from "../components/PaymentConfirmModal";
import PaymentCloseModal from "../components/PaymentCloseModal";

const Checkout = () => {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(true);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isPaymentConfirmModalOpen, setIsPaymentConfirmModalOpen] =
    useState(false);

  const handleOpenCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    handleOpenCheckoutModal();
  };

  const handleOpenPaymentConfirmModal = () => {
    setIsCheckoutModalOpen(false);
    setIsPaymentConfirmModalOpen(true);
  };

  const handleClosePaymentConfirmModal = () => {
    setIsPaymentConfirmModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div>
      <ToastContainer />
      {isCheckoutModalOpen && (
        <CheckoutModal
          closeModal={handleCloseCheckoutModal}
          openConfirmModal={handleOpenPaymentConfirmModal}
        />
      )}
      {isConfirmationModalOpen && (
        <PaymentCloseModal
          closeConfirmationModal={handleCloseConfirmationModal}
        />
      )}
      {isPaymentConfirmModalOpen && (
        <PaymentConfirmModal
          closeConfirmModal={handleClosePaymentConfirmModal}
        />
      )}
    </div>
  );
};

export default Checkout;
