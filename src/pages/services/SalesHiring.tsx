
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';

const SalesHiring = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 relative">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1566054757965-8c4085344c96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
            alt="Sales hiring" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales Hiring</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Find and hire the right sales talent to build high-performing teams that drive sustainable growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Why Sales Hiring Matters</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-4">
                The right sales team can transform your business, but finding the perfect fit is challenging. Sales roles have one of the highest turnover rates across industries, with the wrong hire costing companies time, resources, and missed opportunities.
              </p>
              <p className="text-gray-700 mb-4">
                Our specialized sales recruitment process is designed to identify candidates who not only have the right skills and experience but also align with your company culture and values. We focus on long-term success, not just filling positions.
              </p>
              <p className="text-gray-700">
                With our proven methodology, we help you build sales teams that consistently deliver results, reduce turnover, and drive sustainable growth for your business.
              </p>
            </div>
            
            <div className="animate-on-scroll service-image-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Sales hiring professional" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive approach to finding your ideal sales candidates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">1. Understanding Client Needs</h3>
              <p className="text-gray-700 mb-4">
                We start by deeply understanding your company, culture, and specific requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>In-depth discussions with leadership and sales management</li>
                <li>Analysis of your sales process and methodology</li>
                <li>Identification of critical skills and attributes for success</li>
                <li>Clear definition of role expectations and performance metrics</li>
                <li>Understanding of your company culture and team dynamics</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">2. Comprehensive Candidate Sourcing</h3>
              <p className="text-gray-700 mb-4">
                We leverage multiple channels to identify top sales talent:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Proprietary database of pre-screened sales professionals</li>
                <li>Targeted headhunting for passive candidates</li>
                <li>Industry-specific networking and referral programs</li>
                <li>Strategic job postings on specialized platforms</li>
                <li>Social media recruitment campaigns</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">3. Qualification and Screening</h3>
              <p className="text-gray-700 mb-4">
                Our rigorous evaluation process ensures only the best candidates reach you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Multi-stage interview process with sales-specific scenarios</li>
                <li>Skills assessment and role-playing exercises</li>
                <li>Personality and cultural fit assessment</li>
                <li>Track record verification and performance validation</li>
                <li>Comprehensive reference checks</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4">4. Ongoing Support</h3>
              <p className="text-gray-700 mb-4">
                Our commitment extends beyond the hire:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Structured onboarding guidance and best practices</li>
                <li>30-60-90 day performance check-ins</li>
                <li>Feedback loop with hiring managers and new hires</li>
                <li>Adjustment coaching when needed</li>
                <li>Replacement guarantee for additional security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Sales Hiring Service</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Reduced Time-to-Hire</h3>
              <p className="text-gray-700">
                Our specialized focus on sales roles streamlines the recruitment process, getting your team up to full strength faster.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-3">Higher Quality Candidates</h3>
              <p className="text-gray-700">
                Our rigorous screening process identifies sales professionals with proven track records and the right cultural fit.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-3">Improved Retention</h3>
              <p className="text-gray-700">
                By matching candidates to your specific environment, we help reduce costly turnover and build long-term sales teams.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-3">Enhanced Performance</h3>
              <p className="text-gray-700">
                Our candidates hit the ground running, achieving quota faster and contributing to team success earlier.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.4s" }}>
              <h3 className="text-lg font-bold mb-3">Competitive Intelligence</h3>
              <p className="text-gray-700">
                Gain insights into market compensation trends and talent availability to inform your hiring strategy.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.5s" }}>
              <h3 className="text-lg font-bold mb-3">Scalable Solutions</h3>
              <p className="text-gray-700">
                Whether you need one key hire or an entire team, our process scales to meet your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Sales Team?</h2>
            <p className="text-xl mb-8">
              Let's discuss your sales hiring needs and how we can help you find the perfect candidates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules', '_blank')}
                className="bg-white text-black hover:bg-gray-200 transition-colors"
              >
                Book an Appointment
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SalesHiring;
