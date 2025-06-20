
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Play, CheckCircle, FileText, Video, BookOpen } from "lucide-react";

interface StudyMaterialMainContentProps {
  material: {
    thumbnail: string;
    title: string;
    tableOfContents: string[];
    content: string;
  };
}

const StudyMaterialMainContent = ({ material }: StudyMaterialMainContentProps) => {
  return (
    <div className="space-y-12">
      {/* Content Overview */}
      <Card className="border-0 shadow-lg bg-white overflow-hidden">
        <CardContent className="p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Content Overview</h2>
              <p className="text-gray-600">Comprehensive study material designed for your success</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {material.content} This material has been carefully crafted by industry experts to provide you with 
              practical knowledge and real-world applications. Each section builds upon the previous one, ensuring 
              a smooth learning curve.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <Video className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Video Content</h3>
                <p className="text-sm text-gray-600">Interactive video lessons with practical examples</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <FileText className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">PDF Materials</h3>
                <p className="text-sm text-gray-600">Downloadable resources for offline study</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <BookOpen className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Interactive Exercises</h3>
                <p className="text-sm text-gray-600">Hands-on practice with real-world scenarios</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Material Preview */}
      <Card className="border-0 shadow-lg bg-white overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={material.thumbnail}
              alt={material.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Preview Available</h3>
                  <p className="text-blue-100">Get a glimpse of what you'll learn</p>
                </div>
                <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30">
                  <Play className="w-5 h-5 mr-3" />
                  Watch Preview
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Objectives */}
      <Card className="border-0 shadow-lg bg-white overflow-hidden">
        <CardContent className="p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Learning Objectives</h2>
              <p className="text-gray-600">What you'll master after completing this material</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {material.tableOfContents.map((item, index) => (
              <div key={index} className="group flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md hover:from-blue-50 hover:to-blue-100 transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold text-lg mb-2">{item}</h3>
                  <p className="text-gray-600 text-sm">Master the fundamentals and advanced concepts with practical examples.</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialMainContent;
