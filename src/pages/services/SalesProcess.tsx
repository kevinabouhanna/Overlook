
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
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
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
              <h2 className="text-3xl font-bold mb-6">Streamline Your Path to Success</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-4">
                Even with talented sales professionals, an inefficient or outdated sales process can limit your team's effectiveness. In today's competitive landscape, having a well-defined, customer-centric sales strategy is essential for sustainable growth.
              </p>
              <p className="text-gray-700 mb-4">
                Our sales process and strategy service helps you develop a systematic approach that aligns with your customers' buying journey, optimizes resource allocation, and creates predictable, repeatable sales outcomes.
              </p>
              <p className="text-gray-700">
                We combine proven sales methodologies with industry best practices and your unique value proposition to create a customized framework that drives results. Our approach focuses on practical implementation, ensuring your strategy translates into real-world success.
              </p>
            </div>
            
            <div className="bg-gray-100 h-96 animate-on-scroll flex items-center justify-center">
              <p className="text-2xl font-bold text-center px-6">SALES PROCESS</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive approach to sales process optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">1. Assessment of Current Sales Processes</h3>
              <p className="text-gray-700 mb-4">
                We begin with a thorough analysis of your existing approach:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Comprehensive review of current sales methodologies</li>
                <li>Analysis of sales cycle length and conversion rates</li>
                <li>Evaluation of customer acquisition costs and lifetime value</li>
                <li>Identification of bottlenecks and inefficiencies</li>
                <li>Assessment of alignment with customer buying journey</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">2. Customized Sales Strategy Development</h3>
              <p className="text-gray-700 mb-4">
                We create a tailored approach for your business:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Clearly defined sales methodology and framework</li>
                <li>Customer-centric approach aligned with buying behaviors</li>
                <li>Detailed sales playbooks and call frameworks</li>
                <li>Account targeting and segmentation strategies</li>
                <li>Value proposition refinement and competitive positioning</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">3. Sales Funnel Optimization</h3>
              <p className="text-gray-700 mb-4">
                We refine your conversion path:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Lead qualification criteria and scoring methodology</li>
                <li>Opportunity management and stage progression</li>
                <li>Conversion improvement at critical funnel points</li>
                <li>Forecasting accuracy and pipeline management</li>
                <li>Sales and marketing alignment for lead generation</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4">4. Technology and Tools Integration</h3>
              <p className="text-gray-700 mb-4">
                We leverage technology to enhance your process:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>CRM optimization and workflow automation</li>
                <li>Sales enablement tool selection and implementation</li>
                <li>Digital selling and social media strategy</li>
                <li>Communication and collaboration platforms</li>
                <li>Marketing technology integration for lead generation</li>
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
              <h3 className="text-lg font-bold mb-3">Shorter Sales Cycles</h3>
              <p className="text-gray-700">
                Streamlined processes reduce friction and unnecessary steps, accelerating customer decision-making and reducing time to close.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-3">Higher Conversion Rates</h3>
              <p className="text-gray-700">
                Optimized sales approaches target the right prospects with the right messages, improving qualification and close rates.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-3">Consistent Performance</h3>
              <p className="text-gray-700">
                Well-defined processes create repeatable success patterns, reducing reliance on individual talent and improving team consistency.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-3">Better Resource Allocation</h3>
              <p className="text-gray-700">
                Clear processes help you invest time and resources where they'll have the greatest impact, improving overall efficiency.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.4s" }}>
              <h3 className="text-lg font-bold mb-3">Improved Forecasting</h3>
              <p className="text-gray-700">
                Structured processes create more predictable outcomes, enabling more accurate sales forecasting and resource planning.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.5s" }}>
              <h3 className="text-lg font-bold mb-3">Enhanced Customer Experience</h3>
              <p className="text-gray-700">
                Customer-centric processes align with buyer needs, creating more positive experiences that lead to higher satisfaction and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Sales Process?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you develop a sales strategy that drives predictable, sustainable growth.
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
