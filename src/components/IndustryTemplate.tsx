import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SEO } from './SEO';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';
import { Button } from './Button';
import { CheckCircle } from 'lucide-react';

interface Challenge {
  problem: string;
  solution: string;
}

interface CaseHighlight {
  title: string;
  result: string;
}

interface IndustryTemplateProps {
  industry: string;
  icon: ReactNode;
  description: string;
  challenges: Challenge[];
  caseHighlights: CaseHighlight[];
}

export const IndustryTemplate = ({ industry, icon, description, challenges, caseHighlights }: IndustryTemplateProps) => {
  return (
    <>
      <SEO title={`${industry} Solutions`} description={description} />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 justify-center mb-6">
            {icon}
            <h1 className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk']">{industry}</h1>
          </div>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">{description}</p>

          <SectionHeader title="Challenges We Solve" />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {challenges.map((ch, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card>
                  <h3 className="font-semibold text-red-400 mb-2">Challenge:</h3>
                  <p className="text-gray-300 mb-4">{ch.problem}</p>
                  <h3 className="font-semibold text-green-400 mb-2">Our Solution:</h3>
                  <p className="text-gray-300">{ch.solution}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <SectionHeader title="Success Stories" />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {caseHighlights.map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-3" size={36} />
                  <h3 className="font-bold text-white mb-2">{cs.title}</h3>
                  <p className="text-gray-400 text-sm">{cs.result}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
