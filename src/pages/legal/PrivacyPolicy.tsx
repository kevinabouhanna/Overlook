
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

const PrivacyPolicy = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                Overlook Consultancy ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and disclose personal information that we may obtain about you through our website, services, and other interactions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">2.1 Personal Information</h3>
              <p>
                Personal information is information that identifies you as an individual. We may collect the following personal information:
              </p>
              <ul className="list-disc ml-8 mt-4 mb-4">
                <li>Name and contact details (email address, phone number, physical address)</li>
                <li>Company name and job title</li>
                <li>Login credentials for our services</li>
                <li>Payment information</li>
                <li>Information you provide in forms, surveys, or other interactions with us</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">2.2 Usage Information</h3>
              <p>
                We automatically collect certain information about your interaction with our website and services, including:
              </p>
              <ul className="list-disc ml-8 mt-4 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and actions taken</li>
                <li>Time and date of visits</li>
                <li>Referring website or source</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We may use your personal information for the following purposes:</p>
              <ul className="list-disc ml-8 mt-4 mb-4">
                <li>Providing and improving our services</li>
                <li>Communicating with you about our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to your inquiries and requests</li>
                <li>Sending marketing communications (with your consent where required)</li>
                <li>Conducting research and analysis to improve our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Protecting our rights and preventing fraud</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
              <p>We may share your personal information with:</p>
              <ul className="list-disc ml-8 mt-4 mb-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                <li>Regulators, government agencies, law enforcement, or other third parties as required by law</li>
                <li>A buyer or successor in the event of a merger, acquisition, or similar business transaction</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc ml-8 mt-4 mb-4">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Restricting or objecting to our use of your personal information</li>
                <li>Receiving a copy of your personal information in a structured, machine-readable format</li>
                <li>Withdrawing consent where our processing is based on your consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details provided in the "Contact Us" section below.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process the information, and applicable legal requirements.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated Privacy Policy on our website with a revised effective date.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-4">
                Overlook Consultancy<br />
                New Rawda<br />
                150<br />
                Beirut, 5-12<br />
                Email: privacy@overlook-sales.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
