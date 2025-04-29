
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  linkUrl: string;
  linkText: string;
}

const FeatureCard = ({ icon, title, description, features, linkUrl, linkText }: FeatureCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="text-brand-red text-3xl mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600">
        <p>{description}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full btn-outline">
          <Link to={linkUrl}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
