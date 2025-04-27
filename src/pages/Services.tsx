
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 mb-8">
              We offer comprehensive career support services designed to help you excel at every stage of your tech career journey.
            </p>
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700">
              <Link to="/book">Book a Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Assessment Support */}
      <section id="assessment" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Assessment Support"
                subtitle="Get expert help with your technical assessments and coding challenges"
                align="left"
              />
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Technical Assessment Reviews</h3>
                    <p className="text-gray-600">Get detailed feedback on your take-home coding challenges and technical assessments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Problem-Solving Sessions</h3>
                    <p className="text-gray-600">Interactive sessions to improve your approach to complex coding problems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Code Quality Analysis</h3>
                    <p className="text-gray-600">Expert review of your code for best practices, patterns, and optimization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">System Design Feedback</h3>
                    <p className="text-gray-600">Comprehensive review of your system design solutions and architecture decisions.</p>
                  </div>
                </div>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/book">Book Assessment Support</Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -bottom-6 bg-brand-red/20 w-64 h-64 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Assessment Support"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mock Interviews */}
      <section id="interviews" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -left-6 -top-6 bg-brand-red/20 w-64 h-64 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Mock Interviews"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Mock Interviews"
                subtitle="Practice with industry experts and receive real-time feedback"
                align="left"
              />
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Role-Specific Interviews</h3>
                    <p className="text-gray-600">Tailored mock interviews for frontend, backend, full stack, data science positions and more.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Company-Specific Preparation</h3>
                    <p className="text-gray-600">Specialized mock interviews based on the format and requirements of your target company.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Behavioral Interview Practice</h3>
                    <p className="text-gray-600">Practice answering common behavioral questions with structured feedback on your responses.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-red text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Detailed Performance Analysis</h3>
                    <p className="text-gray-600">Comprehensive feedback report with specific areas of improvement and strengths.</p>
                  </div>
                </div>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/book">Schedule Mock Interview</Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Preparation */}
      <section id="preparation" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Interview Preparation"
            subtitle="Comprehensive resources and guidance to excel in technical interviews"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="card-hover">
              <CardHeader>
                <div className="text-brand-red text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 3 4 9-4 9 15-9-15-9Z"></path>
                  </svg>
                </div>
                <CardTitle>Weekly Prep Series</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>Group sessions focusing on specific interview topics each week, with live problem-solving and discussions.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>System Design Principles</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Frontend Concepts</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Database Optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full btn-outline">
                  <Link to="/book">Join Next Session</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <div className="text-brand-red text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="m9 14 2 2 4-4"></path>
                  </svg>
                </div>
                <CardTitle>Question Bank Access</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>Comprehensive collection of company-specific questions with detailed explanations and optimal solutions.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>1000+ Coding Questions</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>200+ System Design Problems</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>150+ Behavioral Question Templates</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Company-Specific Collections</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full btn-outline">
                  <Link to="/resources">Access Question Bank</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <div className="text-brand-red text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M16 13a2 2 0 0 1-2 2H9.5a2.5 2.5 0 0 1 0-5H12a2 2 0 0 0 0-4H9"></path>
                  </svg>
                </div>
                <CardTitle>1:1 Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>Personalized guidance from industry experts with customized preparation plans and regular progress tracking.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Tailored Study Plans</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Weekly Check-ins</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Personalized Feedback</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-brand-red mr-2" />
                    <span>Interview Strategy Development</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full btn-outline">
                  <Link to="/book">Request Mentor</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Guidance & Project Help */}
      <section id="career" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Career Guidance"
                subtitle="Navigate your tech career with expert advice"
                align="left"
              />
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Resume & LinkedIn Reviews</h3>
                      <p className="text-gray-600">Get your resume and LinkedIn profile optimized for maximum impact.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Career Path Mapping</h3>
                      <p className="text-gray-600">Personalized roadmaps for your career growth and skill development.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Salary Negotiation Advice</h3>
                      <p className="text-gray-600">Learn effective strategies to maximize your compensation packages.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Job Search Strategy</h3>
                      <p className="text-gray-600">Develop effective approaches to finding and securing your ideal role.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="btn-primary">
                    <Link to="/book">Get Career Guidance</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="projects">
              <SectionHeading
                title="Project Help"
                subtitle="Get expert assistance with your coding projects"
                align="left"
              />
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Code Reviews</h3>
                      <p className="text-gray-600">Detailed review of your project code with best practices recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Architecture Consulting</h3>
                      <p className="text-gray-600">Expert guidance on system architecture and design decisions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Debugging Sessions</h3>
                      <p className="text-gray-600">Live troubleshooting assistance for complex bugs and issues.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-brand-red text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Project Planning</h3>
                      <p className="text-gray-600">Help with scoping, timeline estimation, and technology selection.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="btn-primary">
                    <Link to="/book">Request Project Help</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-red text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Level Up Your Career?</h2>
            <p className="text-lg mb-8">
              Book your first session today and experience the difference expert guidance can make in your tech career journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-brand-red hover:bg-gray-100">
                <Link to="/book">Book a Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
