
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/common/SectionHeading";
import Layout from "@/components/layout/Layout";

const services = [
  {
    title: "Career Guidance",
    description: "One-on-one career counseling session",
    benefits: ["Professional career advice", "Resume review", "Interview preparation", "Industry insights"]
  },
  {
    title: "Resume Building",
    description: "Expert resume optimization session",
    benefits: ["ATS-friendly format", "Content optimization", "Professional formatting", "Cover letter tips"]
  },
  {
    title: "Mock Interview",
    description: "Practice interview with feedback",
    benefits: ["Real interview simulation", "Detailed feedback", "Common questions practice", "Body language tips"]
  }
];

const Pricing = () => {
  return (
    <Layout>
      <div className="container-custom section-padding">
        <SectionHeading 
          title="Simple, Transparent Pricing" 
          subtitle="All our services are priced at $9 per session to make professional guidance accessible to everyone."
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-2xl font-bold mb-4">$9</div>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-brand-red h-5 w-5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                  <Link to="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
