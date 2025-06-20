
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star, Download, Share2, Heart, Award, Clock, Users } from "lucide-react";

interface StudyMaterialInfoSidebarProps {
  material: {
    thumbnail: string;
    title: string;
    level: string;
    estimatedTime: string;
    downloadCount: number;
    author: string;
    rating: number;
    ratingCount: number;
  };
  onBookmark: () => void;
  onRating: () => void;
  onDownload: () => void;
}

const StudyMaterialInfoSidebar = ({ material, onBookmark, onRating, onDownload }: StudyMaterialInfoSidebarProps) => {
  return (
    <div className="sticky top-32 space-y-8">
      {/* Quick Stats Card */}
      <Card className="border-0 shadow-lg overflow-hidden bg-white">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-600" />
            Quick Stats
          </h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="text-xl font-bold text-blue-900">{material.rating}</div>
                <div className="text-xs text-blue-600">Rating</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="text-xl font-bold text-green-900">{material.ratingCount}</div>
                <div className="text-xs text-green-600">Reviews</div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Level:</span>
                <Badge className="bg-blue-100 text-blue-700">{material.level}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration:</span>
                <div className="flex items-center gap-1 text-gray-900 font-medium">
                  <Clock className="w-4 h-4" />
                  {material.estimatedTime}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Format:</span>
                <span className="font-medium text-gray-900">PDF + Video</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Downloads:</span>
                <span className="font-medium text-gray-900">{material.downloadCount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Author Card */}
      <Card className="border-0 shadow-lg bg-white">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {material.author.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-lg">{material.author}</h4>
              <p className="text-sm text-blue-600 font-medium mb-3">Expert Instructor</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Experienced developer with 10+ years in the industry, specializing in modern web technologies and best practices.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg bg-white">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 group"
              onClick={onBookmark}
            >
              <BookOpen className="w-5 h-5 mr-3 group-hover:text-blue-600 transition-colors" />
              Add to Reading List
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 bg-gray-50 hover:bg-yellow-50 border-2 border-gray-200 hover:border-yellow-300 transition-all duration-300 group"
              onClick={onRating}
            >
              <Star className="w-5 h-5 mr-3 group-hover:text-yellow-600 transition-colors" />
              Rate This Material
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 bg-gray-50 hover:bg-green-50 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 group"
              onClick={onDownload}
            >
              <Download className="w-5 h-5 mr-3 group-hover:text-green-600 transition-colors" />
              Download PDF
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 bg-gray-50 hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 group"
            >
              <Share2 className="w-5 h-5 mr-3 group-hover:text-purple-600 transition-colors" />
              Share with Friends
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Support Card */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Love this content?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Help us create more quality materials by sharing your feedback.
          </p>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Leave a Review
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialInfoSidebar;
