import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { quoteFormSchema } from '../lib/validators';

type FormData = {
  serviceType: 'cad-cae' | '3d-printing';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectSummary?: string;
  domain?: string;
  timeline?: string;
  printProcess?: string;
  material?: string;
  quantity?: number;
};

export const GetQuote = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(quoteFormSchema)
  });

  const serviceType = watch('serviceType');

  const onSubmit = async (data: FormData) => {
    console.log('Quote request:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEO title="Quote Submitted" />
        <div className="section-padding">
          <div className="container mx-auto container-padding">
            <Card className="max-w-2xl mx-auto text-center">
              <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
              <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
              <p className="text-gray-400 mb-6">We received your quote request and will respond within 24 hours.</p>
              <Button onClick={() => window.location.href = '/'}>Return Home</Button>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Get a Quote" />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Get a Quote" title="Start Your Project Today" description="Tell us about your needs and we'll provide a detailed quote within 24 hours." />

          <Card className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map(s => (
                <div key={s} className={`flex-1 h-2 rounded-full ${s <= step ? 'bg-violet-600' : 'bg-gray-700'}`} />
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-white mb-6">Select Service Type</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { value: 'cad-cae', label: 'CAD/CAE Services', desc: 'Design & Simulation' },
                      { value: '3d-printing', label: '3D Printing', desc: 'Rapid Manufacturing' }
                    ].map(opt => (
                      <label key={opt.value} className={`cursor-pointer p-6 border-2 rounded-xl transition-all ${serviceType === opt.value ? 'border-violet-500 bg-violet-500/10' : 'border-white/10 hover:border-white/20'}`}>
                        <input type="radio" value={opt.value} {...register('serviceType')} className="sr-only" />
                        <div className="font-bold text-white mb-1">{opt.label}</div>
                        <div className="text-sm text-gray-400">{opt.desc}</div>
                      </label>
                    ))}
                  </div>
                  {errors.serviceType && <p className="text-red-400 text-sm mt-2">{errors.serviceType.message}</p>}
                  <Button type="button" onClick={() => setStep(2)} className="w-full mt-6" disabled={!serviceType}>
                    Continue
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input {...register('name')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input type="email" {...register('email')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input {...register('company')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input {...register('phone')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
                    <Button type="button" onClick={() => setStep(3)} className="flex-1">Continue</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>

                  {serviceType === 'cad-cae' ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Summary</label>
                        <textarea {...register('projectSummary')} rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Domain</label>
                        <select {...register('domain')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300">
                          <option value="">Select domain</option>
                          <option value="aerospace">Aerospace</option>
                          <option value="automotive">Automotive</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Print Process</label>
                        <select {...register('printProcess')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300">
                          <option value="">Select process</option>
                          <option value="sla">SLA</option>
                          <option value="fdm">FDM</option>
                          <option value="dlp">DLP</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Material</label>
                        <input {...register('material')} placeholder="e.g., Standard Resin, PLA, Nylon" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                        <input type="number" {...register('quantity', { valueAsNumber: true })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 mt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(2)}>Back</Button>
                    <Button type="submit" className="flex-1">Submit Quote Request</Button>
                  </div>
                </motion.div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};
