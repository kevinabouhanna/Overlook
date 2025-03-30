
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

const Cookies = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
              <p>
                This Cookie Policy explains how Overlook Consultancy ("we", "us", or "our") uses cookies and similar technologies on our website. This policy provides you with information about what cookies are, what types we use, and how you can control them.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies enhance user experience by remembering your preferences and enabling certain functionality.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Types of Cookies We Use</h2>
              <h3 className="text-xl font-bold mt-6 mb-3">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Performance Cookies</h3>
              <p>
                These cookies collect information about how visitors use our website, such as which pages visitors go to most often and if they receive error messages from web pages. These cookies don't collect information that identifies a visitor. All information collected by these cookies is aggregated and therefore anonymous. We use these cookies to improve how our website works.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Functionality Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. They may also be used to provide services you have asked for, such as watching a video or commenting on a blog.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Targeting Cookies</h3>
              <p>
                These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with our permission. They remember that you have visited a website and this information is shared with other organizations such as advertisers.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Managing Cookies</h2>
              <p>
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. However, you can usually obtain up-to-date information about blocking and deleting cookies via these links:
              </p>
              
              <ul className="list-disc ml-8 mt-4 mb-4">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-black underline" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-black underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-black underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-black underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>
              
              <p>
                Please note that by deleting our cookies or disabling future cookies you may not be able to access certain areas or features of our website.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at info@overlookconsulting.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cookies;
