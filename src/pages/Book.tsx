import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  serviceType: z.string({ required_error: "Please select a service type" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time slot" }),
  message: z.string().optional(),
});

// Available time slots
const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

// Service types
const serviceTypes = [
  { value: "assessment", label: "Assessment Support" },
  { value: "mock-interview", label: "Mock Interview" },
  { value: "career-guidance", label: "Career Guidance" },
  { value: "project-help", label: "Project Help" },
  { value: "interview-prep", label: "Interview Preparation" },
];

const Book = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Booking Confirmed!",
      description: `Your ${getServiceLabel(data.serviceType)} session is scheduled for ${format(data.date, "MMMM do, yyyy")} at ${data.time}.`,
    });
    // In a real app, this would send data to a backend API
  };

  const getServiceLabel = (value: string) => {
    return serviceTypes.find(service => service.value === value)?.label || value;
  };

  const nextStep = () => {
    const currentStepFields = step === 1 
      ? ["name", "email", "phone"] 
      : ["serviceType", "date", "time"];
    
    const isValid = currentStepFields.every(field => {
      const result = form.trigger(field as keyof z.infer<typeof formSchema>);
      return result;
    });
    
    if (isValid) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Book Your Session</h1>
            <p className="text-lg text-gray-300">
              Schedule a one-on-one session with our expert mentors to accelerate your career growth
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Steps Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="bg-brand-red text-white h-10 w-10 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className={`h-1 w-24 ${step > 1 ? "bg-brand-red" : "bg-gray-300"}`}></div>
                </div>
                <div className="flex items-center">
                  <div className={`${step === 2 ? "bg-brand-red text-white" : "bg-gray-200 text-gray-600"} h-10 w-10 rounded-full flex items-center justify-center font-bold`}>
                    2
                  </div>
                  <div className={`h-1 w-24 ${step > 2 ? "bg-brand-red" : "bg-gray-300"}`}></div>
                </div>
                <div className={`${step === 3 ? "bg-brand-red text-white" : "bg-gray-200 text-gray-600"} h-10 w-10 rounded-full flex items-center justify-center font-bold`}>
                  3
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <div className="w-24 text-center">Personal Info</div>
                <div className="w-24 text-center">Session Details</div>
                <div className="w-24 text-center">Confirmation</div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                  <>
                    <SectionHeading
                      title="Personal Information"
                      subtitle="Tell us a bit about yourself"
                      align="center"
                    />

                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="bg-brand-red hover:bg-red-700 text-white"
                      >
                        Next Step
                      </Button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <SectionHeading
                      title="Session Details"
                      subtitle="Choose your service type and schedule"
                      align="center"
                    />

                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypes.map((service) => (
                                  <SelectItem key={service.value} value={service.value}>
                                    {service.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => {
                                    // Disable past dates and weekends
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    const day = date.getDay();
                                    return date < today || day === 0 || day === 6;
                                  }}
                                  initialFocus
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time Slot</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={!form.getValues("date")}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time slot" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your goals or specific areas you'd like to focus on"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => {
                          const isValid = ["serviceType", "date", "time"].every(field => 
                            form.trigger(field as keyof z.infer<typeof formSchema>)
                          );
                          if (isValid) setStep(3);
                        }}
                        className="bg-brand-red hover:bg-red-700 text-white"
                      >
                        Review Booking
                      </Button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <SectionHeading
                      title="Confirm Your Booking"
                      subtitle="Review your session details before confirming"
                      align="center"
                    />

                    <div className="bg-gray-50 p-6 rounded-lg border space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{form.getValues("name")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{form.getValues("email")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{form.getValues("phone")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Service Type</p>
                          <p className="font-medium">{getServiceLabel(form.getValues("serviceType"))}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium">{form.getValues("date") && format(form.getValues("date"), "MMMM do, yyyy")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Time</p>
                          <p className="font-medium">{form.getValues("time")}</p>
                        </div>
                      </div>
                      {form.getValues("message") && (
                        <div>
                          <p className="text-sm text-gray-500">Additional Information</p>
                          <p className="text-gray-700">{form.getValues("message")}</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800 flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">Important Information</p>
                        <p className="text-sm mt-1">
                          Please note that all bookings are subject to confirmation. You'll receive a confirmation email shortly after submitting your request.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-brand-red hover:bg-red-700 text-white"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Why Book With Us"
            subtitle="The benefits of choosing Apne Wale Careers for your career growth"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Mentors</h3>
              <p className="text-gray-600">
                Learn from professionals with real-world experience at top tech companies like Google, Microsoft, and Amazon.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                Get tailored advice and feedback specific to your goals, skills, and career aspirations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Guaranteed Results</h3>
              <p className="text-gray-600">
                We've helped thousands of professionals advance their careers with a 95% satisfaction rate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
