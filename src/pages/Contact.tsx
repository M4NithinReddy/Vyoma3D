import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { contactFormSchema } from '../lib/validators';
import { siteConfig } from '../config/site.config';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  purpose: string;
  message: string;
};

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log('Contact form:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEO title="Message Sent" />
        <div className="section-padding">
          <div className="container mx-auto container-padding">
            <Card className="max-w-2xl mx-auto text-center">
              <MessageSquare className="mx-auto text-green-500 mb-6" size={64} />
              <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
              <p className="text-gray-400 mb-6">We received your message and will respond within 24 hours.</p>
              <Button onClick={() => window.location.href = '/'}>Return Home</Button>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with VYOMA3D for quotes, support, or partnership inquiries." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Contact Us" title="Let's Start a Conversation" description="Reach out for quotes, technical questions, or partnership opportunities." />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input {...register('name')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input type="email" {...register('email')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input {...register('phone')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Purpose *</label>
                    <select {...register('purpose')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300">
                      <option value="">Select a purpose</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.purpose && <p className="text-red-400 text-sm mt-1">{errors.purpose.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea {...register('message')} rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <Mail className="text-violet-400 mb-3" size={32} />
                <h3 className="font-bold text-white mb-2">Email</h3>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </Card>

              <Card>
                <Phone className="text-violet-400 mb-3" size={32} />
                <h3 className="font-bold text-white mb-2">Phone</h3>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </Card>

              <Card>
                <MapPin className="text-violet-400 mb-3" size={32} />
                <h3 className="font-bold text-white mb-2">Address</h3>
                <p className="text-gray-400">
                  {siteConfig.contact.address.line1}<br />
                  {siteConfig.contact.address.line2}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-violet-500/20">
                <h3 className="font-bold text-white mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
