import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cog, ShoppingBag, GraduationCap, Rocket, Heart, Users, TrendingUp, CheckCircle, Zap, Shield, Clock, Award, Image as ImageIcon, FileText, Play } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { LogoTicker } from '../components/LogoTicker';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { staggerContainer, staggerItem } from '../lib/animations';
import { siteConfig } from '../config/site.config';

const services = [
  {
    icon: Cog,
    title: 'CAD/CAE Services',
    description: 'Transform ideas into production-ready designs with expert 3D modeling, FEA, CFD, and comprehensive simulation analysis.',
    href: '/services/cad',
    gradient: 'from-violet-500 to-purple-500',
    details: ['Parametric 3D Modeling', 'FEA & Structural Analysis', 'CFD Simulations', 'Design Optimization']
  },
  {
    icon: Box,
    title: '3D Printing',
    description: 'Industry-leading additive manufacturing with SLA, FDM, and DLP technologies delivering micron-level precision.',
    href: '/services/3d-printing',
    gradient: 'from-cyan-500 to-blue-500',
    details: ['SLA Resin Printing', 'FDM Production Parts', 'DLP High-Resolution', 'Multi-Material Capabilities']
  },
  {
    icon: ShoppingBag,
    title: 'Products',
    description: 'Professional-grade 3D printers, engineering-grade materials, and precision accessories for demanding applications.',
    href: '/products',
    gradient: 'from-orange-500 to-red-500',
    details: ['Industrial Printers', 'Engineering Resins', 'Carbon Fiber Filaments', 'Post-Processing Tools']
  },
  {
    icon: GraduationCap,
    title: 'Training & Workshops',
    description: 'Comprehensive training programs led by industry experts with 15+ years of experience in CAD, CAE, and additive manufacturing.',
    href: '/training',
    gradient: 'from-green-500 to-emerald-500',
    details: ['CAD Software Mastery', 'FEA Certification', 'Design for AM', 'Corporate Training']
  }
];

const industryBg: Record<string, string> = {
  'Aerospace & Defense': 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760969809/ChatGPT_Image_Oct_20_2025_07_45_55_PM_llid7u.png',
  'Automotive': 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760952622/ChatGPT_Image_Oct_20_2025_03_00_05_PM_gn1d9i.png',
  'Healthcare': 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760952940/ChatGPT_Image_Oct_20_2025_03_05_23_PM_rxi6im.png',
  'Industrial Manufacturing': 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760969809/ChatGPT_Image_Oct_20_2025_07_46_03_PM_u11nse.png',
  'Research & Development': 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760969811/ChatGPT_Image_Oct_20_2025_07_45_50_PM_hwhtod.png',
  'Agriculture': 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760970164/ChatGPT_Image_Oct_20_2025_07_52_16_PM_jpplbz.png',
  'Education': 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760969809/ChatGPT_Image_Oct_20_2025_07_45_34_PM_vpo3li.png'
};

const industries = (siteConfig.nav.main.find(i => i.label === 'Industries')?.megaMenu || []).map(item => ({
  name: item.label,
  href: item.href,
  bg: industryBg[item.label] || 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&h=400'
}));

const stats = [
  { value: '92%', label: 'Time Saved', sublabel: 'Compared to traditional methods' },
  { value: '65%', label: 'Cost Reduction', sublabel: 'On average across projects' },
  { value: '500+', label: 'Projects Delivered', sublabel: 'Across 5 industries' },
  { value: '98%', label: 'Client Satisfaction', sublabel: 'Based on verified reviews' }
];

const whyChooseUs = [
  { icon: Zap, title: 'Rapid Turnaround', description: 'From concept to delivery in days, not weeks. Our streamlined process eliminates bottlenecks.' },
  { icon: Shield, title: 'Quality Guaranteed', description: 'ISO 9001 certified with rigorous quality control at every stage. Your success is our mission.' },
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock technical support and project updates. We are always here when you need us.' },
  { icon: Award, title: 'Industry Expertise', description: '15+ years of combined experience across aerospace, automotive, and medical sectors.' }
];

