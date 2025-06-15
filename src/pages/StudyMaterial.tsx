
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Folder } from "lucide-react";

const studyMaterials = [
  {
    id: 1,
    title: "System Design Interview Guide",
    date: "May 1, 2024",
    format: "PDF",
    size: "6.1 MB",
    type: "Premium",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    desc:
      "Learn proven system design strategies with detailed examples, diagrams, and best practices.",
  },
  {
    id: 2,
    title: "Behavioral Interview Questions",
    date: "April 28, 2024",
    format: "PDF",
    size: "2.5 MB",
    type: "Free",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80",
    desc:
      "Comprehensive list of classic and modern behavioral questions with sample answers.",
  },
  {
    id: 3,
    title: "Technical Interview Preparation",
    date: "May 5, 2024",
    format: "PDF",
    size: "4.8 MB",
    type: "Premium",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
    desc:
      "Essential, easily-focused technical rounds with question banks and tips.",
  },
  // Add more as needed
];

function MaterialCard({ material }: { material: typeof studyMaterials[0] }) {
  return (
    <div className="rounded-xl overflow-hidden shadow group bg-white dark:bg-gray-900 transition-all border border-gray-100 dark:border-gray-800 hover:shadow-lg">
      <div className="relative h-44 md:h-40 w-full overflow-hidden">
        <img
          src={material.image}
          alt={material.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {material.type === "Premium" && (
          <span className="absolute top-3 right-3 z-10">
            <Badge className="bg-brand-red text-white px-3 py-1 text-xs font-semibold shadow">
              Premium
            </Badge>
          </span>
        )}
        {material.type === "Free" && (
          <span className="absolute top-3 right-3 z-10">
            <Badge className="bg-green-600 text-white px-3 py-1 text-xs font-semibold shadow">
              Free
            </Badge>
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
            {material.title}
          </h3>
          {material.type === "Premium" && (
            <span title="Premium" className="ml-2">
              <svg
                width="16"
                height="16"
                fill="none"
                className="inline-block text-yellow-400"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M8 12.19l-4.472 2.352.855-4.987L1 5.94l5.014-.728L8 1l1.986 4.212L15 5.94l-3.383 3.615.855 4.987z"
                  fill="currentColor"
                />
              </svg>
            </span>
          )}
          {material.type === "Free" && (
            <span title="Free" className="ml-2">
              <svg 
                width="16" 
                height="16" 
                fill="none" 
                className="inline-block text-green-500" 
                viewBox="0 0 16 16" 
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M5.5 8.5l2 2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          )}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">
          {material.date} &bull; {material.format} &bull; {material.size}
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-2">{material.desc}</p>
        {material.type === "Free" ? (
          <Button variant="outline" size="sm" className="w-full mt-auto">
            Download
          </Button>
        ) : (
          <Button variant="secondary" size="sm" className="w-full mt-auto">
            Unlock Premium
          </Button>
        )}
      </div>
    </div>
  );
}

const StudyMaterial: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = search
    ? studyMaterials.filter((mat) =>
        mat.title.toLowerCase().includes(search.toLowerCase())
      )
    : studyMaterials;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-neutral-50 dark:bg-[#1a1f2c] transition-all">
      <div className="container-custom section-padding pb-4">
        <h1 className="text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-5 animate-fade-in">
          Study Material
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mb-8 animate-fade-in delay-300">
          Access our curated collection of resources to prepare for interviews, assessments, and enhance your technical skills.
        </p>

        {/* Search bar */}
        <div className="flex justify-center mb-6 animate-fade-in delay-400">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for study materials..."
              className="w-full rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </span>
          </div>
        </div>

        {/* Results/headline */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300 text-sm animate-fade-in delay-500">
            Showing {filtered.length} study material{filtered.length !== 1 && "s"}
          </span>
          <Button variant="outline" className="flex items-center gap-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white animate-fade-in delay-600">
            <Folder className="h-4 w-4" />
            Browse Categories
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mat) => (
            <MaterialCard material={mat} key={mat.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
