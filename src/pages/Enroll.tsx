import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { trainingCourses } from '../data/training';

export const Enroll = () => {
  const wa = (text: string) => window.open(`https://wa.me/918142149666?text=${encodeURIComponent(text)}`, '_blank');

  return (
    <>
      <SEO title="Enroll Now" />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Enrollment" title="Enroll in a Training Program" description="Chat with us on WhatsApp to enroll. We'll guide you through schedules and onboarding." />

          <Card className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Enroll via WhatsApp</h3>
            <p className="text-gray-400 mb-4">Select a course and message us directly. We'll confirm slots and scheduling.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {trainingCourses.map(c => (
                <Button key={c.slug} variant="outline" onClick={() => wa(`Hello! I want to enroll in: ${c.title}`)}>
                  {c.title}
                </Button>
              ))}
            </div>
            <div className="mt-6">
              <Button className="w-full" onClick={() => wa('Hello! I want to enroll in a training program. Please guide me.')}>Chat on WhatsApp</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
