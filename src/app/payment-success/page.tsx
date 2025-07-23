// src/app/payment-success/page.tsx
import React from 'react';

const PaymentSuccessPage: React.FC = () => {
  // You could optionally parse the session_id from URL query params here
  // For example: const router = useRouter(); const sessionId = router.query.session_id;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-green-800 p-4">
      <h1 className="text-4xl font-bold mb-4">Payment Successful! 🎉</h1>
      <p className="text-lg text-center">Thank you for your purchase. Your Pro Plan is now active!</p>
      <a href="/" className="mt-8 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-200">
        Go back to Omniplex
      </a>
    </div>
  );
};

export default PaymentSuccessPage;