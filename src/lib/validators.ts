import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  purpose: z.string().min(1, 'Please select a purpose'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export const quoteFormSchema = z.object({
  serviceType: z.enum(['cad-cae', '3d-printing']),
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
  phone: z.string().optional(),

  projectSummary: z.string().optional(),
  domain: z.string().optional(),
  deliverables: z.array(z.string()).optional(),
  timeline: z.string().optional(),

  printProcess: z.string().optional(),
  material: z.string().optional(),
  tolerance: z.string().optional(),
  quantity: z.number().optional(),
  finish: z.string().optional(),
  files: z.any().optional()
});

export const trainingEnrollSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number required'),
  company: z.string().optional(),
  track: z.string().min(1, 'Please select a training track'),
  format: z.enum(['corporate', 'online', 'weekend']),
  preferredDate: z.string().optional(),
  experience: z.enum(['beginner', 'intermediate', 'advanced']),
  message: z.string().optional()
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address')
});
