
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CalendarIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const BlogCard = ({ id, title, excerpt, author, date, category, image }: BlogCardProps) => {
  return (
    <Card className="card-hover overflow-hidden border-none shadow-md h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-semibold py-1 px-2 rounded">
          {category}
        </div>
      </div>
      <CardHeader className="pt-6">
        <Link to={`/blog/${id}`} className="hover:text-brand-red transition-colors">
          <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full btn-outline">
          <Link to={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
