
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Crown, Eye, Download, Star } from "lucide-react";

interface StudyMaterialHeaderProps {
  studyMaterial: {
    thumbnail: string;
    isPremium: boolean;
    category: string;
    title: string;
    downloadCount: number;
    rating: number;
  };
}

const StudyMaterialHeader: React.FC<StudyMaterialHeaderProps> = ({ studyMaterial }) => {
  return (
    <div className="relative h-64 md:h-80">
      <img
        src={studyMaterial.thumbnail}
        alt={studyMaterial.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          {studyMaterial.isPremium ? (
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          ) : (
            <Badge className="bg-green-600">Free</Badge>
          )}
          <span className="text-sm opacity-90">{studyMaterial.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{studyMaterial.title}</h1>
        <div className="flex items-center gap-4 text-sm opacity-90">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {(studyMaterial.downloadCount * 3).toLocaleString()} views
          </span>
          <span className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            {studyMaterial.downloadCount.toLocaleString()} downloads
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {studyMaterial.rating} rating
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialHeader;
