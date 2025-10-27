import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Printer, Droplets, Wrench, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { products } from '../data/products';

const IconMap = { Printer, Droplets, Wrench } as const;

export const ProductDetail = () => {
  const { slug } = useParams();
  const product = useMemo(() => products.find(p => p.slug === slug), [slug]);

  if (!product) {
    return (
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Product not found</h2>
            <p className="text-gray-400 mb-6">The product you are looking for does not exist.</p>
            <Link to="/products" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white">
              <ArrowLeft size={16} />
              Back to Products
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  const Icon = IconMap[product.icon];
  const related = products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <SEO title={`${product.name} - ${product.type}`} description={product.description} />

      <div className="section-padding">
        <div className="w-full px-6 md:px-12">
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <ArrowLeft size={16} />
              Back to Products
            </Link>
          </div>

          <Card className="overflow-hidden p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-[420px] md:h-[560px] object-cover" />
              </div>
              <div className="p-10 md:p-14">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="text-violet-400" size={24} />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{product.name}</h1>
                    <div className="text-violet-300 text-sm">{product.type}</div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">{product.description}</p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {product.buildVolume && (
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Build Volume</div>
                      <div className="text-white font-semibold">{product.buildVolume}</div>
                    </div>
                  )}
                  {product.resolution && (
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Resolution</div>
                      <div className="text-white font-semibold">{product.resolution}</div>
                    </div>
                  )}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-gray-500 mb-1">Price</div>
                    <div className="text-white font-semibold">{product.price}</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Features</div>
                  <ul className="space-y-2">
                    {product.features.map(f => (
                      <li key={f} className="text-gray-300 text-sm flex items-start gap-2">
                        <CheckCircle size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button size="sm" onClick={() => window.open(`https://wa.me/918142149666?text=${encodeURIComponent('Hello! I would like a quote for ' + product.name)}`, '_blank')}>Request Quote</Button>
                  <Button size="sm" variant="outline" onClick={() => window.open(`https://wa.me/918142149666?text=${encodeURIComponent('Hello! I want to talk to sales about ' + product.name)}`, '_blank')}>Contact Sales</Button>
                </div>
              </div>
            </div>

            {product.gallery && product.gallery.length > 0 && (
              <div className="p-10 md:p-14 border-t border-white/10">
                <div className="text-white font-semibold mb-4">Gallery</div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.gallery.map((src, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                        <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-56 object-cover" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {product.specs && product.specs.length > 0 && (
              <div className="p-10 md:p-14 border-t border-white/10">
                <div className="text-white font-semibold mb-4">Specifications</div>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.specs.map(s => (
                    <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                      <div className="text-gray-300">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-10 md:p-14 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-white font-semibold mb-3">In the Box</div>
                  <ul className="space-y-2">
                    <li className="text-gray-300 text-sm flex items-start gap-2"><CheckCircle size={16} className="text-violet-400 mt-0.5" /> Main Unit</li>
                    <li className="text-gray-300 text-sm flex items-start gap-2"><CheckCircle size={16} className="text-violet-400 mt-0.5" /> Power Cable and Adapters</li>
                    <li className="text-gray-300 text-sm flex items-start gap-2"><CheckCircle size={16} className="text-violet-400 mt-0.5" /> Starter Material Pack</li>
                    <li className="text-gray-300 text-sm flex items-start gap-2"><CheckCircle size={16} className="text-violet-400 mt-0.5" /> Tool Kit & User Guide</li>
                  </ul>
                </div>
                <div>
                  <div className="text-white font-semibold mb-3">FAQs</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-gray-200 text-sm font-semibold mb-1">What materials are supported?</div>
                      <div className="text-gray-400 text-sm">Depends on the variant; see specifications and contact sales for verified materials.</div>
                    </div>
                    <div>
                      <div className="text-gray-200 text-sm font-semibold mb-1">Is installation included?</div>
                      <div className="text-gray-400 text-sm">On-site setup and basic training are available as an add-on package.</div>
                    </div>
                    <div>
                      <div className="text-gray-200 text-sm font-semibold mb-1">Warranty coverage?</div>
                      <div className="text-gray-400 text-sm">Standard 1-year warranty with options for AMC extensions.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div className="p-10 md:p-14 border-t border-white/10">
                <div className="text-white font-semibold mb-4">Related Products</div>
                <div className="grid md:grid-cols-3 gap-4">
                  {related.map(r => (
                    <Link key={r.slug} to={`/products/${r.slug}`} className="block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="overflow-hidden rounded-t-xl">
                        <img src={r.image} alt={r.name} className="w-full h-40 object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="text-white font-semibold text-sm mb-1">{r.name}</div>
                        <div className="text-violet-300 text-xs">{r.type}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};
 
