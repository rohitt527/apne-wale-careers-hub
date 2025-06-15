
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CalendarIcon, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime?: string;
}

const BlogCard = ({ id, title, excerpt, author, date, category, image, readTime }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-brand-red/90 text-white backdrop-blur-sm shadow-lg">
            {category}
          </Badge>
        </div>
        {readTime && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
          <Button asChild className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
            <Link to={`/blog/${id}`} className="flex items-center justify-center gap-2">
              Read Article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <CardHeader className="pt-6 pb-4">
        <Link to={`/blog/${id}`} className="group-hover:text-brand-red transition-colors duration-300">
          <h3 className="text-xl font-bold line-clamp-2 leading-tight">{title}</h3>
        </Link>
      </CardHeader>
      
      <CardContent className="flex-grow pb-4">
        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild variant="ghost" className="w-full group/btn hover:bg-brand-red hover:text-white transition-all duration-300">
          <Link to={`/blog/${id}`} className="flex items-center justify-center gap-2">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
