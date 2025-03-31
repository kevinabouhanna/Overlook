
import React, { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const animationRef = useGSAPAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you shortly.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Let's discuss how we can help your sales team achieve breakthrough performance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-8">
                Whether you have questions about our services, want to schedule a consultation, or are ready to start a project, we're here to help. Fill out the form and one of our sales consultancy experts will get back to you shortly.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-700">info@overlook-sales.com</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-700">+961 70 112 317</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Office</h3>
                  <p className="text-gray-700">
                    New Rawda<br />
                    150<br />
                    Beirut, 5-12
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
                <Button 
                  onClick={() => window.open('https://calendar.app.google/dUrQAfTgvreDSuyb9', '_blank')}
                  className="bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="w-full bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="w-full bg-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium text-gray-700">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-medium text-gray-700">Company Name</label>
                  <Input 
                    id="company" 
                    name="company" 
                    className="w-full bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="block font-medium text-gray-700">Service of Interest</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Sales Hiring">Sales Hiring</option>
                    <option value="Sales Training">Sales Training & Coaching</option>
                    <option value="Sales Process">Sales Process & Strategy</option>
                    <option value="Performance Metrics">Performance Metrics & Analytics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-gray-700">Your Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full bg-white"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How quickly can you help us improve our sales performance?</h3>
              <p className="text-gray-700">
                While some improvements can be seen immediately, sustainable results typically emerge within 3-6 months as new strategies and skills are implemented and reinforced.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-2">Do you work with companies in our industry?</h3>
              <p className="text-gray-700">
                We work with businesses across various industries. While industry-specific knowledge is valuable, our methodologies are adaptable to different market contexts and sales environments.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-2">How do you measure the ROI of your services?</h3>
              <p className="text-gray-700">
                We establish clear metrics at the outset of our engagement, tracking improvements in key performance indicators like conversion rates, average deal size, sales cycle length, and overall revenue growth.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-2">Can you help with our existing CRM implementation?</h3>
              <p className="text-gray-700">
                Yes, we can help optimize your current CRM to better support your sales process, improve data quality, and generate more valuable insights that drive performance improvements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
