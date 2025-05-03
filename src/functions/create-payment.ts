
import Stripe from 'stripe';

// Initialize Stripe with the secret key
// Using import.meta.env instead of process.env for Vite compatibility
const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY || '');

// Bank account details - kept in backend for security
const bankDetails = {
  bankName: "CANARA BANK",
  accountNumber: "110132761669",
  ifscCode: "CNRB000608",
  upiId: "yourhelper1@ybl" // UPI ID
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
    // In a real implementation, this would use a server-side email service
    // For demo purposes, we'll simulate sending an email
    
    console.log("Sending booking confirmation to:", bookingDetails.email);
    console.log("Sending booking notification to: apnewalecoders@gmail.com");
    console.log("Booking details:", bookingDetails);
    
    // In production, you would use a real email sending service like SendGrid, AWS SES, etc.
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: [bookingDetails.email, "apnewalecoders@gmail.com"],
      subject: `Booking Confirmation: ${bookingDetails.service}`,
      body: `
        Thank you for your booking!
        
        Service: ${bookingDetails.service}
        Date: ${bookingDetails.date}
        Time: ${bookingDetails.time}
        
        Payment Method: ${bookingDetails.paymentMethod}
        Amount: $${bookingDetails.price}
        
        We look forward to serving you!
      `
    });
    */
    
    return { success: true, message: "Email notification sent" };
  } catch (error) {
    console.error('Error sending email notification:', error);
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
