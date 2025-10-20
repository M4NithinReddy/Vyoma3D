import { useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Card } from '../components/Card';
import { cases } from './CaseStudies';

export const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const csId = Number(id);

  const cs = useMemo(() => cases.find(c => c.id === csId), [csId]);

  if (!cs) {
    return (
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Case study not found</h2>
            <p className="text-gray-400 mb-6">The case study you are looking for does not exist.</p>
            <button
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white"
            >
              <ArrowLeft size={16} />
              Back to Case Studies
            </button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${cs.title} - Case Study`} description={`${cs.industry} • ${cs.service} • ${cs.result}`} />

      <div className="section-padding">
        <div className="w-full px-6 md:px-12">
          <div className="max-w-none">
            <div className="mb-6">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                <ArrowLeft size={16} />
                Back to Case Studies
              </Link>
            </div>

            <Card className="overflow-hidden p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img src={cs.image} alt={cs.title} className="w-full h-[420px] md:h-[560px] object-cover" style={cs.id === 2 ? { objectPosition: 'center 70%' } : undefined} />
                </div>
                <div className="p-10 md:p-14">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{cs.title}</h1>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-violet-300 text-xs">{cs.industry}</span>
                    <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-300 text-xs">{cs.service}</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300 text-xs">{cs.tech}</span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-0">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Challenge</div>
                      <div className="text-gray-300 text-sm leading-relaxed line-clamp-3">{cs.challenge}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Solution</div>
                      <div className="text-gray-300 text-sm leading-relaxed line-clamp-3">{cs.solution}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Result</div>
                      <div className="text-gray-300 text-sm leading-relaxed line-clamp-3">{cs.result}</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Industry</div>
                      <div className="text-white font-semibold">{cs.industry}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Service</div>
                      <div className="text-white font-semibold">{cs.service}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Technology</div>
                      <div className="text-white font-semibold">{cs.tech}</div>
                    </div>
                  </div>
                  <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-white font-semibold mb-2">Overview</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {cs.challenge}. {cs.solution}. {cs.result}.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-14 border-t border-white/10">
                <article className="prose prose-invert max-w-none">
                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-2xl font-bold text-white mb-2.5">Challenge</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-gray-300 leading-relaxed mb-4">{cs.challenge}</motion.p>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl font-bold text-white mb-2.5">Objectives</motion.h3>
                  <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="list-disc pl-5 text-gray-300 leading-relaxed mb-4">
                    <li>Define measurable targets for performance and quality.</li>
                    <li>Reduce cost and lead time without compromising safety factors.</li>
                    <li>Ensure manufacturability using {cs.tech} and existing tooling.</li>
                  </motion.ul>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="text-2xl font-bold text-white mb-2.5">Approach</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="text-gray-300 leading-relaxed mb-4">{cs.solution}</motion.p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Baseline vs Target</div>
                      <div className="text-white font-semibold">Before → After</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Lead Time</div>
                      <div className="text-white font-semibold">Cut by 40–70%</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Cost Impact</div>
                      <div className="text-white font-semibold">Significant reduction</div>
                    </div>
                  </div>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-2xl font-bold text-white mb-2.5">Execution Steps</motion.h3>
                  <motion.ol initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="list-decimal pl-5 text-gray-300 leading-relaxed mb-4">
                    <li className="mb-2">Discovery: requirements, constraints, acceptance criteria.</li>
                    <li className="mb-2">Design: CAD preparation and DFM/DFA considerations.</li>
                    <li className="mb-2">Analysis: simulation/verification aligned to objectives.</li>
                    <li className="mb-2">Build: manufacturing with {cs.tech} and process control.</li>
                    <li>Validate: inspection, testing, and iteration.</li>
                  </motion.ol>

                  <motion.blockquote initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="border-l-4 border-violet-500/50 pl-4 text-gray-300 italic mb-5">
                    “Clarity in objectives and tight feedback loops were key to achieving the outcome.”
                  </motion.blockquote>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="text-2xl font-bold text-white mb-2.5">Measured Results</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="text-gray-300 leading-relaxed mb-4">{cs.result}</motion.p>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="text-2xl font-bold text-white mb-2.5">Timeline</motion.h3>
                  <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="list-disc pl-5 text-gray-300 leading-relaxed mb-4">
                    <li>Week 1: Discovery and success criteria definition.</li>
                    <li>Weeks 2–3: Design and simulation iterations.</li>
                    <li>Week 4: Build, inspect, and validate.</li>
                  </motion.ul>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="text-2xl font-bold text-white mb-2.5">Lessons Learned</motion.h3>
                  <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }} className="list-disc pl-5 text-gray-300 leading-relaxed mb-4">
                    <li>Front-load DFM/validation to avoid late-stage rework.</li>
                    <li>Invest in measurement for objective decision making.</li>
                    <li>Modular design accelerates iteration speed.</li>
                  </motion.ul>

                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="text-2xl font-bold text-white mb-3">Conclusion</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }} className="text-gray-300 leading-relaxed">
                    The project delivered measurable improvements while reducing risk and time-to-market. The same framework can be adapted to similar challenges across {cs.industry} and adjacent domains.
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
