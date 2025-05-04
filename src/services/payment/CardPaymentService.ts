
import { sendBookingEmail } from "@/functions/create-payment";

export class CardPaymentService {
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
      const { url } = await createCheckoutSession(
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
}

// Import from Stripe integration functions
import { createCheckoutSession } from "@/functions/create-payment";
