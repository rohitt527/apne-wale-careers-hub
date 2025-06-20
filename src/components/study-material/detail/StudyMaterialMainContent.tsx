
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Play, CheckCircle } from "lucide-react";

interface StudyMaterialMainContentProps {
  material: {
    thumbnail: string;
    title: string;
    tableOfContents: string[];
  };
}

const StudyMaterialMainContent = ({ material }: StudyMaterialMainContentProps) => {
  return (
    <div className="space-y-12">
      {/* Material Preview Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src={material.thumbnail}
          alt={material.title}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 transition-all duration-300">
            <Play className="w-5 h-5 mr-3" />
            Preview Content
          </Button>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="border-0 shadow-xl bg-white overflow-hidden">
        <CardContent className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600" />
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {material.tableOfContents.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-lg hover:from-blue-50 hover:to-blue-100 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
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
