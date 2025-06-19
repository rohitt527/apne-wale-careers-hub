
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Play } from "lucide-react";

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
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={material.thumbnail}
          alt={material.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30">
            <Play className="w-5 h-5 mr-2" />
            Preview Content
          </Button>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600" />
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {material.tableOfContents.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialMainContent;
