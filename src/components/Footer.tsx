
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">OVERLOOK</h3>
            <p className="text-gray-400 mb-4">
              Specializing in sales consultancy and hiring, helping businesses optimize 
              sales strategies and build high-performing teams.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/sales-hiring" className="text-gray-400 hover:text-white transition-colors">Sales Hiring</Link></li>
              <li><Link to="/services/sales-training" className="text-gray-400 hover:text-white transition-colors">Sales Training</Link></li>
              <li><Link to="/services/sales-process" className="text-gray-400 hover:text-white transition-colors">Sales Process & Strategy</Link></li>
              <li><Link to="/services/performance-metrics" className="text-gray-400 hover:text-white transition-colors">Performance Metrics</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
              <li><Link to="/legal/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Overlook Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
