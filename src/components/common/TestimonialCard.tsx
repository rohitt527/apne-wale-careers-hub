
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, company, testimonial, image }: TestimonialProps) => {
  return (
    <Card className="border-none shadow-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="h-16 w-16 rounded-full object-cover border-2 border-brand-red" 
            />
          </div>
          <div>
            <div className="mb-2 text-brand-red">
              <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            <p className="text-gray-700 mb-4 italic">{testimonial}</p>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600">{role}, {company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
