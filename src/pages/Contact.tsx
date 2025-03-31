
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const animationRef = useGSAPAnimation();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...data
        }).toString()
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      form.reset();
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you shortly.",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    }
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
              {/* Hidden form for Netlify */}
              <form name="contact" data-netlify="true" hidden>
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
                <input type="email" name="email" />
                <input type="text" name="company" />
                <input type="text" name="service" />
                <textarea name="message"></textarea>
              </form>

              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-6 bg-gray-50 p-8 rounded-lg"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} name="firstName" className="w-full bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} name="lastName" className="w-full bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" name="email" className="w-full bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input {...field} name="company" className="w-full bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service of Interest</FormLabel>
                        <FormControl>
                          <select 
                            {...field}
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
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            name="message"
                            rows={5}
                            className="w-full bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
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
