import { Mail, Phone, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { siteConfig } from '../config/site.config';

export const Contact = () => {
  const whatsappHref = `https://wa.me/918142149666?text=${encodeURIComponent('Hello! I would like to connect regarding services/products/training.')}`;

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
                <Button className="w-full" onClick={() => window.open(whatsappHref, '_blank')}>Chat on WhatsApp</Button>
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
                <div className="flex flex-col gap-2">
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-400 hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`tel:${siteConfig.contact.whatsapp}`} className="text-gray-400 hover:text-white transition-colors">
                    {siteConfig.contact.whatsapp}
                  </a>
                </div>
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
