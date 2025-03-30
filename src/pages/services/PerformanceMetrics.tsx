
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
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Performance Metrics & Analytics</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Implement data-driven systems to measure, analyze, and continuously improve sales outcomes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Data-Driven Sales Excellence</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-4">
                In today's competitive landscape, gut feelings and intuition are no longer enough to guide sales decisions. The most successful sales organizations leverage data and analytics to measure performance, identify trends, and make informed strategic decisions.
              </p>
              <p className="text-gray-700 mb-4">
                Our Performance Metrics & Analytics service helps you build a comprehensive measurement framework that provides clear visibility into your sales operation. We go beyond basic revenue tracking to develop nuanced metrics that illuminate every aspect of your sales process.
              </p>
              <p className="text-gray-700">
                By implementing the right metrics and analytics capabilities, we help you transform raw data into actionable insights that drive continuous improvement, forecast accurately, and allocate resources effectively.
              </p>
            </div>
            
            <div className="bg-gray-100 h-96 animate-on-scroll flex items-center justify-center">
              <p className="text-2xl font-bold text-center px-6">PERFORMANCE METRICS</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Analytics Approach</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transforming data into actionable insights for sales excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">1. Define Key Performance Indicators</h3>
              <p className="text-gray-700 mb-4">
                We establish the right metrics for your business:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Comprehensive audit of current measurement practices</li>
                <li>Alignment of metrics with business objectives</li>
                <li>Development of leading and lagging indicators</li>
                <li>Creation of balanced scorecards for different roles</li>
                <li>Implementation of activity, pipeline, and outcome metrics</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">2. Trend Analysis and Forecasting</h3>
              <p className="text-gray-700 mb-4">
                We help you predict future performance:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Historical performance analysis and pattern recognition</li>
                <li>Development of reliable forecasting methodologies</li>
                <li>Scenario planning and sensitivity analysis</li>
                <li>Early warning systems for performance issues</li>
                <li>Market trend correlation and external factor analysis</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">3. Sales Reporting and Dashboards</h3>
              <p className="text-gray-700 mb-4">
                We create visual tools for data interpretation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Custom dashboard development for different stakeholders</li>
                <li>Real-time performance visualization</li>
                <li>Automated reporting systems and distribution</li>
                <li>Exception reporting and alert mechanisms</li>
                <li>Mobile-friendly access to critical metrics</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4">4. Data-Driven Decision Making</h3>
              <p className="text-gray-700 mb-4">
                We implement frameworks for action:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Regular performance review processes</li>
                <li>Root cause analysis methodologies</li>
                <li>Decision frameworks based on key metrics</li>
                <li>Continuous improvement feedback loops</li>
                <li>Performance-based incentive alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Key Metrics We Help Track</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Revenue Performance</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Revenue by product/service line</li>
                <li>New vs. existing customer revenue</li>
                <li>Revenue per sales representative</li>
                <li>Year-over-year growth rates</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-3">Pipeline Metrics</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pipeline coverage ratio</li>
                <li>Average deal size and velocity</li>
                <li>Stage-to-stage conversion rates</li>
                <li>Win/loss analysis by reason</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-3">Activity Metrics</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Prospecting activities by type</li>
                <li>Customer engagement frequency</li>
                <li>Sales call effectiveness</li>
                <li>Time allocation analysis</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-3">Customer Metrics</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Customer acquisition cost</li>
                <li>Customer lifetime value</li>
                <li>Retention and churn rates</li>
                <li>Upsell and cross-sell effectiveness</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.4s" }}>
              <h3 className="text-lg font-bold mb-3">Profitability Metrics</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Gross margin by product/service</li>
                <li>Discount frequency and amount</li>
                <li>Cost of sales analysis</li>
                <li>Sales productivity ROI</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll bg-gray-50 p-6 rounded-lg" style={{ transitionDelay: "0.5s" }}>
              <h3 className="text-lg font-bold mb-3">Market Performance</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Market share analysis</li>
                <li>Competitive win/loss ratio</li>
                <li>Market penetration by segment</li>
                <li>Share of wallet with existing customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of Data?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our performance metrics and analytics can transform your sales operation.
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
