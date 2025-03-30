
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

const Terms = () => {
  const animationRef = useGSAPAnimation();

  return (
    <div ref={animationRef} className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
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
                These Terms and Conditions ("Terms") govern your use of the Overlook Consultancy website and services. By accessing our website or using our services, you agree to these Terms. If you do not agree to these Terms, please do not use our website or services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Definitions</h2>
              <p>In these Terms:</p>
              <ul className="list-disc ml-8 mt-4 mb-4">
                <li>"Overlook," "we," "us," or "our" refers to Overlook Consultancy.</li>
                <li>"Website" refers to the website operated by Overlook at www.overlook-sales.com.</li>
                <li>"Services" refers to all services offered by Overlook, including sales consultancy, hiring, training, process optimization, and analytics services.</li>
                <li>"You" or "your" refers to the individual or entity accessing the Website or using the Services.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Website</h2>
              <h3 className="text-xl font-bold mt-6 mb-3">3.1 Acceptable Use</h3>
              <p>
                You agree to use our Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress to other users, transmitting obscene or offensive content, or disrupting the normal flow of dialogue.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">3.2 Intellectual Property</h3>
              <p>
                All content on our Website, including text, graphics, logos, images, and software, is the property of Overlook or our licensors and is protected by intellectual property laws. You may not reproduce, distribute, or use our content without our express permission.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Services</h2>
              <h3 className="text-xl font-bold mt-6 mb-3">4.1 Service Description</h3>
              <p>
                Overlook provides sales consultancy services, including but not limited to sales hiring, training and coaching, process and strategy optimization, and performance metrics and analytics. The specific scope, deliverables, and fees for our Services will be detailed in a separate agreement or statement of work.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">4.2 Service Modifications</h3>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time. We will provide reasonable notice of any material changes that affect Services you have already paid for.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Payments and Fees</h2>
              <p>
                Fees for our Services will be specified in a separate agreement. All fees are due according to the payment terms outlined in that agreement. Late payments may incur additional charges. We reserve the right to suspend Services if payments are overdue.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Confidentiality</h2>
              <p>
                Any confidential information shared during the course of our business relationship must be kept confidential and used only for the purpose for which it was disclosed. This obligation continues beyond the termination of our business relationship.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Overlook shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising out of or in connection with your use of our Website or Services.
              </p>
              <p>
                Our total liability for all claims related to these Terms or our Services shall not exceed the total amount paid by you to Overlook for the Services at issue.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Overlook, its affiliates, officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses (including reasonable attorneys' fees) arising from your use of the Website or Services, your violation of these Terms, or your violation of any rights of a third party.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Beirut, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located in Beirut County, Beirut.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will post the updated Terms on our Website with a revised effective date. Your continued use of our Website or Services after any such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                Overlook Consultancy<br />
                New Rawda<br />
                150<br />
                Beirut, 5-12<br />
                Email: legal@overlook-sales.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
