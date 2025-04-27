
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MapPin, Clock, Briefcase, Building } from "lucide-react";
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
    <Card className="card-hover border shadow-sm">
      <CardHeader className="pb-2 flex flex-row items-start gap-4">
        <div className="flex-shrink-0">
          <div className="h-14 w-14 rounded overflow-hidden border p-[2px]">
            <img src={logo} alt={company} className="h-full w-full object-contain" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg"><Link to={`/jobs/${id}`} className="hover:text-brand-red transition-colors">{title}</Link></h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Building className="h-4 w-4" />
            <span>{company}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase className="h-4 w-4" />
            <span>{type}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{experience}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-xs">Posted {postedDate}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-brand-red hover:bg-red-700 text-white">
          <Link to={`/jobs/${id}`}>Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
