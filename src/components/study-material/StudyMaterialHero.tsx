
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen } from "lucide-react";

const StudyMaterialHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />
      <div className="container-custom text-center relative z-10">
        <div className="animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <Sparkles className="w-4 h-4 mr-1" />
            Premium Study Materials
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Unlock Your <span className="text-gradient">Potential</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Access a wide range of free and premium study materials to enhance your skills and advance your career.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Materials
            </Button>
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              View Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialHero;
