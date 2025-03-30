
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';

const SalesTraining = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 relative">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="/images/sales-training-hero.jpg" 
            alt="Sales training session" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales Training & Coaching</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Develop your sales team's skills and capabilities with customized training programs and ongoing coaching.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Transform Your Sales Team</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-4">
                Even the most talented sales professionals need ongoing development to stay at the top of their game. In today's rapidly evolving marketplace, yesterday's sales techniques may not deliver tomorrow's results.
              </p>
              <p className="text-gray-700 mb-4">
                Our sales training and coaching programs go beyond generic sales seminars. We create targeted, practical learning experiences that address your specific industry challenges, customer dynamics, and competitive landscape.
              </p>
              <p className="text-gray-700">
                By combining proven sales methodologies with customized content and ongoing reinforcement, we help your team develop the skills, confidence, and behaviors needed to consistently exceed targets.
              </p>
            </div>
            
            <div className="animate-on-scroll service-image-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/sales-training-detail.jpg" 
                alt="Sales training session" 
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
            <h2 className="text-3xl font-bold mb-4">Our Training Approach</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive development that delivers lasting results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">1. Customized Training Programs</h3>
              <p className="text-gray-700 mb-4">
                We design training that addresses your specific needs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Comprehensive needs assessment and gap analysis</li>
                <li>Industry-specific content and case studies</li>
                <li>Tailored curriculum based on your sales process</li>
                <li>Customized role-playing scenarios using your products</li>
                <li>Flexible delivery methods (in-person, virtual, hybrid)</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">2. Practical Skills Development</h3>
              <p className="text-gray-700 mb-4">
                Our training focuses on building actionable skills:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Consultative selling and needs-based discovery</li>
                <li>Effective questioning and active listening</li>
                <li>Handling objections and negotiation techniques</li>
                <li>Value proposition articulation and storytelling</li>
                <li>Remote selling and virtual presentation skills</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">3. Ongoing Coaching and Feedback</h3>
              <p className="text-gray-700 mb-4">
                We provide continuous support to reinforce skills:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Regular one-on-one coaching sessions</li>
                <li>Call reviews and real-time feedback</li>
                <li>Deal strategy sessions and opportunity coaching</li>
                <li>Sales manager enablement and coaching skills</li>
                <li>Continuous learning and development plans</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4">4. Measurable Outcomes and KPIs</h3>
              <p className="text-gray-700 mb-4">
                We track progress and demonstrate ROI:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Defined success metrics aligned with business goals</li>
                <li>Regular performance assessment and benchmarking</li>
                <li>Behavior change measurement and adoption tracking</li>
                <li>Progress reporting and ROI analysis</li>
                <li>Continuous program refinement based on results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Training Programs We Offer</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">New Hire Onboarding</h3>
              <p className="text-gray-700">
                Accelerate time-to-productivity for new sales team members with structured onboarding that covers your products, processes, and selling methodology.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-3">Consultative Selling</h3>
              <p className="text-gray-700">
                Develop advanced questioning and listening skills to uncover customer needs, build trust, and position solutions effectively.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-3">Sales Leadership Development</h3>
              <p className="text-gray-700">
                Equip your sales managers with the skills to coach effectively, manage performance, and build high-performing teams.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-3">Negotiation Mastery</h3>
              <p className="text-gray-700">
                Strengthen your team's ability to negotiate effectively, maintain margins, and create win-win outcomes with customers.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.4s" }}>
              <h3 className="text-lg font-bold mb-3">Virtual Selling</h3>
              <p className="text-gray-700">
                Master the unique skills required for effective remote selling, including virtual presentations and digital engagement.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.5s" }}>
              <h3 className="text-lg font-bold mb-3">Account Management</h3>
              <p className="text-gray-700">
                Develop strategies for growing existing accounts, identifying expansion opportunities, and building long-term customer relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Sales Team?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our training and coaching programs can help your team achieve breakthrough performance.
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

export default SalesTraining;
