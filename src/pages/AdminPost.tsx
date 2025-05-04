
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Lock, FileText, Briefcase } from "lucide-react";
import AdminLogin from "@/components/admin/AdminLogin";
import JobPostForm from "@/components/admin/JobPostForm";
import BlogPostForm from "@/components/admin/BlogPostForm";
import SectionHeading from "@/components/common/SectionHeading";

const AdminPost = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'jobs' | 'blogs'>('jobs');
  const { toast } = useToast();

  const handleLogin = (username: string, password: string): boolean => {
    if (username === "apneblogs" && password === "apnecoders") {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      return true;
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
      return false;
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          {!isAuthenticated ? (
            <>
              <SectionHeading 
                title="Admin Login" 
                description="Please enter your credentials to access the admin dashboard."
                align="center"
              />
              <div className="max-w-md mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <AdminLogin onLogin={handleLogin} />
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <>
              <SectionHeading 
                title="Admin Dashboard" 
                description="Manage job postings and blog content."
                align="center"
              />
              <Card className="mb-8">
                <CardContent className="p-6">
                  <Tabs 
                    defaultValue="jobs" 
                    className="w-full"
                    onValueChange={(value) => setActiveTab(value as 'jobs' | 'blogs')}
                  >
                    <TabsList className="grid grid-cols-2 mb-8">
                      <TabsTrigger value="jobs" className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" /> Job Posts
                      </TabsTrigger>
                      <TabsTrigger value="blogs" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" /> Blog Posts
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="jobs">
                      <JobPostForm />
                    </TabsContent>

                    <TabsContent value="blogs">
                      <BlogPostForm />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminPost;
