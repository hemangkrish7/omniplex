// src/app/payment-cancelled/page.tsx
import React from 'react';

const PaymentCancelledPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-4">
      <h1 className="text-4xl font-bold mb-4">Payment Cancelled 😔</h1>
      <p className="text-lg text-center">Your payment was cancelled or failed. Please try again.</p>
      <a href="/" className="mt-8 px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200">
        Go back to Omniplex
      </a>
    </div>
  );
};

export default PaymentCancelledPage;