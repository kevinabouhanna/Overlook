
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useHeroAnimation, useGSAPAnimation, useServiceCardAnimation } from '@/hooks/useGSAPAnimation';

const Home = () => {
  const heroRef = useHeroAnimation();
  const animationRef = useGSAPAnimation();
  const serviceCardsRef = useServiceCardAnimation();
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "VP of Sales, TechCorp",
      testimonial: "Overlook transformed our sales team from underperforming to exceeding targets in just 6 months. Their hiring process brought in talent that perfectly aligned with our company culture.",
    },
    {
      id: 2,
      name: "David Chen",
      position: "CEO, GrowthMetrics",
      testimonial: "The sales training program Overlook designed for us was incredibly effective. They understood our industry challenges and created customized solutions that drove real results.",
    },
    {
      id: 3,
      name: "Michelle Rodriguez",
      position: "Sales Director, Innovate Inc.",
      testimonial: "Their performance metrics system gave us visibility into our sales process that we never had before. Now we can make data-driven decisions that have increased our close rate by 34%.",
    },
    {
      id: 4,
      name: "Mark Williams",
      position: "Founder, StartUp Solutions",
      testimonial: "As a startup, we needed to build our sales foundation from scratch. Overlook guided us through every step, from hiring our first sales rep to implementing a scalable strategy.",
    }
  ];

  return (
    <div ref={animationRef} className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 hero-title">
              <span className="inline-block">Build.</span>{" "}
              <span className="inline-block">Trust.</span>{" "}
              <span className="inline-block">Hire.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 hero-subtitle">
              Overlook specializes in sales consultancy and hiring, helping businesses optimize sales strategies and build high-performing teams for sustainable growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Overlook</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Sales Recruitment</h3>
              <p className="text-gray-700">Finding and hiring the right sales talent for your team, with proven methods to identify and attract top performers.</p>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md text-center" style={{ transitionDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Training Solutions</h3>
              <p className="text-gray-700">Building effective sales teams through targeted training programs designed for your specific industry and goals.</p>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md text-center" style={{ transitionDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Performance Coaching</h3>
              <p className="text-gray-700">Ongoing support and guidance to help your sales team develop their skills and exceed their targets.</p>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild variant="outline" className="border-2 border-black hover:bg-black hover:text-white transition-colors">
              <Link to="/about">Discover More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={serviceCardsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Comprehensive sales solutions tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/services/sales-hiring" className="animate-on-scroll service-card group">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full transition-all duration-300 hover:shadow-md">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">Sales Hiring</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Understanding Client Needs</li>
                  <li>Comprehensive Candidate Sourcing</li>
                  <li>Qualification and Screening</li>
                  <li>Ongoing Support</li>
                </ul>
                <div className="text-black font-semibold mt-auto inline-block">
                  Learn more <span className="ml-2 transition-transform group-hover:translate-x-2 inline-block">→</span>
                </div>
              </div>
            </Link>
            
            <Link to="/services/sales-training" className="animate-on-scroll service-card group" style={{ transitionDelay: "0.1s" }}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full transition-all duration-300 hover:shadow-md">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">Sales Training & Coaching</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Customized Training Programs</li>
                  <li>Practical Skills Development</li>
                  <li>Ongoing Coaching and Feedback</li>
                  <li>Measurable Outcomes and KPIs</li>
                </ul>
                <div className="text-black font-semibold mt-auto inline-block">
                  Learn more <span className="ml-2 transition-transform group-hover:translate-x-2 inline-block">→</span>
                </div>
              </div>
            </Link>
            
            <Link to="/services/sales-process" className="animate-on-scroll service-card group" style={{ transitionDelay: "0.2s" }}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full transition-all duration-300 hover:shadow-md">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">Sales Process & Strategy</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Assessment of Current Sales Processes</li>
                  <li>Customized Sales Strategy Development</li>
                  <li>Sales Funnel Optimization</li>
                  <li>Technology and Tools Integration</li>
                </ul>
                <div className="text-black font-semibold mt-auto inline-block">
                  Learn more <span className="ml-2 transition-transform group-hover:translate-x-2 inline-block">→</span>
                </div>
              </div>
            </Link>
            
            <Link to="/services/performance-metrics" className="animate-on-scroll service-card group" style={{ transitionDelay: "0.3s" }}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full transition-all duration-300 hover:shadow-md">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">Performance Metrics & Analytics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Define Key Performance Indicators</li>
                  <li>Trend Analysis and Forecasting</li>
                  <li>Sales Reporting and Dashboards</li>
                  <li>Data-Driven Decision Making</li>
                </ul>
                <div className="text-black font-semibold mt-auto inline-block">
                  Learn more <span className="ml-2 transition-transform group-hover:translate-x-2 inline-block">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="animate-on-scroll bg-white p-8 rounded-lg shadow-md"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
