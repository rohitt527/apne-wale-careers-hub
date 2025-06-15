
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AdminAuth } from "@/components/admin/AdminAuth";
import { FileText, Briefcase, LogOut } from "lucide-react";

const AdminPost = () => {
  const { adminLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate("/");
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <SectionHeading 
              title="Admin Panel" 
              subtitle="Manage jobs and blog posts"
              align="center"
            />
            <Button 
              variant="destructive"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
          
          <AdminAuth>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="bg-brand-red/10 p-4 rounded-full inline-block mb-4">
                      <Briefcase className="h-8 w-8 text-brand-red" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Post a Job</h3>
                    <p className="text-gray-600 mb-6">
                      Create and publish new job opportunities for the community
                    </p>
                    <Button 
                      className="w-full bg-brand-red hover:bg-red-700 text-white"
                      onClick={() => navigate("/jobs/create")}
                    >
                      Create Job Post
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="bg-blue-500/10 p-4 rounded-full inline-block mb-4">
                      <FileText className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Write a Blog</h3>
                    <p className="text-gray-600 mb-6">
                      Share insights and knowledge with the community
                    </p>
                    <Button 
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => navigate("/blog/create")}
                    >
                      Create Blog Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AdminAuth>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPost;
