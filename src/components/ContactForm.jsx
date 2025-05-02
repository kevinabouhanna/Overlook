import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: 'Message sent successfully! We\'ll get back to you soon.',
    submitting: false
  });

  // We don't need to check for success parameter anymore since we're redirecting to a dedicated success page
  // This useEffect can be used for other initialization if needed
  useEffect(() => {
    // Any initialization code can go here
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.',
        submitting: false
      });
      return;
    }

    // Show submitting state
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      submitting: true
    });

    // Get form data for submission
    const form = e.target;

    // Standard Netlify Forms submission
    // This uses the default Netlify form handling endpoint
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(() => {
        // Show success toast
        toast.success('Message sent successfully! We\'ll get back to you soon.', {
          duration: 5000,
          position: 'bottom-right',
        });

        // Reset form
        form.reset();

        // Update form status
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Message sent successfully! We\'ll get back to you soon.',
          submitting: false
        });

        // Reset form state
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        });
      })
      .catch((error) => {
        // Show error toast
        toast.error('There was a problem sending your message. Please try again.', {
          duration: 5000,
          position: 'bottom-right',
        });

        console.error('Form submission error:', error);

        // Update form status
        setFormStatus({
          submitted: false,
          error: true,
          message: 'There was a problem sending your message. Please try again.',
          submitting: false
        });
      });
  };

  // For testing purposes only - remove in production
  const simulateError = () => {
    setFormStatus({
      submitted: false,
      error: true,
      message: 'There was a problem sending your message. Please try again.',
      submitting: false
    });
    toast.error('There was a problem sending your message. Please try again.', {
      duration: 5000,
      position: 'bottom-right',
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      {/* Test buttons - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="flex space-x-2 mb-4">
          <button
            type="button"
            onClick={simulateError}
            className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200"
          >
            Test Error State
          </button>
          <button
            type="button"
            onClick={() => {
              setFormStatus({
                submitted: true,
                error: false,
                message: 'Message sent successfully! We\'ll get back to you soon.',
                submitting: false
              });
              toast.success('Message sent successfully! We\'ll get back to you soon.', {
                duration: 5000,
                position: 'bottom-right',
              });
            }}
            className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200"
          >
            Test Success State
          </button>
        </div>
      )}

      {formStatus.submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          <p>{formStatus.message}</p>
        </div>
      ) : formStatus.error ? (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          <p>{formStatus.message}</p>
        </div>
      ) : (
        <p className="text-gray-700 mb-8">
          Fill out the form below and one of our sales consultants will get back to you within 24 hours.
        </p>
      )}

      <form
        className="space-y-6"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        {/* Netlify form requirements */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field - hidden from humans but visible to bots */}
        <div className="hidden" style={{ display: 'none', visibility: 'hidden', position: 'absolute', left: '-9999px' }}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" tabIndex="-1" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
              autoComplete="given-name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
            autoComplete="off"
          ></textarea>
        </div>

        {/* Netlify reCAPTCHA */}
        <div data-netlify-recaptcha="true" className="mb-4"></div>

        <div>
          <Button
            type="submit"
            className="bg-black text-white hover:bg-gray-800"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
