
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  linkUrl?: string;
  linkText?: string;
}

const FeatureCard = ({ icon, title, description, features = [], linkUrl = "/services", linkText = "Book Now" }: FeatureCardProps) => {
  return (
    <Card className="card-hover h-full border-t-4 border-t-brand-red hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="text-brand-red text-3xl mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600">
        <p className="mb-6">{description}</p>
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="h-4 w-4 text-brand-red mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      {linkUrl && linkText && (
        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="w-full bg-brand-red hover:bg-red-700 text-white sm:flex-1">
            <Link to={linkUrl}>{linkText}</Link>
          </Button>
          <Button asChild variant="outline" className="w-full border-brand-red text-brand-red hover:bg-red-50 sm:flex-1">
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
