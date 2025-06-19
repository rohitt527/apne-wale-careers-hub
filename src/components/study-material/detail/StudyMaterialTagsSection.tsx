
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface StudyMaterialTagsSectionProps {
  tags: string[];
}

const StudyMaterialTagsSection = ({ tags }: StudyMaterialTagsSectionProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <Tag className="w-6 h-6 text-blue-600" />
        Topics Covered
      </h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="px-4 py-2 bg-white hover:bg-blue-50 text-gray-700 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterialTagsSection;
