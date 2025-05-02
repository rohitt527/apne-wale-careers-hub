import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, CheckCircle, CreditCard, ArrowLeft, ArrowRight, Phone, Mail, BankTransfer } from "lucide-react";
import { createCheckoutSession, sendBookingEmail, getBankDetails } from "@/functions/create-payment";

// Define services with detailed descriptions and features
const services = [
  { 
    id: 1, 
    name: "Technical Assessment Support", 
    price: 99,
    description: "Get expert guidance for your technical assessments and screening rounds with personalized coaching sessions.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 2, 
    name: "Career Guidance", 
    price: 79,
    description: "Personalized advice on career paths, skill development, and job hunting strategies.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 3, 
    name: "Mock Interview", 
    price: 129,
    description: "Practice with industry experts who provide real-time feedback to improve your interview skills.",
    image: "https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 4, 
    name: "Resume Building", 
    price: 69,
    description: "Expert help with crafting an ATS-friendly resume that highlights your strengths.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 5, 
    name: "Technical Interview Prep", 
    price: 149,
    description: "Comprehensive preparation for technical interviews with focus on algorithms and system design.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 6, 
    name: "Project Help", 
    price: 119,
    description: "Expert assistance with your coding projects, from architecture to implementation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
];

// Available time slots
const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "12:00 PM", "01:00 PM", "02:00 PM", 
  "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM"
];

