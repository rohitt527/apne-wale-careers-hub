
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

const FeatureCard = ({ icon, title, description, features = [], linkUrl = "/services", linkText = "Learn More" }: FeatureCardProps) => {
  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <div className="text-brand-red text-3xl mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600">
        <p>{description}</p>
        {features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      {linkUrl && linkText && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-brand-red text-brand-red hover:bg-red-50">
            <Link to={linkUrl}>{linkText}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
