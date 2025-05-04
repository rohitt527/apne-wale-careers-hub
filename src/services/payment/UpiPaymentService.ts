
export class UpiPaymentService {
  static handleUpiApp(app: 'phonepe' | 'paytm', upiId: string, servicePrice: string | null, serviceName: string | null) {
    // Deep linking to respective UPI apps
    const upiLink = app === 'phonepe' 
      ? `phonepe://pay?pa=${upiId}&pn=Service&am=${servicePrice}&cu=INR&tn=Payment for ${serviceName}`
      : `paytmmp://pay?pa=${upiId}&pn=Service&am=${servicePrice}&cu=INR&tn=Payment for ${serviceName}`;
    
    // Try to open the app, if it fails (desktop or app not installed), show fallback
    window.location.href = upiLink;
  }
}