// Step indicators component for the booking process
const BookingSteps = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex items-center justify-center mb-8 w-full">
      <div className="flex w-full max-w-3xl">
        <div className={`flex-1 text-center ${currentStep >= 1 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">1</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Your Details</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 2 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">2</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Schedule</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 3 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 3 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">3</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Payment</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 4 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 4 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">4</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Confirmation</span>
        </div>
      </div>
    </div>
  );
};

const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [examPattern, setExamPattern] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const { toast } = useToast();
  const bankDetails = getBankDetails();

  // Get service ID from URL parameter
  const serviceParam = searchParams.get('service');
  const serviceId = serviceParam ? parseInt(serviceParam) : null;
  const selectedService = services.find(s => s.id === serviceId);

  // Redirect to services page if no service is selected
  useEffect(() => {
    if (!selectedService) {
      navigate('/services');
      toast({
        title: "No service selected",
        description: "Please select a service first.",
        variant: "destructive",
      });
    }
  }, [selectedService, navigate, toast]);

  // Check for success parameter in URL when returning from Stripe
  useEffect(() => {
    const success = searchParams.get('success');
    
    if (success === 'true') {
      setCurrentStep(4);
      setIsConfirmed(true);
    }
  }, [searchParams]);

  const handleNextStep = async () => {
    if (currentStep === 1) {
      // Validate personal details
      if (!name || !email || !phone) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields before proceeding.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(2);
    } 
    else if (currentStep === 2) {
      // Validate date and time
      if (!selectedDate || !selectedTime) {
        toast({
          title: "Missing information",
          description: "Please select a date and time for your session.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(3);
    }
    else if (currentStep === 3) {
      if (paymentMethod === 'bank') {
        // For bank transfers, skip the Stripe payment and go straight to confirmation
        setCurrentStep(4);
      } else {
        // Process payment with Stripe
        setPaymentProcessing(true);
        try {
          if (!selectedService) {
            throw new Error("Service not found");
          }
          
          const amount = selectedService.price * 100; // Convert to cents
          const { sessionId, url } = await createCheckoutSession(
            "price_1Ow0VdLJZfxVtt9CluDBpZEU", // Replace with actual price ID
            `${window.location.origin}/booking?success=true`, // Success URL
            `${window.location.origin}/booking` // Cancel URL
          );
          
          if (url) {
            window.location.href = url;
          } else {
            throw new Error("Failed to create checkout session");
          }
        } catch (error) {
          console.error("Payment error:", error);
          toast({
            title: "Payment error",
            description: "There was an error processing your payment. Please try again or use bank transfer instead.",
            variant: "destructive",
          });
          setPaymentProcessing(false);
        }
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalConfirmation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a date and time.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare booking details for email
      const bookingDetails = {
        service: selectedService.name,
        date: format(selectedDate, 'PP'),
        time: selectedTime,
        name,
        email,
        phone,
        companyName,
        examPattern,
        duration,
        notes,
        price: selectedService.price
      };
      
      // Generate email data
      const emailData = await sendBookingEmail(bookingDetails);
      
      // Open email client with booking details
      window.open(`mailto:${emailData.to}?subject=${emailData.subject}&body=${emailData.body}`);

      toast({
        title: "Booking confirmed!",
        description: "Please check your email client to send the booking details.",
      });
      
      setIsConfirmed(true);
      setLoading(false);
      
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking failed",
        description: "There was a problem processing your booking. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const isDateDisabled = (date: Date) => {
    // Disable dates in the past
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  // Show loading spinner or redirect if no service is selected
  if (!selectedService) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Your Details</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                <Input
                  id="company"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="examPattern" className="block text-sm font-medium mb-1">Exam Pattern (if applicable)</label>
                <Input
                  id="examPattern"
                  type="text"
                  value={examPattern}
                  onChange={(e) => setExamPattern(e.target.value)}
                  className="w-full"
                  placeholder="e.g., DSA, System Design, Behavioral"
                />
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium mb-1">Test Duration (if applicable)</label>
                <Input
                  id="duration"
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full"
                  placeholder="e.g., 2 hours, 45 minutes"
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-1">Additional Notes</label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full"
                  rows={4}
                  placeholder="Tell us about your goals for this session..."
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
            <div className="mb-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, 'PP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={isDateDisabled}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {selectedDate && (
              <div>
                <h4 className="text-sm font-medium mb-3">Available Time Slots</h4>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`justify-start ${
                        selectedTime === time ? "bg-brand-red hover:bg-red-700 text-white" : ""
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 3:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Session Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span>{selectedService.name}</span>
                </div>
                {selectedDate && (
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{format(selectedDate, 'PP')}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Name:</span>
                  <span>{name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span>{email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span>{phone}</span>
                </div>
                {companyName && (
                  <div className="flex justify-between">
                    <span>Company:</span>
                    <span>{companyName}</span>
                  </div>
                )}
                {examPattern && (
                  <div className="flex justify-between">
                    <span>Exam Pattern:</span>
                    <span>{examPattern}</span>
                  </div>
                )}
                {duration && (
                  <div className="flex justify-between">
                    <span>Test Duration:</span>
                    <span>{duration}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span>${selectedService.price}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-semibold mb-4">Complete your Payment</h3>
              <p className="mb-6 text-gray-600">
                Please select your preferred payment method below:
              </p>
              
              <div className="flex flex-col gap-4 mb-6">
                <div 
                  className={`flex items-center p-4 rounded cursor-pointer border-2 ${paymentMethod === 'card' ? 'border-brand-red bg-red-50' : 'border-gray-200'}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="h-5 w-5 rounded-full border-2 mr-3 flex items-center justify-center">
                    {paymentMethod === 'card' && <div className="h-3 w-3 rounded-full bg-brand-red"></div>}
                  </div>
                  <CreditCard className="h-6 w-6 text-gray-600 mr-3" />
                  <span className="font-medium">Credit/Debit Card</span>
                </div>
                
                <div 
                  className={`flex items-center p-4 rounded cursor-pointer border-2 ${paymentMethod === 'bank' ? 'border-brand-red bg-red-50' : 'border-gray-200'}`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <div className="h-5 w-5 rounded-full border-2 mr-3 flex items-center justify-center">
                    {paymentMethod === 'bank' && <div className="h-3 w-3 rounded-full bg-brand-red"></div>}
                  </div>
                  <BankTransfer className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="font-medium">Bank Transfer</span>
                </div>
              </div>
              
              {paymentMethod === 'bank' && (
                <div className="mb-6 p-4 bg-blue-50 rounded border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Bank Transfer Details</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Bank Name:</span>
                      <span>{bankDetails.bankName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Account Number:</span>
                      <span>{bankDetails.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">IFSC Code:</span>
                      <span>{bankDetails.ifscCode}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-blue-700">
                    Please include your name and service in the payment reference.
                  </p>
                </div>
              )}
              
              <p className="text-sm text-gray-600 mb-2">
                <Mail className="inline h-4 w-4 mr-1" />
                Booking confirmation will be automatically sent to apnewalecoders@gmail.com
              </p>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="max-w-3xl mx-auto text-center">
            {isConfirmed ? (
              <div className="bg-green-50 p-8 rounded-lg">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-700">Booking Confirmed!</h3>
                <p className="text-lg mb-6">
                  Thank you for booking with us! We've sent the details to your email client.
                </p>
                <p className="mb-6">
                  Your {selectedService.name} session is scheduled for:
                  <br />
                  <span className="font-semibold">{selectedDate ? format(selectedDate, 'PPP') : ''} at {selectedTime}</span>
                </p>
                {paymentMethod === 'bank' && (
                  <div className="mb-6 p-4 bg-blue-50 rounded border border-blue-200 text-left">
                    <h4 className="font-medium text-blue-800 mb-2">Please complete your payment via bank transfer:</h4>
                    <div className="space-y-2 text-gray-700">
                      <div>
                        <span className="font-medium">Bank Name: </span>
                        <span>{bankDetails.bankName}</span>
                      </div>
                      <div>
                        <span className="font-medium">Account Number: </span>
                        <span>{bankDetails.accountNumber}</span>
                      </div>
                      <div>
                        <span className="font-medium">IFSC Code: </span>
                        <span>{bankDetails.ifscCode}</span>
                      </div>
                    </div>
                  </div>
                )}
                <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Confirm Your Booking</h3>
                
                <div className="mb-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Service</p>
                      <p className="font-medium">{selectedService.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="font-medium">{selectedDate ? format(selectedDate, 'PP') : ''} at {selectedTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{email}</p>
                    </div>
                  </div>
                </div>

                {paymentMethod === 'bank' && (
                  <div className="mb-6 p-4 bg-blue-50 rounded border border-blue-200 text-left">
                    <h4 className="font-medium text-blue-800 mb-2">Payment Method: Bank Transfer</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      After confirming your booking, please transfer the payment using these details:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <div>
                        <span className="font-medium">Bank Name: </span>
                        <span>{bankDetails.bankName}</span>
                      </div>
                      <div>
                        <span className="font-medium">Account Number: </span>
                        <span>{bankDetails.accountNumber}</span>
                      </div>
                      <div>
                        <span className="font-medium">IFSC Code: </span>
                        <span>{bankDetails.ifscCode}</span>
                      </div>
                    </div>
                  </div>
                )}

                <p className="mb-8 text-gray-600">
                  By confirming, you agree to our terms of service and cancellation policy.
                </p>

                <Button 
                  onClick={handleFinalConfirmation}
                  size="lg" 
                  className="bg-brand-red hover:bg-red-700 text-white w-full md:w-auto" 
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Confirm Booking"}
                </Button>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Layout>
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-xl mb-3">Book {selectedService.name}</h1>
            <p className="text-lg text-gray-300 mb-6">
              {selectedService.description}
            </p>
            <div className="bg-brand-red/20 p-4 rounded-md inline-block">
              <span className="text-lg font-semibold">${selectedService.price}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <BookingSteps currentStep={currentStep} />
          
          <Card className="mb-8">
            <CardContent className="p-6">
              {renderStepContent()}
            </CardContent>
          </Card>
          
          {!isConfirmed && currentStep !== 4 && (
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <Button 
                  onClick={handlePreviousStep} 
                  variant="outline"
                  disabled={loading || paymentProcessing}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}
              
              <Button 
                onClick={handleNextStep} 
                className="bg-brand-red hover:bg-red-700 text-white ml-auto flex items-center"
                disabled={loading || paymentProcessing}
              >
                {currentStep === 3 && paymentProcessing ? 
                  "Processing..." : 
                  <>
                    {currentStep === 3 ? "Proceed to Payment" : "Continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                }
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BookingFlow;
