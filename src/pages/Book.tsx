
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

// Services available for booking
const services = [
  { id: 1, name: "Career Guidance", price: 9 },
  { id: 2, name: "Resume Building", price: 9 },
  { id: 3, name: "Mock Interview", price: 9 },
  { id: 4, name: "Assessment Support", price: 9 },
  { id: 5, name: "Technical Interview Prep", price: 9 },
  { id: 6, name: "Project Help", price: 9 },
];

// Available time slots
const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "12:00 PM", "01:00 PM", "02:00 PM", 
  "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM"
];

const Book = () => {
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

  const { toast } = useToast();

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a service, date, and time.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const selectedServiceDetails = services.find(s => s.id === selectedService);
      const emailSubject = `New Booking: ${selectedServiceDetails?.name}`;
      const emailBody = `
New booking details:

Service: ${selectedServiceDetails?.name}
Date: ${format(selectedDate, 'PP')}
Time: ${selectedTime}
Name: ${name}
Email: ${email}
Phone: ${phone}
Company Name: ${companyName}
Exam Pattern: ${examPattern}
Test Duration: ${duration}
Additional Notes: ${notes}

Total Amount: $${selectedServiceDetails?.price}
      `;

      // Open email client with booking details
      window.open(`mailto:apnewalecoders@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`);

      toast({
        title: "Booking details sent!",
        description: "Please check your email client to send the booking details.",
      });
      
      // Reset form
      setSelectedService(null);
      setSelectedDate(undefined);
      setSelectedTime(null);
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setCompanyName("");
      setExamPattern("");
      setDuration("");
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
        <div className="container-custom max-w-5xl">
          <SectionHeading
            title="Select Your Service"
            subtitle="Choose the service that best fits your needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all ${
                  selectedService === service.id ? 'border-brand-red ring-2 ring-brand-red/20' : 'hover:border-brand-red/50'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold mb-2">${service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedService && (
            <form onSubmit={handleBooking}>
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
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
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
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
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
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
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
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span>${services.find(s => s.id === selectedService)?.price}</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-brand-red hover:bg-red-700 text-white" 
                  disabled={!selectedService || !selectedDate || !selectedTime || loading}
                >
                  {loading ? "Processing..." : "Confirm Booking"}
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  You'll be prompted to complete payment after booking.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Book;
