// src/components/UpgradeButton.tsx
'use client'; // This directive is necessary for client-side components in Next.js App Router

import React from 'react';
// import { loadStripe } from '@stripe/stripe-js'; // Not strictly needed for direct window.location.href redirect

const UpgradeButton: React.FC = () => {
  const handleUpgrade = async () => {
    try {
      // Call your backend API route to create the Checkout Session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ quantity: 1 }), // You could pass dynamic data here if needed
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to initiate payment.');
      }

      const { url } = await response.json(); // Get the Stripe Checkout Session URL
      if (url) {
        // Redirect the user to the Stripe Checkout page
        window.location.href = url;
      }
    } catch (error: any) {
      console.error('Error during Stripe checkout:', error);
      alert(`Payment initiation failed: ${error.message}`);
    }
  };

  return (
    <button
      onClick={handleUpgrade}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
    >
      Upgrade to Pro Plan ($10)
    </button>
  );
};

export default UpgradeButton;