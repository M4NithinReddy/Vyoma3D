import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const GetQuote = () => {
  const wa = (text: string) => window.open(`https://wa.me/918142149666?text=${encodeURIComponent(text)}`, '_blank');

  return (
    <>
      <SEO title="Get a Quote" />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Get a Quote" title="Start Your Project Today" description="Tell us about your needs on WhatsApp and we'll provide a detailed quote." />

          <Card className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 mb-6">Click below to chat with our team and share your requirements.</p>
            <Button size="lg" onClick={() => wa('Hello! I would like to get a quote for my project. Here are some details:')}>Chat on WhatsApp</Button>
          </Card>
        </div>
      </div>
    </>
  );
};
