
import { CardPaymentService } from "./payment/CardPaymentService";
import { RazorpayPaymentService } from "./payment/RazorpayPaymentService";
import { UpiPaymentService } from "./payment/UpiPaymentService";
import { PaymentVerificationService } from "./payment/PaymentVerificationService";
import { UpiDetailsService } from "./payment/UpiDetailsService";

// Main Payment Service orchestrates the other payment services
export class PaymentService {
  // Card payment handling
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
    return CardPaymentService.handleCardPayment(
      serviceId, serviceName, servicePrice, bookingDate, bookingTime, 
      userName, userEmail, userPhone, companyName, examPattern, 
      duration, notes, onSuccess, onError
    );
  }
  
  // Razorpay payment handling
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
    return RazorpayPaymentService.handleRazorpayPayment(
      serviceId, serviceName, servicePrice, bookingDate, bookingTime, 
      userName, userEmail, userPhone, companyName, examPattern, 
      duration, notes, onSuccess, onError
    );
  }
  
  // UPI app handling
  static handleUpiApp(app: 'phonepe' | 'paytm', upiId: string, servicePrice: string | null, serviceName: string | null) {
    return UpiPaymentService.handleUpiApp(app, upiId, servicePrice, serviceName);
  }
  
  // Payment verification
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
    return PaymentVerificationService.verifyPayment(
      transactionId, serviceName, bookingDate, bookingTime, userName,
      userEmail, userPhone, companyName, examPattern, duration, notes,
      servicePrice, paymentMethod, onSuccess, onError
    );
  }
  
  // UPI details retrieval
  static async getUpiDetails() {
    return UpiDetailsService.getUpiDetails();
  }
}
