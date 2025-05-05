import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, CheckCircle, CreditCard } from "lucide-react";
import ServiceCard from "@/components/common/ServiceCard";
import { useSearchParams } from "react-router-dom";

// Add imports at the top
import { LoginModal } from "@/components/auth/LoginModal";
import { useAuth } from "@/contexts/AuthContext";

// Services available for booking with detailed descriptions and features
const services = [
  { 
    id: 1, 
    name: "Technical Assessment Support", 
    price: 9,
    description: "Get expert guidance for your technical assessments and screening rounds with personalized coaching sessions.",
    features: [
      "Code Review & Feedback",
      "Algorithm Optimization",
      "System Design Guidance",
      "Take-home Project Help"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 2, 
    name: "Career Guidance", 
    price: 9,
    description: "Personalized advice on career paths, skill development, and job hunting strategies.",
    features: [
      "Resume & LinkedIn Reviews",
      "Career Path Mapping",
      "Salary Negotiation Advice",
      "Job Search Strategy"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 3, 
    name: "Mock Interview", 
    price: 9,
    description: "Practice with industry experts who provide real-time feedback to improve your interview skills.",
    features: [
      "Role-Specific Interviews",
      "Company-Specific Preparation",
      "Behavioral Interview Practice",
      "Detailed Performance Analysis"
    ],
    image: "https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 4, 
    name: "Resume Building", 
    price: 9,
    description: "Expert help with crafting an ATS-friendly resume that highlights your strengths.",
    features: [
      "ATS Optimization",
      "Professional Formatting",
      "Achievement Highlighting",
      "Technical Skills Showcase"
    ],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 5, 
    name: "Technical Interview Prep", 
    price: 9,
    description: "Comprehensive preparation for technical interviews with focus on algorithms and system design.",
    features: [
      "Data Structures & Algorithms",
      "System Design Principles",
      "Frontend Concepts",
      "Database Optimization"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 6, 
    name: "Project Help", 
    price: 9,
    description: "Expert assistance with your coding projects, from architecture to implementation.",
    features: [
      "Code Reviews",
      "Architecture Consulting",
      "Debugging Sessions",
      "Project Planning"
    ],
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
          <span className="mt-2 block text-sm font-medium">Service Details</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 2 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">2</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Payment</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 3 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 3 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">3</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Confirmation</span>
        </div>
      </div>
    </div>
  );
};

const Book = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
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
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const { toast } = useToast();

  // Handle service preselection from URL parameters
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const serviceId = parseInt(serviceParam);
      if (!isNaN(serviceId) && services.some(s => s.id === serviceId)) {
        setSelectedService(serviceId);
      }
    }
  }, [searchParams]);

  const handleNextStep = async () => {
    if (currentStep === 1) {
      // Validate step 1
      if (!selectedService || !selectedDate || !selectedTime || !name || !email || !phone) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields before proceeding.",
          variant: "destructive",
        });
        return;
      }

      // Proceed to payment page with booking details
      const selectedServiceDetails = services.find(s => s.id === selectedService);
      if (selectedServiceDetails) {
        navigate(`/payment?serviceId=${selectedService}&serviceName=${encodeURIComponent(selectedServiceDetails.name)}&servicePrice=${selectedServiceDetails.price}&date=${encodeURIComponent(format(selectedDate!, 'PP'))}&time=${encodeURIComponent(selectedTime!)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&companyName=${encodeURIComponent(companyName)}&examPattern=${encodeURIComponent(examPattern)}&duration=${encodeURIComponent(duration)}&notes=${encodeURIComponent(notes)}`);
      }
      return;
    }

    // Move to the next step (for handling other steps if needed)
    setCurrentStep(currentStep + 1);
  };

  // Check for success parameter in URL when returning from Stripe
  useEffect(() => {
    const step = searchParams.get('step');
    const success = searchParams.get('success');
    
    if (step === '3' && success === 'true') {
      setCurrentStep(3);
      setIsConfirmed(true);
    }
  }, [searchParams]);

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
        description: "Please select a service, date, and time.",
        variant: "destructive",
      });
      return;
    }

    // This will be handled by the payment page
    setLoading(true);
    setIsConfirmed(true);
    setLoading(false);
  };

  const isDateDisabled = (date: Date) => {
    // Disable dates in the past
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.name}
                  description={service.description}
                  icon={
                    <div className="flex justify-center">
                      <div className={`border-2 rounded-full p-1 ${selectedService === service.id ? 'border-brand-red' : 'border-transparent'}`}>
                        <div className={`w-6 h-6 rounded-full ${selectedService === service.id ? 'bg-brand-red' : 'bg-gray-200'}`}></div>
                      </div>
                    </div>
                  }
                  features={service.features}
                  image={service.image}
                  onClick={() => setSelectedService(service.id)}
                  isSelected={selectedService === service.id}
                  price={service.price}
                />
              ))}
            </div>

            {selectedService && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <div>
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

                <div>
                  <h3 className="text-lg font-semibold mb-4">Your Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                      <input
                        id="company"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="examPattern" className="block text-sm font-medium mb-1">Exam Pattern (if applicable)</label>
                      <input
                        id="examPattern"
                        type="text"
                        value={examPattern}
                        onChange={(e) => setExamPattern(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="e.g., DSA, System Design, Behavioral"
                      />
                    </div>

                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium mb-1">Test Duration (if applicable)</label>
                      <input
                        id="duration"
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="e.g., 2 hours, 45 minutes"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium mb-1">Additional Notes</label>
                      <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        rows={4}
                        placeholder="Tell us about your goals for this session..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      
      case 2:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Session Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span>{services.find(s => s.id === selectedService)?.name}</span>
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
                  <span>${services.find(s => s.id === selectedService)?.price}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium mb-1">Name on Card</label>
                  <input
                    id="cardName"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                  <div className="flex items-center w-full px-3 py-2 border rounded-md bg-white">
                    <CreditCard className="h-4 w-4 text-gray-400 mr-2" />
                    <input
                      id="cardNumber"
                      type="text"
                      className="flex-grow border-none focus:outline-none p-0"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input
                      id="expiry"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC</label>
                    <input
                      id="cvc"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
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
                  Your {services.find(s => s.id === selectedService)?.name} session is scheduled for:
                  <br />
                  <span className="font-semibold">{selectedDate ? format(selectedDate, 'PPP') : ''} at {selectedTime}</span>
                </p>
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
                      <p className="font-medium">{services.find(s => s.id === selectedService)?.name}</p>
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

  // Show login modal if user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setLoginModalOpen(true);
    }
  }, [isAuthenticated]);

  // Handle login modal close
  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  return (
    <Layout>
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Book Your Session</h1>
            <p className="text-lg text-gray-300">
              Schedule a one-on-one session with our expert coaches to advance your tech career
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <BookingSteps currentStep={currentStep} />
          
          {renderStepContent()}
          
          {!isConfirmed && (
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <Button 
                  onClick={handlePreviousStep} 
                  variant="outline"
                  disabled={loading}
                >
                  Back
                </Button>
              )}
              
              {currentStep < 3 && (
                <Button 
                  onClick={handleNextStep} 
                  className="bg-brand-red hover:bg-red-700 text-white ml-auto"
                  disabled={loading}
                >
                  {currentStep === 2 ? "Continue" : "Next"}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
      
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={handleLoginModalClose}
        title="Login to Book a Session"
        description="Please login with your phone number to continue booking."
      />
    </Layout>
  );
};

export default Book;
