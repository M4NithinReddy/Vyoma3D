import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

export const posts = [
  { id: 1, title: 'Top 5 Design for Additive Manufacturing Best Practices', excerpt: 'Learn how to optimize your designs for 3D printing success with topology optimization and lattice structures.', author: 'Sarah Chen', date: '2025-10-01', readTime: '8 min', tags: ['3D Printing', 'DfAM'], image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, title: 'FEA vs CFD: When to Use Each Simulation Type', excerpt: 'Understanding the differences between finite element analysis and computational fluid dynamics for better product validation.', author: 'Michael Torres', date: '2025-09-28', readTime: '10 min', tags: ['CAE', 'Simulation'], image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, title: 'Material Selection Guide for SLA 3D Printing', excerpt: 'Compare properties of standard, tough, flexible, and engineering resins to choose the right material for your application.', author: 'Dr. Emily Watson', date: '2025-09-25', readTime: '6 min', tags: ['Materials', '3D Printing'], image: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

export const Blog = () => {
  return (
    <>
      <SEO title="Blog - Engineering Insights" description="Expert insights on CAD, CAE, 3D printing, and manufacturing technology." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Blog" title="Engineering Insights & Resources" description="Stay updated with the latest trends and best practices in engineering and manufacturing." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${post.id}`}>
                  <Card className="h-full hover:border-violet-500/50 overflow-hidden p-0">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {post.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-violet-400 text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
