
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Star, Clock } from "lucide-react";

interface StudyMaterialSidebarProps {
  studyMaterial: {
    level: string;
    author: string;
    publishDate: string;
    estimatedTime: string;
    isPremium: boolean;
    price?: number;
    originalPrice?: number;
    downloadCount: number;
    rating: number;
  };
}

const StudyMaterialSidebar: React.FC<StudyMaterialSidebarProps> = ({ studyMaterial }) => {
  return (
    <div className="space-y-6">
      {/* Material Info */}
      <Card className="p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <CardHeader className="px-0 pt-0">
          <CardTitle>Material Details</CardTitle>
        </CardHeader>
        <CardContent className="px-0 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Format:</span>
            <span className="font-medium">PDF</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Level:</span>
            <span className="font-medium">{studyMaterial.level}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Author:</span>
            <span className="font-medium">{studyMaterial.author}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Updated:</span>
            <span className="font-medium">{studyMaterial.publishDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Est. Time:</span>
            <span className="font-medium">{studyMaterial.estimatedTime}</span>
          </div>
          {studyMaterial.isPremium && (
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <div className="text-right">
                <span className="font-bold text-purple-600">${studyMaterial.price}</span>
                {studyMaterial.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    ${studyMaterial.originalPrice}
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card className="p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
        <CardHeader className="px-0 pt-0">
          <CardTitle>Statistics</CardTitle>
        </CardHeader>
        <CardContent className="px-0 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Students
            </span>
            <span className="font-medium">{studyMaterial.downloadCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Rating
            </span>
            <span className="font-medium">{studyMaterial.rating}/5.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Duration
            </span>
            <span className="font-medium">{studyMaterial.estimatedTime}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialSidebar;
