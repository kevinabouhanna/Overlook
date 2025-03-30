
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';

const PerformanceMetrics = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 relative">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="/images/performance-metrics-hero.jpg" 
            alt="Performance metrics dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Performance Metrics & Analytics</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Implement data-driven systems to measure, analyze, and improve sales outcomes for sustainable growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Data-Driven Sales Performance</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-4">
                In today's competitive marketplace, gut feelings and intuition aren't enough to guide sales strategy. Leading organizations rely on robust metrics and analytics to identify trends, forecast outcomes, and drive continuous improvement.
              </p>
              <p className="text-gray-700 mb-4">
                Our performance metrics and analytics services help you build measurement systems that provide actionable insights for sales leaders and representatives. We go beyond vanity metrics to focus on meaningful indicators that truly drive business growth.
              </p>
              <p className="text-gray-700">
                From defining the right KPIs to implementing comprehensive dashboards and reporting systems, we help you create a culture of data-informed decision making across your sales organization.
              </p>
            </div>
            
            <div className="animate-on-scroll service-image-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/performance-metrics-detail.jpg" 
                alt="Performance metrics dashboard analysis" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Metrics Framework Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Metrics Framework</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive approach to sales performance measurement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md glassmorphism">
              <h3 className="text-xl font-bold mb-4">1. Define Key Performance Indicators</h3>
              <p className="text-gray-700 mb-4">
                We help you identify the metrics that truly matter:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Customized KPI development aligned with business goals</li>
                <li>Balanced scorecard approach (leading and lagging indicators)</li>
                <li>Activity, pipeline, and results metrics</li>
                <li>Individual, team, and organizational measurement</li>
                <li>Benchmarking against industry standards</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md glassmorphism" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">2. Trend Analysis and Forecasting</h3>
              <p className="text-gray-700 mb-4">
                We develop predictive insights to guide strategy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Historical performance analysis and pattern identification</li>
                <li>Sales cycle analysis and velocity tracking</li>
                <li>Conversion rate optimization by stage</li>
                <li>Win/loss analysis and competitive intelligence</li>
                <li>Predictive modeling and revenue forecasting</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md glassmorphism" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">3. Sales Reporting and Dashboards</h3>
              <p className="text-gray-700 mb-4">
                We create visualization tools that drive action:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Custom dashboard development for different stakeholders</li>
                <li>Real-time performance visibility and alerts</li>
                <li>Progress tracking against goals and quotas</li>
                <li>Coaching and development indicators</li>
                <li>Executive-level reporting and insights</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md glassmorphism" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4">4. Data-Driven Decision Making</h3>
              <p className="text-gray-700 mb-4">
                We help you turn insights into action:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Performance review and coaching frameworks</li>
                <li>Resource allocation and territory optimization</li>
                <li>Process improvement identification</li>
                <li>Compensation and incentive planning</li>
                <li>Strategic decision support and recommendation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Benefits of Performance Analytics</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg glassmorphism">
              <h3 className="text-lg font-bold mb-3">Actionable Insights</h3>
              <p className="text-gray-700">
                Move beyond guesswork to concrete, data-backed decisions that lead to meaningful performance improvements.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg glassmorphism" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-3">Early Warning Systems</h3>
              <p className="text-gray-700">
                Identify potential issues before they impact results, allowing for proactive intervention and course correction.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg glassmorphism" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-3">Performance Accountability</h3>
              <p className="text-gray-700">
                Create transparent expectations and measurement systems that drive individual ownership of results.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg glassmorphism" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-3">Resource Optimization</h3>
              <p className="text-gray-700">
                Allocate time, budget, and focus to the activities and opportunities with the highest potential return.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg glassmorphism" style={{ transitionDelay: "0.4s" }}>
              <h3 className="text-lg font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-700">
                Establish a framework for ongoing refinement of your sales approach based on measurable outcomes.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg glassmorphism" style={{ transitionDelay: "0.5s" }}>
              <h3 className="text-lg font-bold mb-3">Strategic Alignment</h3>
              <p className="text-gray-700">
                Ensure sales activities and outcomes directly support broader organizational goals and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Leverage the Power of Data?</h2>
            <p className="text-xl mb-8">
              Let's discuss how performance metrics and analytics can transform your sales organization.
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

export default PerformanceMetrics;
