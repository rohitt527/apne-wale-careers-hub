
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, Lock, Award, Star } from "lucide-react";

interface StudyMaterialContentProps {
  studyMaterial: {
    isPremium: boolean;
    content: {
      overview: string;
      chapters: string[];
      features: string[];
    };
  };
  isPurchased: boolean;
}

const StudyMaterialContent: React.FC<StudyMaterialContentProps> = ({
  studyMaterial,
  isPurchased,
}) => {
  return (
    <div className="space-y-8">
      {/* Content Overview */}
      <Card className="p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <CardHeader className="px-0 pt-0">
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            About This Material
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <p className="text-gray-700 leading-relaxed mb-6">
            {studyMaterial.content.overview}
          </p>
          
          {(!studyMaterial.isPremium || isPurchased) && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                <CheckCircle className="w-5 h-5" />
                Full Content Available
              </div>
              <p className="text-green-600 text-sm">
                You have full access to this content. Download the PDF to get started!
              </p>
            </div>
          )}
          
          {studyMaterial.isPremium && !isPurchased && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-purple-700 font-medium mb-2">
                <Lock className="w-5 h-5" />
                Premium Content
              </div>
              <p className="text-purple-600 text-sm">
                Purchase this premium content to unlock the full material and download the PDF.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Content Chapters */}
      <Card className="p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <CardHeader className="px-0 pt-0">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            What's Included
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {studyMaterial.content.chapters.map((chapter, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{chapter}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="p-6 animate-fade-in" style={{ animationDelay: "800ms" }}>
        <CardHeader className="px-0 pt-0">
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-500" />
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="space-y-3">
            {studyMaterial.content.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialContent;
