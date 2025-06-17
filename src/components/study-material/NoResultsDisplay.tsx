
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface NoResultsDisplayProps {
  onClearFilters: () => void;
}

const NoResultsDisplay = ({ onClearFilters }: NoResultsDisplayProps) => {
  return (
    <div className="text-center py-16 animate-fade-in">
      <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No materials found</h3>
      <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all categories.</p>
      <Button onClick={onClearFilters} variant="outline">
        Clear Filters
      </Button>
    </div>
  );
};

export default NoResultsDisplay;
