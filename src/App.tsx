import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ScrollToTop } from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const ServicesCAD = lazy(() => import('./pages/ServicesCAD').then(m => ({ default: m.ServicesCAD })));
const ServicesCAE = lazy(() => import('./pages/ServicesCAE').then(m => ({ default: m.ServicesCAE })));
const Services3DPrinting = lazy(() => import('./pages/Services3DPrinting').then(m => ({ default: m.Services3DPrinting })));
const ServicesSpecialized = lazy(() => import('./pages/ServicesSpecialized').then(m => ({ default: m.ServicesSpecialized })));
const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })));
const Training = lazy(() => import('./pages/Training').then(m => ({ default: m.Training })));
const Workshops = lazy(() => import('./pages/Workshops').then(m => ({ default: m.Workshops })));
const Industries = lazy(() => import('./pages/Industries').then(m => ({ default: m.Industries })));
const IndustryAerospace = lazy(() => import('./pages/IndustryAerospace').then(m => ({ default: m.IndustryAerospace })));
const IndustryAutomotive = lazy(() => import('./pages/IndustryAutomotive').then(m => ({ default: m.IndustryAutomotive })));
const IndustryHealthcare = lazy(() => import('./pages/IndustryHealthcare').then(m => ({ default: m.IndustryHealthcare })));
const IndustryManufacturing = lazy(() => import('./pages/IndustryManufacturing').then(m => ({ default: m.IndustryManufacturing })));
const IndustryResearch = lazy(() => import('./pages/IndustryResearch').then(m => ({ default: m.IndustryResearch })));
const CaseStudies = lazy(() => import('./pages/CaseStudies').then(m => ({ default: m.CaseStudies })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const GetQuote = lazy(() => import('./pages/GetQuote').then(m => ({ default: m.GetQuote })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-violet-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showLoader && <LoadingAnimation />}
      <ScrollToTop />
      <div className="min-h-screen bg-gray-950 text-white">
        <ScrollProgress />
        <ChatAssistant />
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cad" element={<ServicesCAD />} />
            <Route path="/services/cae" element={<ServicesCAE />} />
            <Route path="/services/3d-printing" element={<Services3DPrinting />} />
            <Route path="/services/specialized" element={<ServicesSpecialized />} />
            <Route path="/products" element={<Products />} />
            <Route path="/training" element={<Training />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/aerospace-defense" element={<IndustryAerospace />} />
            <Route path="/industries/automotive" element={<IndustryAutomotive />} />
            <Route path="/industries/healthcare" element={<IndustryHealthcare />} />
            <Route path="/industries/industrial-manufacturing" element={<IndustryManufacturing />} />
            <Route path="/industries/research-development" element={<IndustryResearch />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-a-quote" element={<GetQuote />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
