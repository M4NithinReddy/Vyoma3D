import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Clock, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { trainingCourses } from '../data/training';

export const SyllabusDetail = () => {
  const { slug } = useParams();
  const course = useMemo(() => trainingCourses.find(c => c.slug === slug), [slug]);

  if (!course) {
    return (
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Syllabus not found</h2>
            <p className="text-gray-400 mb-6">The course you are looking for does not exist.</p>
            <Link to="/training" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white">
              <ArrowLeft size={16} />
              Back to Training
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${course.title} - Syllabus`} description={`Syllabus for ${course.title}`} />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mb-6">
            <Link to="/training" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <ArrowLeft size={16} />
              Back to Training
            </Link>
          </div>

          <Card className="overflow-hidden p-0">
            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{course.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="inline-flex items-center gap-2"><Layers size={16} className="text-violet-400" />{course.level}</span>
                <span className="inline-flex items-center gap-2"><Clock size={16} className="text-violet-400" />{course.duration}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">What you'll learn</h3>
                  <ul className="space-y-2">
                    {course.topics.map(t => (
                      <li key={t} className="text-gray-300 text-sm flex items-center gap-2">
                        <GraduationCap size={16} className="text-violet-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <h4 className="text-white font-semibold mb-2">Format</h4>
                  <p className="text-gray-400 text-sm">Live instructor-led sessions with hands-on exercises and assignments. Includes recordings and templates.</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Detailed Syllabus</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {course.syllabus.map((sec, i) => (
                    <motion.div key={sec.section} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                      <div className="p-5 rounded-xl bg-white/5 border border-white/10 h-full">
                        <div className="text-white font-semibold mb-3">{sec.section}</div>
                        <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                          {sec.items.map(it => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-10">
                <Button size="lg" onClick={() => window.location.href = '/enroll'}>
                  Enroll Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
