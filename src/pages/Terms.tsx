import { SEO } from '../components/SEO';
import { Card } from '../components/Card';

export const Terms = () => (
  <>
    <SEO title="Terms of Service" />
    <div className="section-padding">
      <div className="container mx-auto container-padding max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <Card>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">Last updated: October 7, 2025</p>

            <h2 className="text-2xl font-bold text-white mb-4">1. Services</h2>
            <p className="text-gray-400 mb-6">
              VYOMA3D provides CAD/CAE engineering services, 3D printing, and training programs. All services are subject to availability and acceptance of project specifications.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Payment Terms</h2>
            <p className="text-gray-400 mb-6">
              Quotes are valid for 30 days. Payment terms are net 30 for approved clients. We accept wire transfer, ACH, and major credit cards.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="text-gray-400 mb-6">
              Clients retain ownership of their designs and data. VYOMA3D retains rights to methodologies and processes used in service delivery.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Warranties</h2>
            <p className="text-gray-400 mb-6">
              Services are provided with professional care. We warrant work will meet specifications agreed upon in writing.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400 mb-6">
              Our liability is limited to the amount paid for the specific service. We are not liable for consequential or indirect damages.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Contact</h2>
            <p className="text-gray-400">
              For questions about these terms, contact legal@vyoma3d.com.
            </p>
          </div>
        </Card>
      </div>
    </div>
  </>
);
