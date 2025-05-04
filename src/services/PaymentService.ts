import { loadStripe } from "@stripe/stripe-js";
import {
  createCheckoutSession,
  verifyUpiPayment,
  getUpiDetails,
  sendBookingEmail,
  createRazorpayOrder,
  getRazorpayKeyId
} from "@/functions/create-payment";

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

export class PaymentService {
  static async handleCardPayment(
    serviceId: string | null,
    serviceName: string | null,
    servicePrice: string | null,
    bookingDate: string | null,
    bookingTime: string | null,
    userName: string | null,
    userEmail: string | null,
    userPhone: string | null,
    companyName: string,
    examPattern: string,
    duration: string,
    notes: string,
    onSuccess: (message: string) => void,
    onError: (message: string) => void
  ) {
    try {
      const { sessionId, url } = await createCheckoutSession(
        "price_1Ow0VdLJZfxVtt9CluDBpZEU", // Replace with actual price ID
        `${window.location.origin}/payment-success?serviceName=${encodeURIComponent(serviceName || "")}&date=${encodeURIComponent(bookingDate || "")}&time=${encodeURIComponent(bookingTime || "")}`, 
        `${window.location.origin}/payment?serviceId=${serviceId}&serviceName=${encodeURIComponent(serviceName || "")}&servicePrice=${servicePrice}&date=${encodeURIComponent(bookingDate || "")}&time=${encodeURIComponent(bookingTime || "")}&name=${encodeURIComponent(userName || "")}&email=${encodeURIComponent(userEmail || "")}&phone=${encodeURIComponent(userPhone || "")}&companyName=${encodeURIComponent(companyName)}&examPattern=${encodeURIComponent(examPattern)}&duration=${encodeURIComponent(duration)}&notes=${encodeURIComponent(notes)}`
      );
      
      if (url) {
        // Before redirecting, send the booking email
        try {
          await sendBookingEmail({
            service: serviceName || "",
            date: bookingDate || "",
            time: bookingTime || "",
            name: userName || "",
            email: userEmail || "",
            phone: userPhone || "",
            companyName,
            examPattern,
            duration,
            notes,
            price: Number(servicePrice),
            paymentMethod: "card"
          });
          
          onSuccess("You'll be redirected to the secure payment page.");
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          onError("Payment processing will continue, but there was an issue preparing the confirmation email.");
        }
        
        window.location.href = url;
      } else {
        throw new Error("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Payment error:", error);
      onError("There was an error processing your card payment. Please try again.");
    }
  }
  
  static async handleRazorpayPayment(
    serviceId: string | null,
    serviceName: string | null,
    servicePrice: string | null,
    bookingDate: string | null,
    bookingTime: string | null,
    userName: string | null,
    userEmail: string | null,
    userPhone: string | null,
    companyName: string,
    examPattern: string,
    duration: string,
    notes: string,
    onSuccess: (message: string) => void,
    onError: (message: string) => void
  ) {
    try {
      // Check if Razorpay is loaded
      if (!(window as any).Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        document.body.appendChild(script);
        
        // Wait for script to load
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }
      
      // Create a Razorpay order
      const price = Number(servicePrice) || 0;
      const order = await createRazorpayOrder(
        price, 
        serviceName || "Service Booking", 
        userName || "Customer",
        userEmail || "customer@example.com"
      );
      
      const options = {
        key: getRazorpayKeyId(),
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
        currency: "INR",
        name: "ApneWale Careers",
        description: serviceName || "Service Booking",
        image: "/logo.png",
        order_id: order.id,
        handler: async function (response: any) {
          // On successful payment
          try {
            // Send booking confirmation email
            await sendBookingEmail({
              service: serviceName || "",
              date: bookingDate || "",
              time: bookingTime || "",
              name: userName || "",
              email: userEmail || "",
              phone: userPhone || "",
              companyName,
              examPattern,
              duration,
              notes,
              price: Number(servicePrice),
              paymentMethod: "Razorpay"
            });
            
            // Redirect to success page
            window.location.href = `${window.location.origin}/payment-success?serviceName=${encodeURIComponent(serviceName || "")}&date=${encodeURIComponent(bookingDate || "")}&time=${encodeURIComponent(bookingTime || "")}`;
          } catch (error) {
            console.error("Error processing successful payment:", error);
            onError("Payment succeeded but there was an issue with confirmation. Please contact support.");
          }
        },
        prefill: {
          name: userName || "",
          email: userEmail || "",
          contact: userPhone || ""
        },
        notes: {
          service_id: serviceId || "",
          booking_date: bookingDate || "",
          booking_time: bookingTime || "",
        },
        theme: {
          color: "#E53935"
        }
      };
      
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
      
      onSuccess("Opening Razorpay payment gateway...");
      
    } catch (error) {
      console.error("Razorpay error:", error);
      onError("There was an error processing your payment. Please try again.");
    }
  }
  
  static handleUpiApp(app: 'phonepe' | 'paytm', upiId: string, servicePrice: string | null, serviceName: string | null) {
    // Deep linking to respective UPI apps
    const upiLink = app === 'phonepe' 
      ? `phonepe://pay?pa=${upiId}&pn=Service&am=${servicePrice}&cu=INR&tn=Payment for ${serviceName}`
      : `paytmmp://pay?pa=${upiId}&pn=Service&am=${servicePrice}&cu=INR&tn=Payment for ${serviceName}`;
    
    // Try to open the app, if it fails (desktop or app not installed), show fallback
    window.location.href = upiLink;
  }
  
  static async verifyPayment(
    transactionId: string,
    serviceName: string | null,
    bookingDate: string | null,
    bookingTime: string | null,
    userName: string | null,
    userEmail: string | null,
    userPhone: string | null,
    companyName: string,
    examPattern: string,
    duration: string,
    notes: string,
    servicePrice: string | null,
    paymentMethod: 'card' | 'phonepe' | 'paytm' | 'qrcode' | 'razorpay',
    onSuccess: () => void,
    onError: (message: string) => void
  ) {
    try {
      const result = await verifyUpiPayment(transactionId);
      
      if (result.success) {
        // Send booking confirmation email
        try {
          await sendBookingEmail({
            service: serviceName || "",
            date: bookingDate || "",
            time: bookingTime || "",
            name: userName || "",
            email: userEmail || "",
            phone: userPhone || "",
            companyName,
            examPattern,
            duration,
            notes,
            price: Number(servicePrice),
            paymentMethod: paymentMethod === 'qrcode' ? 'QR Code UPI' : paymentMethod
          });
          
          onSuccess();
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          // Still proceed with success even if email fails
          onSuccess();
        }
        
        return true;
      } else {
        onError(result.message);
        return false;
      }
    } catch (error) {
      console.error("Verification error:", error);
      onError("There was an error verifying your payment. Please try again.");
      return false;
    }
  }
  
  static async getUpiDetails() {
    return getUpiDetails();
  }
}
