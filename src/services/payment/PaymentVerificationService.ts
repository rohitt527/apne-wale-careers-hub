
import { verifyUpiPayment, sendBookingEmail } from "@/functions/create-payment";

export class PaymentVerificationService {
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
}
