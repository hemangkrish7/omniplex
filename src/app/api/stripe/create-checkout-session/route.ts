// src/app/api/stripe/create-checkout-session/route.ts

export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import Stripe from 'stripe';
// ...

// Initialize Stripe with your Secret Key.
// The '!' tells TypeScript that process.env.STRIPE_SECRET_KEY will not be undefined at runtime.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
apiVersion: '2025-06-30.basil', // Use the exact version string from the error message // Changed the API version string
});



export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  try {
    // You can optionally pass data from your frontend, e.g., req.json()
    // const { quantity } = await req.json(); // If you want to dynamically set quantity

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          // Define the product details directly. For this assignment, we use fixed details.
          price_data: {
            currency: 'usd', // Must match the currency set in your Stripe product
            product_data: {
              name: 'Pro Plan',
              description: 'Access to advanced features in Omniplex',
            },
            unit_amount: 1000, // $10.00 (amount in cents: 10 * 100)
          },
          quantity: 1,
        },
        // If you had a Price ID from Stripe (e.g., price_123XYZ)
        // you could use: { price: 'price_123XYZ', quantity: 1 }
      ],
      mode: 'payment', // For one-time payments
      success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-cancelled`,
    });

    // Return the Checkout Session URL to the frontend
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe Checkout Session creation failed:', error);
    return new NextResponse(`Error: ${error.message}`, { status: 500 });
  }
}
