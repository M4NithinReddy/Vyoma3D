import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { trainingCourses } from '../data/training';

 type EnrollForm = {
  course?: string;
  name: string;
  email: string;
  phone?: string;
  mode?: 'online' | 'offline' | 'corporate';
  preferredStart?: string;
  message?: string;
};

export const Enroll = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<EnrollForm>();

  const onSubmit = async (data: EnrollForm) => {
    console.log('Enrollment request:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEO title="Enrollment Submitted" />
        <div className="section-padding">
          <div className="container mx-auto container-padding">
            <Card className="max-w-2xl mx-auto text-center">
              <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
              <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
              <p className="text-gray-400 mb-6">We received your enrollment request. Our team will contact you shortly with the next steps.</p>
              <Button onClick={() => window.location.href = '/'}>Return Home</Button>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Enroll Now" />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Enrollment" title="Enroll in a Training Program" description="Share your details and preferred course. We'll guide you through schedules and onboarding." />

          <Card className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Select Course</label>
                    <select {...register('course')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300">
                      <option value="">I'm not sure yet</option>
                      {trainingCourses.map(c => (
                        <option key={c.slug} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input {...register('name', { required: 'Name is required' })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input type="email" {...register('email', { required: 'Email is required' })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input {...register('phone')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Mode</label>
                    <select {...register('mode')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300">
                      <option value="">Select mode</option>
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                      <option value="corporate">Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Start</label>
                    <input type="date" {...register('preferredStart')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea rows={4} {...register('message')} placeholder="Any specific expectations or schedule preferences" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">Submit Enrollment</Button>
              </motion.div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};
