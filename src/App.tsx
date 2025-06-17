
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Book from "@/pages/Book";
import BookingFlow from "@/pages/BookingFlow";
import Payment from "@/pages/Payment";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Jobs from "@/pages/Jobs";
import JobDetail from "@/pages/JobDetail";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/NotFound";
import AdminPost from "@/pages/AdminPost";
import Dashboard from "@/pages/Dashboard";
import CreateJobPost from "@/pages/CreateJobPost";
import CreateBlogPost from "@/pages/CreateBlogPost";
import StudyMaterial from "@/pages/StudyMaterial";
import StudyMaterialDetail from "@/pages/StudyMaterialDetail";
import PremiumContent from "@/pages/PremiumContent";
import { AuthProvider } from "@/contexts/AuthContext";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/book" element={<Book />} />
              <Route path="/booking" element={<BookingFlow />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/create" element={<CreateJobPost />} />
              <Route path="/job/:id" element={<JobDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/create" element={<CreateBlogPost />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/admin-post" element={<AdminPost />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/study-material" element={<StudyMaterial />} />
              <Route path="/study-material/:id" element={<StudyMaterialDetail />} />
              <Route path="/premium-content" element={<PremiumContent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
