
import { sendBookingEmail, createRazorpayOrder, getRazorpayKeyId } from "@/functions/create-payment";

export class RazorpayPaymentService {
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
            
            // Show confirmation message
            alert("Booking Confirmed! A confirmation email has been sent to your email address.");
            
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
        },
        // Ensure automatic transfer to bank account
        modal: {
          ondismiss: function() {
            console.log('Payment popup closed without completing payment');
          }
        },
        // Add bank account details for transfer
        bank_account: {
          account_number: "110132761669",
          ifsc_code: "CNRB000608",
          beneficiary_name: "ApneWale Careers",
          account_type: "current"
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
}
