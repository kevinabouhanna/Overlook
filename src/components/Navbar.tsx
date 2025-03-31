
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Animate the mobile menu when it opens
      gsap.fromTo(
        '.mobile-menu',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.21, ease: "power2.out" }
      );
      
      gsap.fromTo(
        '.mobile-menu-item',
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.21, 
          stagger: 0.07, 
          ease: "power2.out", 
          delay: 0.14
        }
      );
    }
  }, [isMenuOpen]);

  const scrollToCalendar = () => {
    // Open Google Calendar in a new tab
    window.open('https://calendar.app.google/dUrQAfTgvreDSuyb9', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-4 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold nav-item">OVERLOOK</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="nav-item hover:text-gray-600 transition-colors">About</Link>
            <Link to="/services" className="nav-item hover:text-gray-600 transition-colors">Services</Link>
            <Link to="/contact" className="nav-item hover:text-gray-600 transition-colors">Contact</Link>
            <Button 
              onClick={scrollToCalendar} 
              className="nav-item bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Book an Appointment
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-item"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="mobile-menu-item py-2 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="mobile-menu-item py-2 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="mobile-menu-item py-2 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                onClick={() => {
                  scrollToCalendar();
                  setIsMenuOpen(false);
                }} 
                className="mobile-menu-item bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Book an Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
