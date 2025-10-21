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
    slug: 'utm-specimens-dlp-abs-resin',
    category: 'materials',
    icon: 'Droplets',
    name: 'UTM Specimens – DLP ABS Resin',
    type: 'Resin Material Samples',
    properties: 'ABS-like mechanical behavior',
    applications: 'Mechanical testing, validation, education',
    price: 'Request Quote',
    features: ['DLP printed ABS-like resin', 'Dimensional accuracy', 'Consistent mechanical properties', 'Ready for tensile tests'],
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063285/WhatsApp_Image_2025-10-21_at_21.37.09_3b6b26a1_g0c7e8.jpg',
    description: 'Standard UTM dog-bone specimens printed in ABS-like DLP resin for repeatable mechanical testing and benchmarking.'
  },
  {
    slug: 'electronics-casings',
    category: 'accessories',
    icon: 'Wrench',
    name: 'Electronics Casings',
    type: 'Custom Enclosures',
    applications: 'Consumer electronics, industrial controllers',
    price: 'Request Quote',
    features: ['Custom-fit design', 'Snap-fit & screw bosses', 'Heat management options', 'Production-ready finish'],
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063284/WhatsApp_Image_2025-10-21_at_21.37.25_a0edc21c_hjzhwe.jpg',
    description: 'Precision 3D printed casings for electronics with robust mounting, optimized airflow, and professional surface quality.'
  },
  {
    slug: 'bambu-a1-fdm-printer',
    category: 'printers',
    icon: 'Printer',
    name: 'Bambu A1',
    type: 'FDM Manufacturing Printer',
    buildVolume: 'Up to 256 × 256 × 256 mm',
    resolution: '0.1–0.28 mm layer height',
    price: 'Request Quote',
    features: ['High-speed CoreXY', 'Auto calibration', 'Multi-material ready', 'Quiet and reliable operation'],
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063284/WhatsApp_Image_2025-10-21_at_21.37.26_a05337c5_ppoej2.jpg',
    description: 'Production-ready FDM machine ideal for rapid prototyping and batch manufacturing with consistent print quality.'
  },
  {
    slug: '3d-scanner',
    category: 'accessories',
    icon: 'Wrench',
    name: '3D Scanner',
    type: 'Digitization & Reverse Engineering',
    price: 'Request Quote',
    features: ['High-accuracy capture', 'Fast point cloud generation', 'Reverse engineering ready', 'Portable setup'],
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063284/WhatsApp_Image_2025-10-21_at_21.37.26_abde6c88_rwwxdp.jpg',
    description: 'Capture precise 3D geometry for design iteration, inspection, and reverse engineering workflows.'
  }
];
