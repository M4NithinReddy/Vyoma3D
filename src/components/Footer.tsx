import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Button } from './Button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Linkedin size={20} className="text-gray-400" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Twitter size={20} className="text-gray-400" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Youtube size={20} className="text-gray-400" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Instagram size={20} className="text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/cad" className="text-gray-400 hover:text-white transition-colors">CAD Services</Link></li>
              <li><Link to="/services/cae" className="text-gray-400 hover:text-white transition-colors">CAE Services</Link></li>
              <li><Link to="/services/3d-printing" className="text-gray-400 hover:text-white transition-colors">3D Printing</Link></li>
              <li><Link to="/services/specialized" className="text-gray-400 hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest updates and insights.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Newsletter subscription confirmed!'); }} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500"
                required
              />
              <Button size="sm" type="submit">
                <Mail size={16} />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
