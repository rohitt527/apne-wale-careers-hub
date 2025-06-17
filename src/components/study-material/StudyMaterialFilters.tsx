
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface StudyMaterialFiltersProps {
  searchTerm: string;
  categoryFilter: string;
  levelFilter: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onLevelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StudyMaterialFilters = ({
  searchTerm,
  categoryFilter,
  levelFilter,
  onSearchChange,
  onCategoryChange,
  onLevelChange,
}: StudyMaterialFiltersProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search study materials..."
              className="pl-12 h-12 border-gray-200 focus:border-purple-400 focus:ring-purple-400"
              value={searchTerm}
              onChange={onSearchChange}
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex gap-2">
          <select
            className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            value={categoryFilter}
            onChange={onCategoryChange}
          >
            <option value="All">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Personal Development">Personal Development</option>
            <option value="Premium">Premium</option>
          </select>
          <select
            className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            value={levelFilter}
            onChange={onLevelChange}
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialFilters;
