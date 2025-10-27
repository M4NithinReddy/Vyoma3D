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
  },
  {
    slug: 'bonicbot-s1',
    category: 'accessories',
    icon: 'Wrench',
    name: 'BonicBot S1',
    type: 'AI-Powered Humanoid Robot (Education & Research)',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761577369/WhatsApp_Image_2025-10-26_at_9.52.40_PM_on5x4c.jpg',
    description: 'An all-in-one robotics learning companion that merges AI, coding, and mechanical design into a single, interactive humanoid platform. Operates in manual and AI-powered autonomous modes with real-time control, facial/object recognition, and conversational interaction. 300 AI Credits worth ₹5000 included.',
    applications: 'Education, training, research, and AI robotics projects',
    features: [
      'Conversational AI for interactive learning',
      'Object & facial recognition with vision-based sensors',
      '5 DOF robotic arm for task simulation',
      'Scratch & Python coding support (Codeit)',
      'Smart mobile/web app for control and monitoring',
      'IoT integration, cloud access, and status monitoring',
      '300 AI credits included (worth ₹5000)'
    ],
    specs: [
      { label: 'Height', value: '120 cm' },
      { label: 'Material', value: 'High-grade premium PLA (3D Printed)' },
      { label: 'Arms', value: 'Dual 6 DOF arms with shoulder, elbow, and wrist joints' },
      { label: 'Head', value: '2 DOF rotation for interactive movement' },
      { label: 'Mobility', value: 'Remote-controlled wheeled base' },
      { label: 'Display', value: 'Integrated touchscreen tablet' },
      { label: 'Connectivity', value: 'Wi‑Fi, Bluetooth, Cloud Access' },
      { label: 'Battery Life', value: 'Up to 2.5 hours' },
      { label: 'Control Options', value: 'Manual actuator control, face tracking, sequence recording' },
      { label: 'Software', value: 'Codeit (Scratch & Python), ROS-based compatibility' },
      { label: 'AI System', value: 'NLP, Vision Analysis, Gesture Control' }
    ]
  },
  {
    slug: 'bonicbot-a1',
    category: 'accessories',
    icon: 'Wrench',
    name: 'BonicBot A1',
    type: 'Advanced AI Humanoid Robot (Research & Industrial Simulation)',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761577587/WhatsApp_Image_2025-10-26_at_9.52.59_PM_oli6xs.jpg',
    description: 'Advanced variant of the BonicBot series for research and industrial simulations. Includes high-performance onboard AI compute, SLAM and LiDAR-based navigation, and depth camera for ROS learning. 300 AI Credits worth ₹5000 included.',
    applications: 'Advanced research, industrial simulations, and AI/ROS projects',
    features: [
      'All BonicBot S1 standard features',
      'NVIDIA Jetson Nano for high-performance AI computation',
      'SLAM & LiDAR-based navigation',
      'Depth camera for ROS learning and perception',
      'Suitable for research and advanced AI projects',
      '300 AI credits included (worth ₹5000)'
    ],
    specs: [
      { label: 'Height', value: '120 cm' },
      { label: 'Material', value: 'High-grade premium PLA (3D Printed)' },
      { label: 'Arms', value: 'Dual 6 DOF arms with shoulder, elbow, and wrist joints' },
      { label: 'Head', value: '2 DOF rotation for interactive movement' },
      { label: 'Mobility', value: 'Remote-controlled wheeled base' },
      { label: 'Display', value: 'Integrated touchscreen tablet' },
      { label: 'Connectivity', value: 'Wi‑Fi, Bluetooth, Cloud Access' },
      { label: 'Battery Life', value: 'Up to 2.5 hours' },
      { label: 'AI Compute', value: 'NVIDIA Jetson Nano' },
      { label: 'Navigation', value: 'SLAM with LiDAR' },
      { label: 'Perception', value: 'Depth camera, ROS-compatible' }
    ]
  }
]
