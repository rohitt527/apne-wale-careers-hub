import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import TestimonialCard from "@/components/common/TestimonialCard";
import Counter from "@/components/common/Counter";
import JobCard from "@/components/common/JobCard";
import BlogCard from "@/components/common/BlogCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Mock data for blogs - Adding a small subset for home page display
const featuredBlogs = [
  {
    id: 1,
    title: "10 Essential Tips for Technical Interviews",
    excerpt: "Prepare for your next technical interview with these proven strategies and approaches that will help you stand out from the competition.",
    author: "Vikram Singh",
    date: "Apr 15, 2023",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Understanding System Design: A Beginner's Guide",
    excerpt: "System design is a critical skill for senior engineering roles. Learn the fundamental concepts and frameworks to approach any system design problem.",
    author: "Ananya Mehta",
    date: "Mar 22, 2023",
    category: "Tech Concepts",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "How I Landed My Dream Job at Google",
    excerpt: "A personal journey through the preparation, application, and interview process that led to a successful role at one of tech's biggest companies.",
    author: "Priya Sharma",
    date: "Mar 5, 2023",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const Home = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    
    if (email) {
      window.open(`mailto:apnewalecoders@gmail.com?subject=${encodeURIComponent('New Subscription')}&body=${encodeURIComponent(`New subscription from: ${email}`)}`);
      
      toast({
        title: "Subscribed!",
        description: "Thank you for joining our community!",
      });
      form.reset();
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="container-custom relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="heading-xl max-w-4xl animate-fade-in">
            Level Up Your Career with <span className="text-brand-red">Apne Wale Coders</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mt-6 mb-8 text-gray-200 animate-slide-up">
            Expert guidance, mock interviews, and placement support to help you succeed in your tech career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/book">Book Your Slot</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive career support to help you excel at every stage of your tech journey"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Assessment Support"
              description="Get expert help with your technical assessments and coding challenges to ace your interviews."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              }
              link="/services#assessment"
              features={[
                "Technical Assessment Reviews",
                "Problem-Solving Sessions",
                "Code Quality Analysis",
                "System Design Feedback"
              ]}
              image="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <ServiceCard
              title="Mock Interviews"
              description="Practice with industry experts who provide real-time feedback to improve your interview skills."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
                  <path d="m9 16 2 2 4-4"></path>
                </svg>
              }
              link="/services#interviews"
              features={[
                "Role-Specific Interviews",
                "Company-Specific Preparation",
                "Behavioral Interview Practice",
                "Detailed Performance Analysis"
              ]}
              image="https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <ServiceCard
              title="Career Guidance"
              description="Personalized advice on career paths, skill development, and job hunting strategies."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                  <path d="m9 16 2 2 4-4"></path>
                </svg>
              }
              link="/services#career"
              features={[
                "Resume & LinkedIn Reviews",
                "Career Path Mapping",
                "Salary Negotiation Advice",
                "Job Search Strategy"
              ]}
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-red text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Counter end={5000} suffix="+" />
              <p className="text-lg mt-2">Learners Helped</p>
            </div>
            <div>
              <Counter end={1200} suffix="+" />
              <p className="text-lg mt-2">Mock Interviews</p>
            </div>
            <div>
              <Counter end={850} suffix="+" />
              <p className="text-lg mt-2">Job Placements</p>
            </div>
            <div>
              <Counter end={98} suffix="%" />
              <p className="text-lg mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Featured Job Opportunities"
            subtitle="Explore the latest openings from top tech companies"
          />
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="remote">Remote</TabsTrigger>
              <TabsTrigger value="fulltime">Full Time</TabsTrigger>
              <TabsTrigger value="contract">Contract</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <JobCard
                id={1}
                title="Senior Frontend Developer"
                company="TechCorp Inc"
                location="Remote"
                type="Full-time"
                experience="3-5 years"
                logo="https://via.placeholder.com/100x100.png?text=TC"
                tags={["React", "TypeScript", "UI/UX"]}
                postedDate="2 days ago"
              />
              <JobCard
                id={2}
                title="Backend Engineer"
                company="DataSys Solutions"
                location="Bangalore, India"
                type="Full-time"
                experience="2-4 years"
                logo="https://via.placeholder.com/100x100.png?text=DS"
                tags={["Node.js", "MongoDB", "AWS"]}
                postedDate="1 week ago"
              />
            </TabsContent>
            <TabsContent value="remote" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <JobCard
                id={1}
                title="Senior Frontend Developer"
                company="TechCorp Inc"
                location="Remote"
                type="Full-time"
                experience="3-5 years"
                logo="https://via.placeholder.com/100x100.png?text=TC"
                tags={["React", "TypeScript", "UI/UX"]}
                postedDate="2 days ago"
              />
            </TabsContent>
            <TabsContent value="fulltime" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <JobCard
                id={1}
                title="Senior Frontend Developer"
                company="TechCorp Inc"
                location="Remote"
                type="Full-time"
                experience="3-5 years"
                logo="https://via.placeholder.com/100x100.png?text=TC"
                tags={["React", "TypeScript", "UI/UX"]}
                postedDate="2 days ago"
              />
              <JobCard
                id={2}
                title="Backend Engineer"
                company="DataSys Solutions"
                location="Bangalore, India"
                type="Full-time"
                experience="2-4 years"
                logo="https://via.placeholder.com/100x100.png?text=DS"
                tags={["Node.js", "MongoDB", "AWS"]}
                postedDate="1 week ago"
              />
            </TabsContent>
            <TabsContent value="contract" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 py-12 text-center text-gray-500">
                <p>No contract jobs available at the moment. Check back soon!</p>
              </div>
            </TabsContent>
          </Tabs>
          <div className="text-center">
            <Button asChild variant="outline" className="btn-outline">
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Latest Articles"
            subtitle="Career Insights & Technical Knowledge"
            description="Expert insights, career advice, and technical tutorials to help you advance in your tech career"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map(blog => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="block h-full">
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  author={blog.author}
                  date={blog.date}
                  category={blog.category}
                  image={blog.image}
                />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="btn-outline">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Success Stories"
            subtitle="Hear what our students have to say about their journey with us"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              role="Software Engineer"
              company="Google"
              testimonial="The mock interviews and assessment support from Apne Wale Coders were instrumental in my journey to landing a job at Google. Their feedback was specific and actionable."
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <TestimonialCard
              name="Raj Kumar"
              role="Frontend Developer"
              company="Microsoft"
              testimonial="I was struggling with system design interviews until I joined their interview preparation program. The mentors provided incredible insights that helped me ace my interviews."
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard
              name="Neha Patel"
              role="Data Scientist"
              company="Amazon"
              testimonial="The career guidance I received was personalized and practical. They helped me pivot from a traditional IT role to becoming a data scientist at Amazon."
              image="https://randomuser.me/api/portraits/women/68.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to receive the latest job opportunities, tech insights, and career advice
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="bg-brand-red hover:bg-red-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
