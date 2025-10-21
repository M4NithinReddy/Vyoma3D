import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const openings = [
  {
    title: 'Mechanical Design Engineer',
    location: 'Hyderabad, IN',
    type: 'Full-time',
    summary: 'Own CAD modeling, drawings, and DFM/DFA for client projects across industries.',
    perks: ['Competitive salary', 'Learning budget', 'Flexible schedule']
  },
  {
    title: 'CAE Analyst (FEA/CFD)',
    location: 'Hyderabad, IN',
    type: 'Full-time',
    summary: 'Run FEA/CFD studies, correlate results, and deliver simulation-backed recommendations.',
    perks: ['Cutting-edge projects', 'Mentorship', 'Performance incentives']
  },
  {
    title: 'Additive Manufacturing Engineer',
    location: 'Hyderabad, IN',
    type: 'Full-time',
    summary: 'Set up AM builds (SLA/FDM/DLP), optimize parameters, and oversee post-processing & QA.',
    perks: ['Hands-on lab', 'Career growth', 'Health benefits']
  }
];

export const Careers = () => {
  return (
    <>
      <SEO title="Careers at VYOMA3D" description="Join VYOMA3D to build the future of engineering and additive manufacturing." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Careers"
            title="Build the Future with VYOMA3D"
            description="We are a team of engineers, makers, and problem-solvers. If you love building real products and solving hard problems, let’s talk."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="mb-2 text-sm text-gray-400">{job.location} • {job.type}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{job.summary}</p>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    {job.perks.map(p => (<li key={p}>• {p}</li>))}
                  </ul>
                  <Button variant="outline" onClick={() => window.location.href = `mailto:careers@vyoma3d.com?subject=Application: ${encodeURIComponent(job.title)}`}>Apply via Email</Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Card>
              <h3 className="text-2xl font-bold text-white mb-3">Didn’t find a match?</h3>
              <p className="text-gray-400 mb-4">We’re always excited to meet passionate people. Share your profile and tell us how you want to contribute.</p>
              <Button onClick={() => window.location.href = 'mailto:careers@vyoma3d.com?subject=General%20Application'}>Send Resume</Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
