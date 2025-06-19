
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Star, Users } from "lucide-react";

interface StudyMaterialStatsProps {
  material: {
    downloadCount: number;
    rating: number;
    ratingCount: number;
  };
}

const StudyMaterialStats = ({ material }: StudyMaterialStatsProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-black text-blue-900 mb-2">
            {material.downloadCount.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-blue-700">Total Downloads</div>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-black text-green-900 mb-2">
            {material.rating}
          </div>
          <div className="text-sm font-medium text-green-700">Average Rating</div>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-black text-purple-900 mb-2">
            {material.ratingCount}
          </div>
          <div className="text-sm font-medium text-purple-700">Student Reviews</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialStats;
