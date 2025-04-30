
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceItemProps {
  title: string;
  description: string;
  features: string[];
  linkUrl: string;
  linkText: string;
}

const ServiceItem = ({ title, description, features, linkUrl, linkText }: ServiceItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      
      <div className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-brand-red text-white p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="font-medium">{feature}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <Button asChild className="bg-brand-red hover:bg-red-700 text-white w-full">
          <Link to={linkUrl}>{linkText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceItem;