const process = [
  { step: '01', title: 'Discover & Consult', description: 'Deep dive into your requirements, constraints, and success criteria through collaborative consultation.' },
  { step: '02', title: 'Design & Engineer', description: 'Create detailed CAD models with parametric design principles for easy iteration and optimization.' },
  { step: '03', title: 'Simulate & Validate', description: 'Comprehensive FEA, CFD, and multi-physics analysis to validate performance before manufacturing.' },
  { step: '04', title: 'Manufacture & Print', description: 'Precision 3D printing with advanced materials, process control, and real-time quality monitoring.' },
  { step: '05', title: 'Finish & Deliver', description: 'Professional post-processing, quality inspection, and secure delivery with full documentation.' }
];

const testimonials = [
  {
    quote: 'VYOMA3D reduced our prototype lead time by 70% and their CAE insights prevented costly design flaws that would have surfaced in physical testing. The team\'s expertise in topology optimization saved us significant material costs.',
    author: 'Sarah Chen',
    role: 'Chief Engineer',
    company: 'AeroTech Industries',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    quote: 'The training program transformed our team\'s capabilities completely. We now handle complex ANSYS simulations in-house, saving over $200K annually. The instructors were patient, knowledgeable, and industry-focused.',
    author: 'Michael Rodriguez',
    role: 'R&D Director',
    company: 'AutoMotive Solutions',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    quote: 'Exceptional quality and turnaround. The SLA prints exceeded our ±0.05mm tolerance requirements consistently. Their attention to detail and communication throughout the project was outstanding.',
    author: 'Dr. Emily Watson',
    role: 'Product Manager',
    company: 'MedTech Innovations',
    rating: 5,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Design for Additive Manufacturing Best Practices',
    excerpt: 'Learn how to optimize your designs for 3D printing success with topology optimization, lattice structures, and support strategies that reduce material waste while improving strength.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760971718/Generated_Image_October_20_2025_-_8_16PM_rv6cdz.png',
    category: '3D Printing',
    readTime: '8 min',
    date: 'Nov 15, 2025'
  },
  {
    id: 2,
    title: 'FEA vs CFD: When to Use Each Simulation Type',
    excerpt: 'Understanding the differences between finite element analysis and computational fluid dynamics for better product validation and cost-effective testing strategies.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760971904/Generated_Image_October_20_2025_-_8_21PM_iil46f.png',
    category: 'CAE',
    readTime: '10 min',
    date: 'Nov 12, 2025'
  },
  {
    id: 3,
    title: 'Material Selection Guide for SLA 3D Printing',
    excerpt: 'Compare properties of standard, tough, flexible, and engineering resins. Make informed material choices based on mechanical properties, temperature resistance, and application requirements.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760971951/Generated_Image_October_20_2025_-_8_21PM_1_lij6lj.png',
    category: 'Materials',
    readTime: '6 min',
    date: 'Nov 10, 2025'
  }
];

