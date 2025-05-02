
import Stripe from 'stripe';

// Initialize Stripe with the secret key
// Using import.meta.env instead of process.env for Vite compatibility
const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY || '');

// Bank account details - kept in backend for security
const bankDetails = {
  bankName: "CANARA BANK",
  accountNumber: "110132761669",
  ifscCode: "CNRB000608",
  upiId: "yourhelper1@ybl" // Added UPI ID
};

// QR code image path
const qrCodePath = "/lovable-uploads/3be58449-197e-4cfb-9455-d0852e44a445.png";

export async function createPaymentIntent(amount: number, currency: string = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'], // Using only card as payment method
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}

export async function createCheckoutSession(priceId: string, successUrl: string, cancelUrl: string) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, // Use a predefined price ID from Stripe
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return { sessionId: session.id, url: session.url };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

// Function to send email notification about booking
export async function sendBookingEmail(bookingDetails: {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  examPattern?: string;
  duration?: string;
  notes?: string;
  price: number;
  paymentMethod: string;
}) {
  try {
    const subject = `New Booking: ${bookingDetails.service}`;
    const body = `
New booking details:

Service: ${bookingDetails.service}
Date: ${bookingDetails.date}
Time: ${bookingDetails.time}
Name: ${bookingDetails.name}
Email: ${bookingDetails.email}
Phone: ${bookingDetails.phone}
${bookingDetails.companyName ? `Company Name: ${bookingDetails.companyName}` : ''}
${bookingDetails.examPattern ? `Exam Pattern: ${bookingDetails.examPattern}` : ''}
${bookingDetails.duration ? `Test Duration: ${bookingDetails.duration}` : ''}
${bookingDetails.notes ? `Additional Notes: ${bookingDetails.notes}` : ''}

Payment Method: ${bookingDetails.paymentMethod}
Total Amount: $${bookingDetails.price}

---
Payment received in:
Bank Name: ${bankDetails.bankName}
Account Number: ${bankDetails.accountNumber}
IFSC Code: ${bankDetails.ifscCode}
UPI ID: ${bankDetails.upiId}
    `;

    // In a real implementation, you would use an email service like SendGrid, Mailgun, etc.
    // For now, we'll return the email data that can be used by the front end to open the mail client
    return {
      to: "apnewalecoders@gmail.com",
      subject: encodeURIComponent(subject),
      body: encodeURIComponent(body),
    };
  } catch (error) {
    console.error('Error preparing email:', error);
    throw error;
  }
}

// Function to verify UPI payment status (mock implementation)
export async function verifyUpiPayment(transactionId: string): Promise<{success: boolean; message: string}> {
  try {
    // In a real implementation, you would call a payment gateway API to verify the payment
    // For demo purposes, we'll simulate a success response for even transaction IDs and failure for odd
    const isSuccess = Math.random() > 0.3; // 70% success rate for demo
    
    if (isSuccess) {
      return { 
        success: true, 
        message: "Payment verified successfully!" 
      };
    } else {
      return { 
        success: false, 
        message: "Payment verification failed. Please try again or choose another payment method." 
      };
    }
  } catch (error) {
    console.error('Error verifying UPI payment:', error);
    throw error;
  }
}

// Function to get UPI details for payments
export function getUpiDetails() {
  return {
    upiId: bankDetails.upiId,
    qrCodePath: qrCodePath
  };
}

// Function to get bank account information for manual transfers
export function getBankDetails() {
  return bankDetails;
}
