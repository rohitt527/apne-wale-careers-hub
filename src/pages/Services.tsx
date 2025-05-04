
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/services/HeroSection";
import AssessmentSection from "@/components/services/AssessmentSection";
import InterviewsSection from "@/components/services/InterviewsSection";
import PreparationSection from "@/components/services/PreparationSection";
import CareerProjectSection from "@/components/services/CareerProjectSection";
import CtaSection from "@/components/services/CtaSection";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if a service is pre-selected in URL params
  useEffect(() => {
    const serviceId = searchParams.get('service');
    const directPay = searchParams.get('direct-pay');
    
    if (serviceId && directPay === 'true') {
      // Redirect to payment with direct payment flag
      navigate(`/payment?serviceId=${serviceId}&direct=true`);
      
      toast({
        title: "Direct payment",
        description: "Proceeding to payment for selected service.",
      });
    }
  }, [searchParams, navigate, toast]);

  return (
    <Layout>
      <HeroSection />
      <AssessmentSection />
      <InterviewsSection />
      <PreparationSection />
      <CareerProjectSection />
      <CtaSection />
    </Layout>
  );
};

export default Services;
