
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import BlogCard from "@/components/common/BlogCard";

// Sample data - in a real app, you'd fetch this from an API
const blogData = [
  {
    id: 1,
    title: "How to Prepare for Technical Interviews",
    excerpt: "Learn effective strategies and tips to ace your next technical interview.",
    author: "Priya Sharma",
    date: "May 5, 2023",
    category: "Career Advice",
    image: "/placeholder.svg",
    tags: ["interview", "career", "tech"]
  },
  {
    id: 2,
    title: "Building Your Personal Brand as a Developer",
    excerpt: "Discover how to create a strong personal brand that sets you apart in the tech industry.",
    author: "Rahul Verma",
    date: "April 22, 2023",
    category: "Professional Growth",
    image: "/placeholder.svg",
    tags: ["branding", "career", "development"]
  },
  {
    id: 3,
    title: "The Future of Remote Work in Tech",
    excerpt: "Exploring how remote work is shaping the future of the tech industry and what it means for professionals.",
    author: "Amit Patel",
    date: "April 10, 2023",
    category: "Industry Trends",
    image: "/placeholder.svg",
    tags: ["remote work", "future", "tech industry"]
  }
];

const Blog = () => {
  const { isAdmin } = useAuth();
  
  return (
    <Layout>
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg text-gray-300">
              Insights, tips, and stories to help you grow in your career
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <SectionHeading 
              title="Latest Articles" 
              subtitle="Read our most recent posts"
            />
            
            {isAdmin && (
              <Link to="/blog/create">
                <Button className="bg-brand-red hover:bg-red-700 text-white">
                  Create New Blog Post
                </Button>
              </Link>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
