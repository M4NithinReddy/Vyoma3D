import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const NotFound = () => (
  <>
    <SEO title="Page Not Found" />
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-2xl mx-auto text-center">
        <div className="text-8xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button>
              <Home size={20} />
              Go Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline">
              <Search size={20} />
              Browse Services
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  </>
);
