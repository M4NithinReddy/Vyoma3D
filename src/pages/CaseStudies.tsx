import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

export const cases = [
  { id: 1, title: 'Aerospace Bracket Optimization', industry: 'Aerospace', service: 'CAE', tech: 'Topology Optimization', challenge: 'Reduce weight while maintaining strength', solution: 'Generative design + FEA validation', result: '42% weight reduction, passed all tests', image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760970839/Generated_Image_October_20_2025_-_8_02PM_wnttpg.png' },
  { id: 2, title: 'Custom Surgical Guide', industry: 'Healthcare', service: '3D Printing', tech: 'SLA Biocompatible', challenge: 'Patient-specific implant guide', solution: 'CT scan to CAD model, SLA printing', result: '98% accuracy, reduced surgery time by 30 min', image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760971717/Generated_Image_October_20_2025_-_8_17PM_zziwep.png' },
  { id: 3, title: 'Automotive Fixture Tooling', industry: 'Automotive', service: '3D Printing', tech: 'FDM Nylon CF', challenge: 'Expensive metal tooling', solution: '3D printed jigs with carbon fiber nylon', result: '75% cost savings, 1-week delivery', image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760971212/Generated_Image_October_20_2025_-_8_09PM_1_tzoovh.png' },
  { id: 4, title: 'Heat Exchanger CFD', industry: 'Industrial', service: 'CAE', tech: 'CFD Analysis', challenge: 'Poor cooling performance', solution: 'Flow simulation and design iteration', result: '35% efficiency improvement', image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760971406/Generated_Image_October_20_2025_-_8_11PM_mzayou.png' },
  { id: 5, title: 'Drone Frame Prototype', industry: 'Aerospace', service: '3D Printing', tech: 'SLA + FDM', challenge: 'Rapid iteration for R&D', solution: 'Multi-material prototyping', result: '15 iterations in 3 weeks', image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760971407/Generated_Image_October_20_2025_-_8_12PM_q2qujl.png' }
];

export const CaseStudies = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? cases : cases.filter(c => c.industry.toLowerCase().includes(filter) || c.service.toLowerCase().includes(filter));

  return (
    <>
      <SEO title="Case Studies" description="Real-world success stories showcasing our CAD, CAE, and 3D printing expertise." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Case Studies" title="Proven Results Across Industries" description="Discover how we've helped clients solve complex engineering challenges." />

          <div className="flex gap-3 mb-12 justify-center flex-wrap">
            {['all', 'aerospace', 'automotive', 'healthcare', 'cae', '3d printing'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${filter === f ? 'bg-violet-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, i) => (
              <motion.div key={cs.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/case-studies/${cs.id}`}>
                  <Card className="h-full hover:border-violet-500/50 overflow-hidden p-0">
                    <img src={cs.image} alt={cs.title} className="w-full h-48 object-cover" style={cs.id === 2 ? { objectPosition: 'center 70%' } : undefined} />
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-violet-400 text-xs">{cs.industry}</span>
                        <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs">{cs.service}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{cs.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{cs.result}</p>
                      <span className="text-violet-400 flex items-center gap-2 font-medium">
                        Read more <ArrowRight size={16} />
                      </span>
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
