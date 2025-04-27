
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">About Apne Wale Careers</h1>
              <p className="text-gray-300 text-lg">
                Founded with a mission to bridge the gap between education and industry requirements, 
                Apne Wale Careers has been helping tech professionals succeed since 2018. 
                We combine practical industry knowledge with personalized mentorship to 
                prepare you for the competitive tech landscape.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-red rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brand-red rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team collaborating"
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="What drives us every day to help tech professionals succeed"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="text-brand-red mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower tech professionals with the skills, knowledge, and confidence 
                    needed to succeed in their careers. We aim to democratize access to 
                    quality career guidance and interview preparation by making it affordable 
                    and accessible to all.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="text-brand-red mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-700">
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

      {/* Our Journey */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Journey"
            subtitle="From a small initiative to a leading career platform"
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-brand-red opacity-20"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2018 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold text-brand-red">2018</h3>
                  <h4 className="text-lg font-semibold mb-2">Foundation</h4>
                  <p className="text-gray-600">
                    Started as a weekend meetup group where senior developers helped juniors prepare for interviews.
                  </p>
                </div>
                <div className="hidden md:block"></div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-red"></div>
              </div>
              
              {/* 2019 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="hidden md:block"></div>
                <div>
                  <h3 className="text-xl font-bold text-brand-red">2019</h3>
                  <h4 className="text-lg font-semibold mb-2">First Office</h4>
                  <p className="text-gray-600">
                    Opened our first small office in Bangalore and launched structured mock interview programs.
                  </p>
                </div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-red"></div>
              </div>
              
              {/* 2020 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold text-brand-red">2020</h3>
                  <h4 className="text-lg font-semibold mb-2">Going Digital</h4>
                  <p className="text-gray-600">
                    Transitioned to a fully digital platform during the pandemic, expanding our reach nationwide.
                  </p>
                </div>
                <div className="hidden md:block"></div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-red"></div>
              </div>
              
              {/* 2022 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="hidden md:block"></div>
                <div>
                  <h3 className="text-xl font-bold text-brand-red">2022</h3>
                  <h4 className="text-lg font-semibold mb-2">Major Expansion</h4>
                  <p className="text-gray-600">
                    Launched our job board and expanded our mentor network to include experts from FAANG companies.
                  </p>
                </div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-red"></div>
              </div>
              
              {/* 2023 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold text-brand-red">2023</h3>
                  <h4 className="text-lg font-semibold mb-2">International Reach</h4>
                  <p className="text-gray-600">
                    Expanded globally with mentors and students from 20+ countries around the world.
                  </p>
                </div>
                <div className="hidden md:block"></div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-red"></div>
              </div>
              
              {/* Present */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="hidden md:block"></div>
                <div>
                  <h3 className="text-xl font-bold text-brand-red">Today</h3>
                  <h4 className="text-lg font-semibold mb-2">Trusted Industry Partner</h4>
                  <p className="text-gray-600">
                    Now a leading career platform with over 100+ expert mentors and 5000+ success stories.
                  </p>
                </div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-red"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate minds behind Apne Wale Careers"
          />
          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="mentors">Expert Mentors</TabsTrigger>
            </TabsList>
            <TabsContent value="leadership">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Founder */}
                <Card className="overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">Vikram Singh</h3>
                    <p className="text-brand-red mb-3">Founder & CEO</p>
                    <p className="text-gray-600">
                      Ex-Google engineer with a passion for mentoring and 10+ years of industry experience.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Co-Founder */}
                <Card className="overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Co-Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">Ananya Mehta</h3>
                    <p className="text-brand-red mb-3">Co-Founder & CTO</p>
                    <p className="text-gray-600">
                      Former tech lead at Microsoft with expertise in system design and architecture.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Head of Operations */}
                <Card className="overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                      alt="Head of Operations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">Rahul Kapoor</h3>
                    <p className="text-brand-red mb-3">Head of Operations</p>
                    <p className="text-gray-600">
                      Former HR manager with extensive experience in tech recruitment and career development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="mentors">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Mentor 1 */}
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Mentor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">Priya Sharma</h3>
                    <p className="text-brand-red mb-2">Frontend Expert</p>
                    <p className="text-gray-600 text-sm">Google</p>
                  </CardContent>
                </Card>
                
                {/* Mentor 2 */}
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/22.jpg"
                      alt="Mentor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">Rohan Gupta</h3>
                    <p className="text-brand-red mb-2">Backend Expert</p>
                    <p className="text-gray-600 text-sm">Amazon</p>
                  </CardContent>
                </Card>
                
                {/* Mentor 3 */}
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/89.jpg"
                      alt="Mentor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">Neha Patel</h3>
                    <p className="text-brand-red mb-2">Data Science Expert</p>
                    <p className="text-gray-600 text-sm">Microsoft</p>
                  </CardContent>
                </Card>
                
                {/* Mentor 4 */}
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/78.jpg"
                      alt="Mentor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">Aditya Verma</h3>
                    <p className="text-brand-red mb-2">System Design Expert</p>
                    <p className="text-gray-600 text-sm">Netflix</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Apne Wale Careers"
            subtitle="What sets us apart from other career platforms"
            align="center"
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
              <p className="text-gray-300">
                Our mentors are active professionals from top tech companies with real-world expertise.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
              <p className="text-gray-300">
                Quality career guidance shouldn't be expensive. Our services are priced to be accessible.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Feedback</h3>
              <p className="text-gray-300">
                Get detailed, constructive feedback specifically tailored to your strengths and growth areas.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Holistic Approach</h3>
              <p className="text-gray-300">
                We focus on technical skills, soft skills, and interview strategies for well-rounded preparation.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
              <p className="text-gray-300">
                Book sessions at your convenience with our easy-to-use scheduling system.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive Resources</h3>
              <p className="text-gray-300">
                Access a vast library of interview questions, coding challenges, and preparation materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
