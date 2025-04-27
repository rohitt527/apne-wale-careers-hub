
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import BlogCard from "@/components/common/BlogCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock data for blogs
const blogData = [
  {
    id: 1,
    title: "10 Essential Tips for Technical Interviews",
    excerpt: "Prepare for your next technical interview with these proven strategies and approaches that will help you stand out from the competition.",
    author: "Vikram Singh",
    date: "Apr 15, 2023",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["interviews", "career", "technical"]
  },
  {
    id: 2,
    title: "Understanding System Design: A Beginner's Guide",
    excerpt: "System design is a critical skill for senior engineering roles. Learn the fundamental concepts and frameworks to approach any system design problem.",
    author: "Ananya Mehta",
    date: "Mar 22, 2023",
    category: "Tech Concepts",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["system design", "architecture", "interviews"]
  },
  {
    id: 3,
    title: "How I Landed My Dream Job at Google",
    excerpt: "A personal journey through the preparation, application, and interview process that led to a successful role at one of tech's biggest companies.",
    author: "Priya Sharma",
    date: "Mar 5, 2023",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["google", "interviews", "career"]
  },
  {
    id: 4,
    title: "5 Algorithm Patterns You Must Know",
    excerpt: "Master these core algorithmic patterns to solve a wide variety of coding problems efficiently during your technical interviews.",
    author: "Rahul Kapoor",
    date: "Feb 18, 2023",
    category: "Coding",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["algorithms", "coding", "interviews"]
  },
  {
    id: 5,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is transforming the software development landscape and what skills engineers need to stay relevant.",
    author: "Neha Patel",
    date: "Feb 8, 2023",
    category: "Tech Trends",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["ai", "future tech", "career"]
  },
  {
    id: 6,
    title: "Building a Strong Tech Portfolio",
    excerpt: "Learn how to create an impressive portfolio that showcases your skills and helps you stand out in the competitive tech job market.",
    author: "Aditya Verma",
    date: "Jan 25, 2023",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["portfolio", "career", "advice"]
  }
];

// All categories from blogs
const allCategories = Array.from(new Set(blogData.map(blog => blog.category)));

// All tags from blogs
const allTags = Array.from(new Set(blogData.flatMap(blog => blog.tags)));

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter blogs based on search query, category, and tag
  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = searchQuery === "" || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || blog.category === selectedCategory;
    
    const matchesTag = selectedTag === null || blog.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Blog & Articles</h1>
            <p className="text-lg text-gray-300 mb-8">
              Expert insights, career advice, and technical tutorials to help you advance in your tech career
            </p>
            <div className="relative max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search articles..."
                className="pr-10 bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-8">
                  <h3 className="font-bold text-xl mb-4">Categories</h3>
                  <div className="flex flex-col space-y-2">
                    <Button 
                      variant="ghost" 
                      className={`justify-start ${selectedCategory === null ? 'text-brand-red' : ''}`}
                      onClick={() => setSelectedCategory(null)}
                    >
                      All Categories
                    </Button>
                    {allCategories.map(category => (
                      <Button 
                        key={category} 
                        variant="ghost" 
                        className={`justify-start ${selectedCategory === category ? 'text-brand-red' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-bold text-xl mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`cursor-pointer hover:bg-brand-red/10 ${selectedTag === tag ? 'bg-brand-red/10 border-brand-red text-brand-red' : ''}`}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="font-bold text-xl mb-4">Newsletter</h3>
                  <p className="text-gray-600 mb-4">Subscribe to receive our latest articles and career tips</p>
                  <div className="space-y-3">
                    <Input placeholder="Your email" />
                    <Button className="w-full btn-primary">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {filteredBlogs.length > 0 ? (
                <>
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold">
                        {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
                      </h2>
                      <p className="text-gray-500">
                        {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    {(selectedCategory || selectedTag) && (
                      <Button 
                        variant="ghost" 
                        onClick={() => {
                          setSelectedCategory(null);
                          setSelectedTag(null);
                        }}
                      >
                        Clear Filters
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredBlogs.map(blog => (
                      <BlogCard
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        author={blog.author}
                        date={blog.date}
                        category={blog.category}
                        image={blog.image}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                  <Button 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                      setSelectedTag(null);
                    }}
                  >
                    Reset All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
