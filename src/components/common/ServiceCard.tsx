
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string; // Make link optional, defaulting to pricing
  features?: string[];
  image?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link = "/pricing",
  features = [],
  image
}: ServiceCardProps) => {
  return (
    <Card className="card-hover border-t-4 border-t-brand-red">
      <CardHeader>
        <div className="mb-4 text-brand-red text-3xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        
        {image && (
          <div className="mb-4 overflow-hidden rounded-md">
            <img src={image} alt={title} className="w-full h-48 object-cover transition-all hover:scale-105" />
          </div>
        )}
        
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
      <CardFooter>
        <Button asChild variant="outline" className="w-full btn-outline">
          <Link to={link}>View Pricing</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
