
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Globe, Target, Eye, Clock, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{prefix}{count}{suffix}</span>;
};

const About = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-red/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full animate-float delay-500"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-brand-red/20 text-brand-red border-brand-red/30">
                Since 2018
              </Badge>
              <h1 className="heading-xl mb-6 text-gradient animate-glow">
                About Apne Wale Careers
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Founded with a mission to bridge the gap between education and industry requirements, 
                Apne Wale Careers has been helping tech professionals succeed since 2018. 
                We combine practical industry knowledge with personalized mentorship to 
                prepare you for the competitive tech landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-brand-red">
                  <CheckCircle className="h-5 w-5" />
                  <span>Expert Mentors</span>
                </div>
                <div className="flex items-center gap-2 text-brand-red">
                  <CheckCircle className="h-5 w-5" />
                  <span>5000+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2 text-brand-red">
                  <CheckCircle className="h-5 w-5" />
                  <span>Global Reach</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in delay-300">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-red to-pink-600 rounded-lg blur opacity-30 animate-pulse-slow"></div>
              <div className="relative glass rounded-lg p-1">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Team collaborating"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in hover-scale">
              <div className="text-4xl font-bold text-brand-red mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Success Stories</p>
            </div>
            <div className="animate-fade-in delay-200 hover-scale">
              <div className="text-4xl font-bold text-brand-red mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Expert Mentors</p>
            </div>
            <div className="animate-fade-in delay-400 hover-scale">
              <div className="text-4xl font-bold text-brand-red mb-2">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Countries</p>
            </div>
            <div className="animate-fade-in delay-600 hover-scale">
              <div className="text-4xl font-bold text-brand-red mb-2">
                <AnimatedCounter end={6} />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="What drives us every day to help tech professionals succeed"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift animate-fade-in overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-red/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-red/10 rounded-full text-brand-red">
                      <Target className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To empower tech professionals with the skills, knowledge, and confidence 
                    needed to succeed in their careers. We aim to democratize access to 
                    quality career guidance and interview preparation by making it affordable 
                    and accessible to all.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift animate-fade-in delay-200 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                      <Eye className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To become the most trusted career partner for tech professionals globally,
                    creating a world where every individual has the opportunity to achieve their
                    full potential in the tech industry regardless of their background or circumstances.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Journey"
            subtitle="From a small initiative to a leading career platform"
          />
          <div className="relative max-w-4xl mx-auto">
            {/* Enhanced timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-red via-purple-500 to-blue-500 opacity-30"></div>
            
            {/* Timeline items with enhanced animations */}
            <div className="space-y-16">
              {[
                { year: "2018", title: "Foundation", description: "Started as a weekend meetup group where senior developers helped juniors prepare for interviews.", side: "left" },
                { year: "2019", title: "First Office", description: "Opened our first small office in Bangalore and launched structured mock interview programs.", side: "right" },
                { year: "2020", title: "Going Digital", description: "Transitioned to a fully digital platform during the pandemic, expanding our reach nationwide.", side: "left" },
                { year: "2022", title: "Major Expansion", description: "Launched our job board and expanded our mentor network to include experts from FAANG companies.", side: "right" },
                { year: "2023", title: "International Reach", description: "Expanded globally with mentors and students from 20+ countries around the world.", side: "left" },
                { year: "Today", title: "Trusted Industry Partner", description: "Now a leading career platform with over 100+ expert mentors and 5000+ success stories.", side: "right" }
              ].map((item, index) => (
                <div key={item.year} className={`relative animate-fade-in delay-${index * 200} grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center`}>
                  {item.side === "left" ? (
                    <>
                      <Card className="hover-lift md:text-right">
                        <CardContent className="p-6">
                          <Badge className="mb-2 bg-brand-red text-white">{item.year}</Badge>
                          <h4 className="text-xl font-bold mb-3 text-brand-red">{item.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </CardContent>
                      </Card>
                      <div className="hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block"></div>
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <Badge className="mb-2 bg-brand-red text-white">{item.year}</Badge>
                          <h4 className="text-xl font-bold mb-3 text-brand-red">{item.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </CardContent>
                      </Card>
                    </>
                  )}
                  {/* Enhanced dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand-red shadow-lg animate-pulse-slow border-4 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate minds behind Apne Wale Careers"
          />
          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="leadership" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Leadership
              </TabsTrigger>
              <TabsTrigger value="mentors" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Expert Mentors
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="leadership">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Vikram Singh", role: "Founder & CEO", company: "Ex-Google", img: "https://randomuser.me/api/portraits/men/32.jpg" },
                  { name: "Ananya Mehta", role: "Co-Founder & CTO", company: "Ex-Microsoft", img: "https://randomuser.me/api/portraits/women/44.jpg" },
                  { name: "Rahul Kapoor", role: "Head of Operations", company: "Tech Recruitment Expert", img: "https://randomuser.me/api/portraits/men/67.jpg" }
                ].map((member, index) => (
                  <Card key={member.name} className="overflow-hidden hover-lift animate-fade-in group" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-brand-red mb-2">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{member.company}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mentors">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Priya Sharma", expertise: "Frontend Expert", company: "Google", img: "https://randomuser.me/api/portraits/women/68.jpg" },
                  { name: "Rohan Gupta", expertise: "Backend Expert", company: "Amazon", img: "https://randomuser.me/api/portraits/men/22.jpg" },
                  { name: "Neha Patel", expertise: "Data Science Expert", company: "Microsoft", img: "https://randomuser.me/api/portraits/women/89.jpg" },
                  { name: "Aditya Verma", expertise: "System Design Expert", company: "Netflix", img: "https://randomuser.me/api/portraits/men/78.jpg" }
                ].map((mentor, index) => (
                  <Card key={mentor.name} className="overflow-hidden hover-lift animate-fade-in group" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={mentor.img}
                        alt={mentor.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-brand-red text-white text-xs">{mentor.company}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-1">{mentor.name}</h3>
                      <p className="text-brand-red text-sm">{mentor.expertise}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Apne Wale Careers"
            subtitle="What sets us apart from other career platforms"
            align="center"
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: "Industry Expertise", description: "Our mentors are active professionals from top tech companies with real-world expertise.", color: "text-green-400" },
              { icon: Globe, title: "Global Reach", description: "Connect with mentors and peers from 20+ countries around the world.", color: "text-blue-400" },
              { icon: Users, title: "Personalized Feedback", description: "Get detailed, constructive feedback specifically tailored to your strengths and growth areas.", color: "text-purple-400" },
              { icon: Target, title: "Holistic Approach", description: "We focus on technical skills, soft skills, and interview strategies for well-rounded preparation.", color: "text-pink-400" },
              { icon: Clock, title: "Flexible Scheduling", description: "Book sessions at your convenience with our easy-to-use scheduling system.", color: "text-yellow-400" },
              { icon: BookOpen, title: "Comprehensive Resources", description: "Access a vast library of interview questions, coding challenges, and preparation materials.", color: "text-indigo-400" }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`flex flex-col items-center text-center p-6 glass rounded-lg hover-lift animate-fade-in delay-${index * 100}`}
              >
                <div className={`${feature.color} mb-4 p-3 bg-white/10 rounded-full`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
