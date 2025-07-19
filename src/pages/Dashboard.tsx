
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";
import SectionHeading from "@/components/common/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  CreditCard, 
  User, 
  BookOpen, 
  Trophy, 
  Briefcase, 
  ClipboardCheck, 
  Target, 
  ChevronRight,
  CheckCircle,
  Clock,
  Star,
  TrendingUp,
  Award,
  Brain,
  FileText,
  Users,
  Zap,
  BarChart3,
  Code
} from "lucide-react";

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const navigate = useNavigate();

  // Mock data for comprehensive dashboard
  const [dashboardData] = useState({
    practiceProblems: [
      { id: 1, title: "Array Manipulation", difficulty: "Easy", solved: true, score: 95 },
      { id: 2, title: "Binary Tree Traversal", difficulty: "Medium", solved: true, score: 87 },
      { id: 3, title: "Dynamic Programming", difficulty: "Hard", solved: false, score: 0 },
      { id: 4, title: "Graph Algorithms", difficulty: "Hard", solved: false, score: 0 },
    ],
    myServices: [
      { id: 1, name: "Resume Review", status: "Active", nextSession: "May 15, 2025", progress: 75 },
      { id: 2, name: "Interview Preparation", status: "Completed", nextSession: "Completed", progress: 100 },
      { id: 3, name: "Career Guidance", status: "Upcoming", nextSession: "May 25, 2025", progress: 25 },
    ],
    jobApplications: [
      { id: 1, company: "Google", position: "Software Engineer", status: "Interview", appliedDate: "Apr 10" },
      { id: 2, company: "Microsoft", position: "Frontend Developer", status: "Applied", appliedDate: "Apr 15" },
      { id: 3, company: "Amazon", position: "Full Stack Developer", status: "Rejected", appliedDate: "Apr 5" },
    ],
    mockTests: [
      { id: 1, title: "JavaScript Fundamentals", score: 85, totalQuestions: 50, completedDate: "Apr 20" },
      { id: 2, title: "React Advanced", score: 92, totalQuestions: 40, completedDate: "Apr 18" },
      { id: 3, title: "System Design", score: 0, totalQuestions: 30, completedDate: null },
    ],
    mockAssessments: [
      { id: 1, title: "Technical Round - FAANG", score: 88, duration: "60 min", completedDate: "Apr 22" },
      { id: 2, title: "Behavioral Interview", score: 95, duration: "45 min", completedDate: "Apr 20" },
      { id: 3, title: "Coding Challenge", score: 0, duration: "90 min", completedDate: null },
    ]
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated && window.location.pathname === "/dashboard") {
      setLoginModalOpen(true);
    }
  }, [isAuthenticated]);

  // Calculate overall stats
  const stats = {
    problemsSolved: dashboardData.practiceProblems.filter(p => p.solved).length,
    totalProblems: dashboardData.practiceProblems.length,
    activeServices: dashboardData.myServices.filter(s => s.status === "Active").length,
    testsPassed: dashboardData.mockTests.filter(t => t.score > 0).length,
    avgScore: Math.round(dashboardData.mockTests.filter(t => t.score > 0).reduce((acc, t) => acc + t.score, 0) / dashboardData.mockTests.filter(t => t.score > 0).length) || 0,
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <section className="bg-brand-dark text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Your Dashboard</h1>
              <p className="text-lg text-gray-300">
                Login to view your bookings and manage your account.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="text-center py-16">
              <SectionHeading
                title="Please Login"
                subtitle="Login to view your dashboard and manage your bookings"
              />
              <div className="mt-8">
                <Button 
                  onClick={() => setLoginModalOpen(true)}
                  className="bg-brand-red hover:bg-red-700 text-white"
                  size="lg"
                >
                  Login with Phone
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <LoginModal 
          isOpen={loginModalOpen} 
          onClose={() => setLoginModalOpen(false)} 
        />
      </Layout>
    );
  }

  const renderDetailView = () => {
    if (!selectedSection) return null;

    switch (selectedSection) {
      case 'practiceProblems':
        return (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Practice Problems Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.practiceProblems.map((problem) => (
                  <div key={problem.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      {problem.solved ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      )}
                      <div>
                        <h4 className="font-medium">{problem.title}</h4>
                        <Badge variant={problem.difficulty === 'Easy' ? 'secondary' : problem.difficulty === 'Medium' ? 'default' : 'destructive'}>
                          {problem.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{problem.score}%</p>
                      <p className="text-sm text-muted-foreground">Score</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'myServices':
        return (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                My Services Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.myServices.map((service) => (
                  <div key={service.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{service.name}</h4>
                      <Badge variant={service.status === 'Active' ? 'default' : service.status === 'Completed' ? 'secondary' : 'outline'}>
                        {service.status}
                      </Badge>
                    </div>
                    <Progress value={service.progress} className="mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Progress: {service.progress}%</span>
                      <span>Next: {service.nextSession}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'jobApplications':
        return (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Job Applications Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.jobApplications.map((app) => (
                  <div key={app.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{app.company}</h4>
                        <p className="text-sm text-muted-foreground">{app.position}</p>
                      </div>
                      <Badge variant={app.status === 'Interview' ? 'default' : app.status === 'Applied' ? 'secondary' : 'destructive'}>
                        {app.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Applied: {app.appliedDate}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'mockTests':
        return (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" />
                Mock Tests Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.mockTests.map((test) => (
                  <div key={test.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{test.title}</h4>
                      {test.score > 0 ? (
                        <Badge variant={test.score >= 80 ? 'default' : 'secondary'}>
                          {test.score}% Score
                        </Badge>
                      ) : (
                        <Badge variant="outline">Not Taken</Badge>
                      )}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{test.totalQuestions} Questions</span>
                      <span>{test.completedDate || 'Pending'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'mockAssessments':
        return (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Mock Assessments Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.mockAssessments.map((assessment) => (
                  <div key={assessment.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{assessment.title}</h4>
                        <p className="text-sm text-muted-foreground">Duration: {assessment.duration}</p>
                      </div>
                      {assessment.score > 0 ? (
                        <Badge variant={assessment.score >= 85 ? 'default' : 'secondary'}>
                          {assessment.score}% Score
                        </Badge>
                      ) : (
                        <Badge variant="outline">Upcoming</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {assessment.completedDate ? `Completed: ${assessment.completedDate}` : 'Scheduled'}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Hero Section with Gradient */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mr-4">
                <User size={48} className="text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name || "User"}!</h1>
                <p className="text-xl text-white/90">Your learning journey continues</p>
              </div>
            </div>
            <p className="text-lg text-white/80 mb-8">
              Track your progress, manage your sessions, and achieve your career goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate("/book")} size="lg" className="bg-white text-primary hover:bg-white/90">
                <Calendar className="mr-2 h-5 w-5" />
                Book New Session
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-accent/5">
        <div className="container-custom max-w-7xl">
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{stats.problemsSolved}/{stats.totalProblems}</div>
                  <p className="text-sm text-muted-foreground">Problems Solved</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{stats.activeServices}</div>
                  <p className="text-sm text-muted-foreground">Active Services</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Trophy className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">{stats.testsPassed}</div>
                  <p className="text-sm text-muted-foreground">Tests Passed</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Star className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">{stats.avgScore}%</div>
                  <p className="text-sm text-muted-foreground">Avg Score</p>
                </CardContent>
              </Card>
            </div>

            {/* Milestone Progress */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Learning Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Complete 10 Practice Problems</span>
                    <Badge variant={stats.problemsSolved >= 10 ? "default" : "secondary"}>
                      {stats.problemsSolved}/10
                    </Badge>
                  </div>
                  <Progress value={(stats.problemsSolved / 10) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Achieve 90% Average Score</span>
                    <Badge variant={stats.avgScore >= 90 ? "default" : "secondary"}>
                      {stats.avgScore}/90%
                    </Badge>
                  </div>
                  <Progress value={Math.min((stats.avgScore / 90) * 100, 100)} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Main Dashboard Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Practice Problems */}
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105" 
                    onClick={() => setSelectedSection(selectedSection === 'practiceProblems' ? null : 'practiceProblems')}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                        <Code className="h-5 w-5 text-green-600" />
                      </div>
                      <span>Practice Problems</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Solved</span>
                      <span className="font-bold text-green-600">{stats.problemsSolved}/{stats.totalProblems}</span>
                    </div>
                    <Progress value={(stats.problemsSolved / stats.totalProblems) * 100} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Easy: 2</span>
                      <span className="text-yellow-600">Medium: 1</span>
                      <span className="text-red-600">Hard: 0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* My Services */}
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105" 
                    onClick={() => setSelectedSection(selectedSection === 'myServices' ? null : 'myServices')}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <span>My Services</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Active</span>
                      <span className="font-bold text-blue-600">{stats.activeServices}</span>
                    </div>
                    <div className="space-y-2">
                      {dashboardData.myServices.slice(0, 2).map((service) => (
                        <div key={service.id} className="flex justify-between text-sm">
                          <span className="truncate">{service.name}</span>
                          <Badge variant="outline" className="text-xs">{service.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Applications */}
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105" 
                    onClick={() => setSelectedSection(selectedSection === 'jobApplications' ? null : 'jobApplications')}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                        <Briefcase className="h-5 w-5 text-purple-600" />
                      </div>
                      <span>Job Applications</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="font-bold text-green-600">1</div>
                        <div className="text-xs text-muted-foreground">Interview</div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-600">1</div>
                        <div className="text-xs text-muted-foreground">Applied</div>
                      </div>
                      <div>
                        <div className="font-bold text-red-600">1</div>
                        <div className="text-xs text-muted-foreground">Rejected</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mock Tests */}
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105" 
                    onClick={() => setSelectedSection(selectedSection === 'mockTests' ? null : 'mockTests')}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                        <ClipboardCheck className="h-5 w-5 text-orange-600" />
                      </div>
                      <span>Mock Tests</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Completed</span>
                      <span className="font-bold text-orange-600">{stats.testsPassed}/3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Average Score</span>
                      <span className="font-bold text-orange-600">{stats.avgScore}%</span>
                    </div>
                    <Progress value={(stats.testsPassed / 3) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Mock Assessments */}
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105" 
                    onClick={() => setSelectedSection(selectedSection === 'mockAssessments' ? null : 'mockAssessments')}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                        <Target className="h-5 w-5 text-red-600" />
                      </div>
                      <span>Mock Assessments</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Completed</span>
                      <span className="font-bold text-red-600">2/3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Best Score</span>
                      <span className="font-bold text-red-600">95%</span>
                    </div>
                    <Progress value={66} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => navigate("/services")}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse Services
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => navigate("/jobs")}>
                      <Briefcase className="mr-2 h-4 w-4" />
                      Find Jobs
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => navigate("/study-material")}>
                      <FileText className="mr-2 h-4 w-4" />
                      Study Materials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detail View */}
            {renderDetailView()}

            {/* Logout Button */}
            <div className="text-center pt-8">
              <Button variant="outline" onClick={logout} className="hover:bg-destructive hover:text-destructive-foreground">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
