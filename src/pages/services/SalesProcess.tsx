
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';

const SalesProcess = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 relative">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="/images/sales-process-hero.jpg" 
            alt="Sales process planning" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales Process & Strategy</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Optimize your sales approach and methodologies for improved performance and sustainable growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Optimize Your Sales Strategy</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-4">
                Even with the best sales talent, an inefficient or outdated sales process can limit your team's success. Today's buyers expect a seamless, value-driven experience that addresses their specific needs and challenges.
              </p>
              <p className="text-gray-700 mb-4">
                Our sales process and strategy services help you build a repeatable, scalable approach that aligns with how your customers buy. We combine proven methodologies with customized strategies that reflect your unique value proposition and market position.
              </p>
              <p className="text-gray-700">
                From initial lead generation to closed deals and customer success, we help you create a comprehensive framework that maximizes efficiency, effectiveness, and revenue growth.
              </p>
            </div>
            
            <div className="animate-on-scroll service-image-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/sales-process-detail.jpg" 
                alt="Sales process strategy session" 
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
            <h2 className="text-3xl font-bold mb-4">Our Approach to Sales Process</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A structured methodology to optimize your sales operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">1. Assessment of Current Sales Processes</h3>
              <p className="text-gray-700 mb-4">
                We begin by thoroughly analyzing your existing approach:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Comprehensive sales process audit and mapping</li>
                <li>Evaluation of tools, technology, and CRM utilization</li>
                <li>Analysis of current metrics and performance indicators</li>
                <li>Identification of bottlenecks and friction points</li>
                <li>Customer journey mapping and alignment</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">2. Customized Sales Strategy Development</h3>
              <p className="text-gray-700 mb-4">
                We create a tailored approach designed for your specific needs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Target market and ideal customer profile development</li>
                <li>Value proposition and messaging frameworks</li>
                <li>Sales methodology selection and customization</li>
                <li>Sales playbook creation and documentation</li>
                <li>Territory and account planning strategies</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">3. Sales Funnel Optimization</h3>
              <p className="text-gray-700 mb-4">
                We refine each stage of your sales process for maximum conversion:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Lead generation and qualification frameworks</li>
                <li>Discovery and needs assessment protocols</li>
                <li>Solution presentation and demonstration techniques</li>
                <li>Objection handling and negotiation strategies</li>
                <li>Closing techniques and follow-up processes</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4">4. Technology and Tools Integration</h3>
              <p className="text-gray-700 mb-4">
                We leverage technology to enhance efficiency and results:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>CRM configuration and optimization</li>
                <li>Sales enablement tool selection and implementation</li>
                <li>Marketing and sales alignment strategies</li>
                <li>Social selling and digital engagement approaches</li>
                <li>Automation opportunities for repetitive tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Benefits of Process Optimization</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Increased Win Rates</h3>
              <p className="text-gray-700">
                A structured, repeatable sales process typically increases win rates by 15-30% by ensuring consistent execution of proven approaches.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-3">Shortened Sales Cycles</h3>
              <p className="text-gray-700">
                Streamlined processes and clear next steps reduce delays and accelerate deals through your pipeline.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-3">Improved Forecast Accuracy</h3>
              <p className="text-gray-700">
                Defined stages and milestones create more predictable outcomes and reliable revenue projections.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-3">Enhanced Customer Experience</h3>
              <p className="text-gray-700">
                Buyer-aligned processes create a more seamless, value-focused experience that builds trust and loyalty.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.4s" }}>
              <h3 className="text-lg font-bold mb-3">Scalable Growth</h3>
              <p className="text-gray-700">
                Documented processes make onboarding new salespeople faster and more effective as your team expands.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.5s" }}>
              <h3 className="text-lg font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-700">
                Data-driven frameworks allow for ongoing refinement based on real-world results and changing market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
            <p className="text-xl mb-8">
              Let's discuss how a refined sales process can help your team achieve breakthrough results and sustainable growth.
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

export default SalesProcess;
