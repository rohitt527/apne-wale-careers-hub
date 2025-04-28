
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string; // Make link optional, defaulting to pricing
}

const ServiceCard = ({ title, description, icon, link = "/pricing" }: ServiceCardProps) => {
  return (
    <Card className="card-hover border-t-4 border-t-brand-red">
      <CardHeader>
        <div className="mb-4 text-brand-red text-3xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full btn-outline">
          <Link to="/pricing">View Pricing</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
