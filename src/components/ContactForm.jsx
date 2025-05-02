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

  const [isDevelopment, setIsDevelopment] = useState(false);
  const [devNoticeVisible, setDevNoticeVisible] = useState(false);

  // Store page load time for bot detection
  const [pageLoadTime, setPageLoadTime] = useState(null);

  // Initialize form and handle environment detection
  useEffect(() => {
    // Record page load time for bot detection
    setPageLoadTime(Date.now());

    // Now that we're in the browser, we can safely check the hostname
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    setIsDevelopment(isLocalhost);

    // Show development notice if needed
    if (isLocalhost) {
      setDevNoticeVisible(true);
    }

    // Force re-render of the reCAPTCHA if it didn't load properly
    const recaptchaDiv = document.getElementById('netlify-recaptcha-container');
    if (recaptchaDiv && !recaptchaDiv.innerHTML.trim()) {
      console.log('Attempting to initialize reCAPTCHA...');
      // This will trigger Netlify to re-initialize the reCAPTCHA
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = '<div data-netlify-recaptcha="true"></div>';
      recaptchaDiv.innerHTML = tempDiv.firstChild.innerHTML;

      // Add a fallback message if reCAPTCHA still doesn't load
      setTimeout(() => {
        if (!recaptchaDiv.querySelector('iframe')) {
          // Check if we're in development mode
          if (isLocalhost) {
            console.log('reCAPTCHA not loading in development environment - this is normal');
            recaptchaDiv.innerHTML = '<p class="text-sm text-amber-500 mt-2">reCAPTCHA is not available in local development. It will appear on the deployed site.</p>';
          } else {
            console.log('reCAPTCHA failed to load on production site, adding fallback message');
            // Create a more user-friendly message with a checkbox alternative
            recaptchaDiv.innerHTML = `
              <div class="border border-gray-200 rounded-md p-4 bg-gray-50">
                <p class="text-sm text-gray-700 mb-2">Please confirm you're not a robot by checking this box:</p>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="human-verification" class="w-5 h-5 text-black rounded focus:ring-black" />
                  <span class="text-sm font-medium text-gray-700">I am not a robot</span>
                </label>
                <p class="text-xs text-gray-500 mt-2">Note: This is a fallback for when reCAPTCHA cannot load.</p>
              </div>
            `;

            // Add event listener to the checkbox
            setTimeout(() => {
              const checkbox = recaptchaDiv.querySelector('input[type="checkbox"]');
              if (checkbox) {
                checkbox.addEventListener('change', function () {
                  // Add a hidden field to the form to indicate human verification
                  const form = document.querySelector('form[name="contact"]');
                  if (form) {
                    const hiddenField = document.createElement('input');
                    hiddenField.type = 'hidden';
                    hiddenField.name = 'g-recaptcha-response';
                    hiddenField.value = 'fallback-human-verification';
                    form.appendChild(hiddenField);
                  }
                });
              }
            }, 100);
          }
        }
      }, 3000);
    }
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

    // We already have the isDevelopment state from useEffect

    // Show submitting state
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      submitting: true
    });

    // Get form data for submission
    const form = e.target;
    const formDataObj = new FormData(form);

    // Make sure the form-name field is included
    if (!formDataObj.get('form-name')) {
      formDataObj.append('form-name', 'contact');
    }

    // In development mode, simulate a successful submission
    if (isDevelopment) {
      console.log('Development mode - simulating form submission');
      console.log('Form data:', Object.fromEntries(formDataObj));

      // Simulate network delay
      setTimeout(() => {
        // Show success toast
        toast.success('Development mode: Form submission simulated successfully!', {
          duration: 5000,
          position: 'bottom-right',
        });

        // Reset form
        form.reset();

        // Update form status
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Development mode: Form submission simulated successfully! In production, this would be sent to Netlify.',
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
      }, 1000);

      return;
    }

    // Check if we need to add the fallback verification
    const recaptchaResponse = formDataObj.get('g-recaptcha-response');
    if (!recaptchaResponse) {
      // Check if the fallback checkbox is checked
      const checkbox = document.querySelector('input[name="human-verification"]');
      if (checkbox && checkbox.checked) {
        formDataObj.append('g-recaptcha-response', 'fallback-human-verification');
      }
    }

    // Add page load time for bot detection
    if (pageLoadTime) {
      formDataObj.append('_pageLoadTime', pageLoadTime.toString());
    }

    // Submit the form directly to Netlify using fetch
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj).toString()
    })
      .then(response => {
        if (response.ok) {
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
        } else {
          throw new Error('Form submission failed');
        }
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

      {/* Development environment notice - only shown after client-side hydration */}
      {devNoticeVisible && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-md p-4 mb-6">
          <p>⚠️ You are in development mode. Form submissions will not be processed by Netlify in this environment.</p>
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
        netlify="true"
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

        {/* Netlify reCAPTCHA - this div will be replaced with the reCAPTCHA widget */}
        <div className="form-group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Verification <span className="text-red-500">*</span>
          </label>
          <div data-netlify-recaptcha="true" id="netlify-recaptcha-container"></div>
        </div>

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
