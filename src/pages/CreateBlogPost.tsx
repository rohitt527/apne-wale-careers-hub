
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { AdminAuth } from "@/components/admin/AdminAuth";
import BlogPostForm from "@/components/admin/BlogPostForm";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const CreateBlogPost = () => {
  const { isAdmin, adminLogout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Create New Blog Post" 
            subtitle="Share insights and knowledge with the Apne Wale community"
            align="center"
          />
          
          {isAdmin && (
            <div className="flex justify-end mb-6 gap-4">
              <Button 
                variant="outline"
                onClick={() => navigate("/jobs/create")}
              >
                Switch to Job Post
              </Button>
              <Button 
                variant="destructive"
                onClick={() => {
                  adminLogout();
                  navigate("/blog");
                }}
              >
                Admin Logout
              </Button>
            </div>
          )}
          
          <AdminAuth>
            <BlogPostForm />
          </AdminAuth>
        </div>
      </section>
    </Layout>
  );
};

export default CreateBlogPost;
