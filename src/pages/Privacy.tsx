import { SEO } from '../components/SEO';
import { Card } from '../components/Card';

export const Privacy = () => (
  <>
    <SEO title="Privacy Policy" />
    <div className="section-padding">
      <div className="container mx-auto container-padding max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <Card>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">Last updated: October 7, 2025</p>

            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 mb-6">
              We collect information you provide directly to us, including name, email, phone number, company details, and project specifications when you request quotes or services.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 mb-6">
              We use the information to provide services, respond to inquiries, send updates about your projects, and improve our offerings. We never sell your personal information.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p className="text-gray-400 mb-6">
              We implement industry-standard security measures to protect your information. All data is encrypted in transit and at rest.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
            <p className="text-gray-400 mb-6">
              You have the right to access, correct, or delete your personal information. Contact us at privacy@vyoma3d.com for requests.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="text-gray-400">
              For privacy-related questions, email privacy@vyoma3d.com or call +1 (555) 123-4567.
            </p>
          </div>
        </Card>
      </div>
    </div>
  </>
);
