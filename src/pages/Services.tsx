
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation, useServiceCardAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';

const Services = () => {
  const animationRef = useGSAPAnimation();
  const serviceCardsRef = useServiceCardAnimation();

  const services = [
    {
      id: 1,
      title: "Sales Hiring",
      description: "Find and recruit top sales talent aligned with your company culture and goals.",
      features: [
        "Understanding Client Needs",
        "Comprehensive Candidate Sourcing",
        "Qualification and Screening",
        "Ongoing Support and Relationship Building"
      ],
      link: "/services/sales-hiring",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Sales Training & Coaching",
      description: "Develop your sales team's skills and capabilities with targeted training programs.",
      features: [
        "Customized Training Programs",
        "Practical Skills Development",
        "Ongoing Coaching and Feedback",
        "Measurable Outcomes and KPIs"
      ],
      link: "/services/sales-training",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 3,
      title: "Sales Process & Strategy",
      description: "Optimize your sales approach and methodologies for improved performance.",
      features: [
        "Assessment of Current Sales Processes",
        "Customized Sales Strategy Development",
        "Sales Funnel Optimization",
        "Technology and Tools Integration"
      ],
      link: "/services/sales-process",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Performance Metrics & Analytics",
      description: "Implement data-driven systems to measure, analyze, and improve sales outcomes.",
      features: [
        "Define Key Performance Indicators",
        "Trend Analysis and Forecasting",
        "Sales Reporting and Dashboards",
        "Data-Driven Decision Making"
      ],
      link: "/services/performance-metrics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 relative">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
            alt="Sales services background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Comprehensive sales solutions to help your business thrive in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Sales Solutions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our integrated approach addresses every aspect of sales performance, from talent acquisition to strategy and analytics.
            </p>
          </div>
          
          <div ref={serviceCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-on-scroll service-card overflow-hidden rounded-lg shadow-sm"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                  <h3 className="absolute bottom-0 left-0 text-2xl font-bold text-white p-6">{service.title}</h3>
                </div>
                
                <div className="p-8 bg-white">
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <h4 className="font-bold mb-3">Key Components:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                  <Button asChild className="bg-black text-white hover:bg-gray-800 transition-colors">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">How We Work With You</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Discovery</h3>
              <p className="text-gray-700">We learn about your business, challenges, and goals</p>
            </div>
            
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md text-center" style={{ transitionDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Strategy</h3>
              <p className="text-gray-700">We develop a customized plan tailored to your needs</p>
            </div>
            
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md text-center" style={{ transitionDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Implementation</h3>
              <p className="text-gray-700">We execute the plan with a focus on quality and results</p>
            </div>
            
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md text-center" style={{ transitionDelay: "0.3s" }}>
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Optimization</h3>
              <p className="text-gray-700">We measure results and continuously improve</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Sales Performance?</h2>
            <p className="text-xl mb-8">
              Schedule a consultation to discuss how our services can help your business grow.
            </p>
            <Button 
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules', '_blank')}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
