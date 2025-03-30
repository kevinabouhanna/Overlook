import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import SalesHiring from "@/pages/services/SalesHiring";
import SalesTraining from "@/pages/services/SalesTraining";
import SalesProcess from "@/pages/services/SalesProcess";
import PerformanceMetrics from "@/pages/services/PerformanceMetrics";
import Contact from "@/pages/Contact";
import Cookies from "@/pages/legal/Cookies";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import Terms from "@/pages/legal/Terms";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sales-hiring" element={<SalesHiring />} />
          <Route path="/services/sales-training" element={<SalesTraining />} />
          <Route path="/services/sales-process" element={<SalesProcess />} />
          <Route path="/services/performance-metrics" element={<PerformanceMetrics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
