
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { AdminAuth } from "@/components/admin/AdminAuth";
import JobPostForm from "@/components/admin/JobPostForm";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const CreateJobPost = () => {
  const { isAdmin, adminLogout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Create New Job Post" 
            subtitle="Add job opportunities to help Apne Wale community find employment"
            align="center"
          />
          
          {isAdmin && (
            <div className="flex justify-end mb-6 gap-4">
              <Button 
                variant="outline"
                onClick={() => navigate("/blog/create")}
              >
                Switch to Blog Post
              </Button>
              <Button 
                variant="destructive"
                onClick={() => {
                  adminLogout();
                  navigate("/jobs");
                }}
              >
                Admin Logout
              </Button>
            </div>
          )}
          
          <AdminAuth>
            <JobPostForm />
          </AdminAuth>
        </div>
      </section>
    </Layout>
  );
};

export default CreateJobPost;
