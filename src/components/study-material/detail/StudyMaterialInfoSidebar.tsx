
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star, Download } from "lucide-react";

interface StudyMaterialInfoSidebarProps {
  material: {
    thumbnail: string;
    title: string;
    level: string;
    estimatedTime: string;
    downloadCount: number;
    author: string;
  };
  onBookmark: () => void;
  onRating: () => void;
  onDownload: () => void;
}

const StudyMaterialInfoSidebar = ({ material, onBookmark, onRating, onDownload }: StudyMaterialInfoSidebarProps) => {
  return (
    <div className="sticky top-8 space-y-8">
      {/* Material Info Card */}
      <Card className="border-0 shadow-xl overflow-hidden bg-white">
        <div className="aspect-video relative">
          <img
            src={material.thumbnail}
            alt={material.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <CardContent className="p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Material Details</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Level:</span>
                  <Badge className="bg-blue-100 text-blue-700">{material.level}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">{material.estimatedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-semibold">PDF + Interactive</span>
                </div>
                <div className="flex justify-between">
                  <span>Downloads:</span>
                  <span className="font-semibold">{material.downloadCount.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Author</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {material.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{material.author}</p>
                  <p className="text-sm text-gray-600">Expert Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
              onClick={onBookmark}
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Add to Reading List
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
              onClick={onRating}
            >
              <Star className="w-5 h-5 mr-3" />
              Rate This Material
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
              onClick={onDownload}
            >
              <Download className="w-5 h-5 mr-3" />
              Download PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialInfoSidebar;
