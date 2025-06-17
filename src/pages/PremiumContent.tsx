
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Lock, 
  Unlock, 
  Download, 
  Star, 
  Clock, 
  FileText, 
  Shield,
  CheckCircle,
  CreditCard,
  Users,
  Sparkles
} from "lucide-react";

const PremiumContent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [contentId] = useState(searchParams.get("id") || "premium-guide");
  
  // Mock premium content data
  const premiumContent = {
    id: "premium-guide",
    title: "Advanced Interview Mastery Guide",
    description: "Comprehensive guide covering advanced interview techniques, salary negotiation, and career advancement strategies used by top professionals.",
    price: 49.99,
    originalPrice: 99.99,
    features: [
      "100+ Advanced Interview Questions & Answers",
      "Salary Negotiation Scripts & Strategies",
      "Industry-Specific Interview Preparation",
      "Mock Interview Video Examples",
      "Career Advancement Roadmap",
      "Lifetime Access & Updates"
    ],
    benefits: [
      "Increase your chances of landing your dream job by 300%",
      "Learn negotiation tactics that can boost your salary by $20K+",
      "Access to exclusive industry insights from top recruiters",
      "Step-by-step action plans for career growth"
    ],
    downloadUrl: "/mock-premium-content.pdf",
    previewContent: "This premium guide contains proven strategies that have helped thousands of professionals land their dream jobs and negotiate better salaries...",
    stats: {
      downloads: "5,000+",
      rating: 4.9,
      pages: 150
    }
  };

  // Check if content is already unlocked (mock check)
  useEffect(() => {
    const unlockedContent = localStorage.getItem(`unlocked_${contentId}`);
    if (unlockedContent === "true") {
      setIsUnlocked(true);
    }
  }, [contentId]);

  const handlePurchase = async () => {
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mark content as unlocked
      localStorage.setItem(`unlocked_${contentId}`, "true");
      setIsUnlocked(true);
      
      toast({
        title: "Payment Successful!",
        description: "You now have lifetime access to this premium content.",
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = premiumContent.downloadUrl;
    link.download = `${premiumContent.title}.pdf`;
    link.click();
    
    toast({
      title: "Download Started",
      description: "Your premium content is being downloaded.",
    });
  };

  return (
    <Layout>
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content Preview */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Premium Content
                </Badge>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {premiumContent.stats.rating} Rating
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {premiumContent.title}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {premiumContent.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 py-4 border-y border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">{premiumContent.stats.downloads}</span>
                  <span className="text-sm">downloads</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">{premiumContent.stats.pages}</span>
                  <span className="text-sm">pages</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Lifetime access</span>
                </div>
              </div>

              {/* Content Preview */}
              <div className="bg-white p-6 rounded-lg border shadow-sm relative">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Content Preview
                </h3>
                <p className="text-gray-600 mb-4">
                  {premiumContent.previewContent}
                </p>
                {!isUnlocked && (
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent rounded-lg flex items-end justify-center pb-6">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 font-medium">Unlock to read full content</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">What You'll Get:</h3>
                <div className="space-y-2">
                  {premiumContent.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Purchase/Download Card */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Card className="sticky top-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {isUnlocked ? (
                      <Unlock className="w-8 h-8 text-white" />
                    ) : (
                      <Lock className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-2xl">
                    {isUnlocked ? "Content Unlocked!" : "Unlock Premium Content"}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {!isUnlocked ? (
                    <>
                      {/* Pricing */}
                      <div className="text-center space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold text-gray-900">
                            ${premiumContent.price}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ${premiumContent.originalPrice}
                          </span>
                        </div>
                        <Badge className="bg-red-100 text-red-700 border-red-200">
                          50% Limited Time Offer
                        </Badge>
                        <p className="text-sm text-gray-600">One-time payment • Lifetime access</p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold">Includes:</h4>
                        <div className="space-y-2">
                          {premiumContent.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Security Badge */}
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        <Shield className="w-4 h-4" />
                        <span>Secure payment powered by Stripe</span>
                      </div>

                      {/* Purchase Button */}
                      <Button
                        onClick={handlePurchase}
                        disabled={isProcessing}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg font-semibold"
                      >
                        {isProcessing ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <CreditCard className="w-5 h-5 mr-2" />
                            Unlock Now - ${premiumContent.price}
                          </>
                        )}
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* Unlocked State */}
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-green-700 mb-2">
                            Access Granted!
                          </h3>
                          <p className="text-gray-600">
                            You now have lifetime access to this premium content.
                          </p>
                        </div>
                      </div>

                      {/* Download Button */}
                      <Button
                        onClick={handleDownload}
                        className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-6 text-lg font-semibold"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </Button>

                      {/* Access Information */}
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <p className="text-sm text-blue-800">
                          <strong>Lifetime Access:</strong> You can download this content anytime from your account.
                        </p>
                      </div>
                    </>
                  )}

                  {/* Back to Study Materials */}
                  <Button
                    variant="outline"
                    onClick={() => navigate("/study-material")}
                    className="w-full"
                  >
                    Back to Study Materials
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PremiumContent;
