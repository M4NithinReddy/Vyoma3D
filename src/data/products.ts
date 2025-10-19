export type Product = {
  slug: string;
  category: 'printers' | 'materials' | 'accessories';
  icon: 'Printer' | 'Droplets' | 'Wrench';
  name: string;
  type: string;
  image: string;
  description: string;
  price: string;
  buildVolume?: string;
  resolution?: string;
  properties?: string;
  applications?: string;
  features: string[];
  gallery?: string[];
  specs?: Array<{ label: string; value: string }>;
};

export const products: Product[] = [
  {
    slug: 'v3-pro-sla',
    category: 'printers',
    icon: 'Printer',
    name: 'V3 Pro SLA',
    type: 'SLA Resin Printer',
    buildVolume: '192 x 120 x 200 mm',
    resolution: '47 microns',
    price: 'Request Quote',
    features: ['High precision', 'Auto-leveling', 'WiFi connectivity', 'Touch screen interface'],
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional-grade SLA printer delivering unparalleled precision for detailed prototypes and production parts.',
    gallery: [
      'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: [
      { label: 'Build Volume', value: '192 x 120 x 200 mm' },
      { label: 'XY Resolution', value: '47 µm' },
      { label: 'Connectivity', value: 'WiFi, USB' }
    ]
  },
  {
    slug: 'v3-industrial-fdm',
    category: 'printers',
    icon: 'Printer',
    name: 'V3 Industrial FDM',
    type: 'FDM Printer',
    buildVolume: '300 x 300 x 400 mm',
    resolution: '100 microns',
    price: 'Request Quote',
    features: ['Dual extruder', 'Heated chamber', 'Industrial grade', 'Filament runout sensor'],
    image: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Robust FDM system designed for continuous production with engineering-grade thermoplastics.'
  },
  {
    slug: 'engineering-resin',
    category: 'materials',
    icon: 'Droplets',
    name: 'Engineering Resin',
    type: 'SLA Material',
    properties: 'High strength, heat resistant',
    applications: 'Functional prototypes',
    price: '₹ 7,499 / L',
    features: ['Heat deflection 120°C', 'High impact resistance', 'Low shrinkage', 'Excellent surface finish'],
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-performance resin engineered for functional testing and end-use applications requiring thermal stability.'
  },
  {
    slug: 'nylon-cf-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'Nylon CF',
    type: 'FDM Filament',
    properties: 'Carbon fiber reinforced',
    applications: 'End-use parts',
    price: '₹ 10,499 / kg',
    features: ['Superior strength', 'Lightweight', 'Chemical resistant', 'Low moisture absorption'],
    image: 'https://images.pexels.com/photos/5474041/pexels-photo-5474041.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Carbon fiber reinforced nylon offering exceptional strength-to-weight ratio for demanding applications.'
  },
  {
    slug: 'wash-cure-station',
    category: 'accessories',
    icon: 'Wrench',
    name: 'Wash & Cure Station',
    type: 'Post-Processing',
    features: ['Automated washing', 'UV curing', 'Timer control', 'Dual-stage process'],
    price: '₹ 24,999',
    applications: 'SLA post-processing',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete post-processing solution for SLA prints with automated washing and precision UV curing.'
  },
  {
    slug: 'build-plate-kit',
    category: 'accessories',
    icon: 'Wrench',
    name: 'Build Plate Kit',
    type: 'Accessory',
    features: ['Easy removal', 'Multiple sizes', 'PEI coating', 'Magnetic attachment'],
    price: '₹ 3,999',
    applications: 'FDM printing',
    image: 'https://images.pexels.com/photos/1089433/pexels-photo-1089433.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium build plate system with PEI surface for excellent adhesion and effortless part removal.'
  }
];