const galleryItems = [
  {
    url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871345/IMG_8660_vhzzpl.jpg',
    caption: 'High-Precision 3D Printed Prototype',
    category: 'Printing'
  },
 {
    url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871342/da9b8445-d678-4f78-8538-90c09cc61158_gvsgsr.jpg',
    caption: '3D Printing Workshop',
    category: 'Workshop',
  },  { url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760872632/IMG_9344_y2gpmf.jpg', caption: 'Faculty development program', category: 'Faculty development' },
  { url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760872636/IMG_8647_sospm7.jpg', caption: 'Physical Prototype', category: 'Prototype' }
];

export const Home = () => {
  return (
    <>
      <SEO
        title="Advanced 3D Printing & CAD/CAE Services"
        description="Leading provider of CAD/CAE engineering services, precision 3D printing, and professional training. Transform your product development."
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-gray-900 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto container-padding py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-semibold">
                Pioneering infinite possibilities in engineering and manufacturing
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Precision Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-white bg-clip-text text-transparent">
                Limitless Imagination
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We empower innovators and businesses to bring their boldest ideas to life through exceptional engineering services and advanced 3D printing solutions—accelerating innovation from concept to reality with uncompromising quality and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" onClick={() => window.location.href = '/get-a-quote'}>
                Get a Quote
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/case-studies'}>
                View Case Studies
              </Button>
              <Button variant="ghost" size="lg" onClick={() => window.location.href = '/gallery'}>
                <Play size={20} />
                Watch Demo
              </Button>
            </div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, i) => (
                <AnimatedItem key={stat.label}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white font-semibold mb-1">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.sublabel}</div>
                  </div>
                </AnimatedItem>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-900/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Our Services"
            title="Complete Engineering Solutions"
            description="From initial concept to final production, we provide comprehensive services that accelerate your product development cycle and reduce time-to-market."
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, i) => (
              <AnimatedItem key={service.title}>
                <Link to={service.href}>
                  <Card className="h-full group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                        <service.icon className="text-white" size={28} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map(detail => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <span className="text-violet-400 flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </Card>
                </Link>
              </AnimatedItem>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-cyan-900/10" />
        <div className="container mx-auto container-padding relative z-10">
          <SectionHeader
            badge="Why Choose VYOMA3D"
            title="Built on Excellence & Innovation"
            description="Our commitment to quality, speed, and customer success sets us apart in the industry."
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item) => (
              <AnimatedItem key={item.title}>
                <Card className="text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/20 flex items-center justify-center">
                    <item.icon className="text-orange-400" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </AnimatedItem>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-900/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Industries We Serve"
            title="Specialized Expertise Across Sectors"
            description="Deep domain knowledge combined with technical excellence delivers superior results for your industry."
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className=""
          >
            <div className="overflow-hidden py-2">
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="flex gap-6 items-stretch"
              >
                {[...industries, ...industries, ...industries].map((industry, i) => (
                  <Link to={industry.href} key={`${industry.name}-${i}`} className="shrink-0">
                    <div className="group relative w-72 h-48 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                      <img
                        src={industry.bg}
                        alt={industry.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-bold text-white text-base">{industry.name}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent" />
        <div className="container mx-auto container-padding relative z-10">
          <SectionHeader
            badge="Our Process"
            title="A Proven Path to Success"
            description="Our systematic approach ensures quality, speed, and precision at every milestone from concept to delivery."
          />

          <div className="max-w-5xl mx-auto">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-violet-500/25">
                    {step.step}
                  </div>
                </div>
                <Card className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LogoTicker />

      <section className="section-padding bg-gray-900/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Portfolio"
            title="See Our Work in Action"
            description="Explore our portfolio of precision engineering and additive manufacturing projects across multiple industries."
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {galleryItems.map((item, i) => (
              <AnimatedItem key={i}>
                <div className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <div className="relative w-full h-72 flex items-center justify-center bg-black/20">
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-2 py-1 bg-violet-500/20 border border-violet-500/30 rounded text-violet-300 text-xs font-medium mb-2">
                        {item.category}
                      </span>
                      <p className="text-white font-medium text-sm">{item.caption}</p>
                    </div>
                  </div>
                </div>


              </AnimatedItem>
            ))}
          </motion.div>

          <AnimatedSection>
            <div className="text-center">
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/gallery'}>
                <ImageIcon size={20} />
                View Full Gallery
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Testimonials"
            title="Trusted by Industry Leaders"
            description="Don't just take our word for it. Here's what our clients say about working with VYOMA3D."
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, i) => (
              <AnimatedItem key={i}>
                <Card className="h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-orange-500 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/30"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </AnimatedItem>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-900/30">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full">
                Latest Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Engineering Knowledge Hub
              </h2>
              <p className="text-lg text-gray-400">Stay updated with the latest trends, techniques, and best practices.</p>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/blog'}>
              <FileText size={18} />
              View All Articles
            </Button>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <AnimatedItem key={post.id}>
                <Link to={`/blog/${post.id}`}>
                  <Card className="overflow-hidden p-0 h-full group">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} read</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="text-violet-400 flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read article <ArrowRight size={14} />
                      </span>
                    </div>
                  </Card>
                </Link>
              </AnimatedItem>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-violet-900/20 to-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <div className="container mx-auto container-padding relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> Product Development?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Get a custom quote tailored to your project requirements, or explore our comprehensive training programs to upskill your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => window.location.href = '/get-a-quote'}>
                  Get a Quote
                  <ArrowRight size={20} />
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/training'}>
                  Explore Training
                </Button>
                <Button variant="ghost" size="lg" onClick={() => window.location.href = '/contact'}>
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};
