
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Overlook</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              We help companies build, train, and optimize high-performing sales teams
              that drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-4">
                Overlook was founded by sales professionals who understood firsthand the challenges companies face in building and maintaining effective sales teams. After years of witnessing the same patterns of inefficient hiring, inadequate training, and misaligned strategies, we decided to create a solution.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to transform how businesses approach sales talent and strategy. We believe that with the right people, proper training, and data-driven processes, any company can achieve remarkable sales growth.
              </p>
              <p className="text-gray-700">
                Today, we work with businesses across industries to optimize their sales function from end to end—from recruiting top talent to implementing sophisticated analytics systems that drive continuous improvement.
              </p>
            </div>
            
            <div className="animate-on-scroll rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team discussing sales strategy" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe in a collaborative, data-driven approach that delivers measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Understand</h3>
              <p className="text-gray-700">
                We start by deeply understanding your business, industry, and unique challenges. This foundation allows us to create solutions that address your specific needs rather than applying generic formulas.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">Customize</h3>
              <p className="text-gray-700">
                Every organization has its own culture, goals, and market position. We tailor our services to align with your company's unique circumstances, ensuring that our solutions fit seamlessly into your business.
              </p>
            </div>
            
            <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">Measure</h3>
              <p className="text-gray-700">
                We establish clear metrics and KPIs from the start, allowing us to track progress and demonstrate the tangible impact of our work. Our focus is always on delivering measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-700 mb-6">
                We believe in honesty, transparency, and doing what's right for our clients, even when it's not the easiest path.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-700 mb-6">
                We pursue the highest standards in everything we do, from the talent we recruit to the strategies we develop.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                The sales landscape is constantly evolving, and we stay at the forefront of new methodologies, technologies, and best practices.
              </p>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-gray-700 mb-6">
                We see ourselves as an extension of your team, collaborating closely to achieve shared goals rather than acting as distant consultants.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-700 mb-6">
                We measure our success by the tangible outcomes we deliver: increased revenue, improved conversion rates, and enhanced team performance.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-700">
                We believe in the power of incremental progress and are committed to helping your sales function get better every day.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sales Performance?</h2>
            <p className="text-xl mb-8">
              Let's discuss how Overlook can help you build, train, and optimize your sales team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild className="bg-white text-black hover:bg-gray-200 transition-colors">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
