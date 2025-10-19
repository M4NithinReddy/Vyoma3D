import { useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Card } from '../components/Card';
import { posts } from './Blog';

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = Number(id);

  const post = useMemo(() => posts.find(p => p.id === postId), [postId]);

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Article not found</h2>
            <p className="text-gray-400 mb-6">The blog post you are looking for does not exist.</p>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${post.title} - Blog`} description={post.excerpt} />

      <div className="section-padding">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-none">
            <div className="mb-6">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </div>

            <Card className="overflow-hidden p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-[420px] md:h-[560px] object-cover" />
                </div>
                <div className="p-8 md:p-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{post.title}</h1>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {post.tags?.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-violet-300 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-gray-300 leading-relaxed mb-3">
                    {post.excerpt}
                  </motion.p>

                  <ul className="space-y-1.5 mb-0">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-violet-400 flex-shrink-0 mt-0.5" />
                      Actionable insights tailored to practical workflows
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-violet-400 flex-shrink-0 mt-0.5" />
                      Trade-offs and validation strategies you can reuse
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-violet-400 flex-shrink-0 mt-0.5" />
                      Tips, tools, and checkpoints to avoid rework
                    </li>
                  </ul>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Published</div>
                      <div className="text-white font-semibold">{post.date}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Read Time</div>
                      <div className="text-white font-semibold">{post.readTime}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Author</div>
                      <div className="text-white font-semibold">{post.author}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 border-t border-white/10">
                <article className="prose prose-invert max-w-none">
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-gray-300 leading-relaxed mb-5">
                    {post.excerpt}
                  </motion.p>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-2xl font-bold text-white mb-3">Overview</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-300 leading-relaxed mb-5">
                    This deep dive covers fundamentals, practical workflows, and expert tips you can immediately apply. We’ll look at when and why to use specific techniques, how to make trade-offs, and how to validate results efficiently.
                  </motion.p>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="text-2xl font-bold text-white mb-3">Key Takeaways</motion.h3>
                  <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="list-disc pl-5 text-gray-300 leading-relaxed mb-5">
                    <li>Understand the core principles and constraints before optimizing.</li>
                    <li>Choose materials and parameters aligned to target performance.</li>
                    <li>Iterate with small, testable changes to reduce risk and time.</li>
                  </motion.ul>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Skill Level</div>
                      <div className="text-white font-semibold">Intermediate</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Estimated Time</div>
                      <div className="text-white font-semibold">{post.readTime}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Use Cases</div>
                      <div className="text-white font-semibold">R&D, Prototyping, Production</div>
                    </div>
                  </div>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="text-2xl font-bold text-white mb-3">Step-by-step Workflow</motion.h3>
                  <motion.ol initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="list-decimal pl-5 text-gray-300 leading-relaxed mb-5">
                    <li className="mb-2">Define objectives and constraints; gather inputs and assumptions.</li>
                    <li className="mb-2">Prepare geometry and select appropriate materials and parameters.</li>
                    <li className="mb-2">Run initial iterations; check results against acceptance criteria.</li>
                    <li className="mb-2">Refine designs and validate through targeted testing or simulation.</li>
                    <li>Document outcomes and lessons learned for future reuse.</li>
                  </motion.ol>

                  <motion.blockquote initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="border-l-4 border-violet-500/50 pl-4 text-gray-300 italic mb-5">
                    “Great engineering outcomes come from disciplined iteration, clear objectives, and measurable validation.”
                  </motion.blockquote>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="text-2xl font-bold text-white mb-3">Common Pitfalls</motion.h3>
                  <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="list-disc pl-5 text-gray-300 leading-relaxed mb-5">
                    <li>Skipping problem definition and baseline measurements.</li>
                    <li>Over-optimizing without considering manufacturability.</li>
                    <li>Ignoring post-processing and testing requirements.</li>
                  </motion.ul>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="text-2xl font-bold text-white mb-3">Resources</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="text-gray-300 leading-relaxed mb-5">
                    Explore standards, datasheets, and recommended tools to go deeper. Align tool choice to problem complexity and your team’s skillset.
                  </motion.p>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl font-bold text-white mb-3">Conclusion</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="text-gray-300 leading-relaxed">
                    Apply these principles to accelerate development and improve reliability. For complex scenarios, consider expert consultation to de-risk your path to production.
                  </motion.p>
                </article>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
