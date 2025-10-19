import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, Droplets, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { staggerContainer, staggerItem } from '../lib/animations';
import { products as allProducts } from '../data/products';
import { useNavigate } from 'react-router-dom';

const IconMap = { Printer, Droplets, Wrench } as const;
const products = allProducts.map(p => ({
  ...p,
  iconComp: IconMap[p.icon]
}));

const filterOptions = [
  { id: 'all', label: 'All Products', icon: null },
  { id: 'printers', label: 'Printers', icon: Printer },
  { id: 'materials', label: 'Materials', icon: Droplets },
  { id: 'accessories', label: 'Accessories', icon: Wrench }
];

export const Products = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <>
      <SEO title="3D Printers & Materials" description="Premium 3D printers, resins, filaments, and accessories for professional applications." />

      <div className="section-padding pt-32">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Products" title="Professional 3D Printing Solutions" description="Premium hardware and materials for demanding applications." />

          <div className="flex gap-3 mb-16 justify-center flex-wrap">
            {filterOptions.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300'
                }`}
              >
                {cat.icon && <cat.icon size={18} />}
                {cat.label}
              </motion.button>
            ))}
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="relative h-48 overflow-hidden rounded-t-xl -m-6 mb-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <product.iconComp className="text-violet-400" size={24} />
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow pt-6">
                      <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                      <p className="text-sm text-violet-400 mb-3">{product.type}</p>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">{product.description}</p>

                      {product.buildVolume && <p className="text-sm text-gray-300 mb-1"><span className="text-gray-500 font-medium">Build Volume:</span> {product.buildVolume}</p>}
                      {product.resolution && <p className="text-sm text-gray-300 mb-1"><span className="text-gray-500 font-medium">Resolution:</span> {product.resolution}</p>}
                      {product.properties && <p className="text-sm text-gray-300 mb-1"><span className="text-gray-500 font-medium">Properties:</span> {product.properties}</p>}
                      {product.applications && <p className="text-sm text-gray-300 mb-4"><span className="text-gray-500 font-medium">Applications:</span> {product.applications}</p>}

                      <div className="mt-4 mb-4">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Features</p>
                        <ul className="space-y-2">
                          {product.features.map(f => (
                            <li key={f} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                        <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{product.price}</span>
                        <Button size="sm" variant="outline" onClick={() => navigate(`/products/${product.slug}`)}>Learn More</Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};
