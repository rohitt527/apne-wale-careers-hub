
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MapPin, Clock, Briefcase, Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  logo: string;
  tags: string[];
  postedDate: string;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  type,
  experience,
  logo,
  tags,
  postedDate
}: JobCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-white overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-xl overflow-hidden border-2 border-gray-100 bg-white p-2 shadow-sm">
              <img 
                src={logo} 
                alt={company} 
                className="h-full w-full object-contain rounded-lg" 
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-brand-red transition-colors">
              <Link to={`/job/${id}`} className="line-clamp-2">
                {title}
              </Link>
            </h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Building className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-medium truncate">{company}</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Posted {postedDate}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="grid grid-cols-1 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Briefcase className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span>{type} • {experience}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-medium px-2 py-1"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="bg-gray-100 text-gray-500 text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <Link to={`/job/${id}`} className="flex items-center justify-center gap-2">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
