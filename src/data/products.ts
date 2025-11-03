export type Product = {
  slug: string;
  category: 'materials' | 'robots';
  icon: 'Bot' | 'Droplets';
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
    slug: 'bonicbot-s1',
    category: 'robots',
    icon: 'Bot',
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
    category: 'robots',
    icon: 'Bot',
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
  },
  {
    slug: 'pla-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'PLA',
    type: 'FDM Filament',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762092904/pla1_vv21vu.jpg',
    description: 'Easy-to-print, dimensionally stable filament ideal for rapid prototyping, jigs, fixtures, and visual models where accuracy and finish matter most.',
    properties: 'Low warp, low odor, good stiffness, excellent surface finish',
    applications: 'Concept models, educational parts, jigs/fixtures, visual prototypes, cosplay/props',
    features: [
      'Consistent dimensional accuracy for tight-tolerance parts',
      'Smooth surface quality with minimal post-processing',
      'Low odor and easy printability across most printers',
      'Reduced shrinkage for reliable large-area prints',
      'Bio‑based formulation'
    ],
    specs: [
      { label: 'Material', value: 'PLA (Polylactic Acid)' },
      { label: 'Nozzle Temp', value: '190–220°C (typical)' },
      { label: 'Bed Temp', value: '50–60°C (typical)' },
      { label: 'Enclosure', value: 'Not required' },
      { label: 'Recommended Nozzle', value: '0.4 mm brass' },
      { label: 'Filament Diameter', value: '1.75 mm' }
    ]
  },
  {
    slug: 'cf-petg-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'CF-PETG',
    type: 'Carbon Fiber Reinforced Filament',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762092903/cf-petg2_hgkiez.jpg',
    description: 'Carbon fiber reinforced PETG offering high stiffness, improved heat resistance, and low warp for robust, functional components.',
    properties: 'High stiffness, good impact strength, elevated heat resistance, low moisture uptake vs. nylon',
    applications: 'Functional brackets, machine mounts, drone and robotics parts, end‑use enclosures',
    features: [
      'Carbon fiber reinforcement for superior rigidity-to-weight ratio',
      'Dimensional stability and low shrink for accurate assemblies',
      'Good chemical resistance suitable for shop-floor environments',
      'Matte carbon finish that hides layer lines',
      'Prints without a full enclosure on most machines'
    ],
    specs: [
      { label: 'Material', value: 'PETG + Carbon Fiber' },
      { label: 'Nozzle Temp', value: '230–260°C (typical)' },
      { label: 'Bed Temp', value: '70–90°C (typical)' },
      { label: 'Enclosure', value: 'Recommended but not required' },
      { label: 'Recommended Nozzle', value: '0.4–0.6 mm hardened steel' },
      { label: 'Abrasion', value: 'High – abrasive; use hardened nozzle' },
      { label: 'Filament Diameter', value: '1.75 mm' }
    ]
  },
  {
    slug: 'cf-pla-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'CF-PLA',
    type: 'Carbon Fiber Reinforced Filament',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762092904/CF-PLA3_o70ugm.webp',
    description: 'PLA blended with chopped carbon fiber for increased stiffness, reduced warping, and a premium matte aesthetic.',
    properties: 'Very high rigidity, low warp, excellent surface quality, easy to print',
    applications: 'Fixtures, mockups, lightweight structural components, aesthetic parts',
    features: [
      'Superior rigidity for lightweight structural prototypes',
      'Matte texture that reduces visible layer artifacts',
      'Lower print temperatures and easy processability',
      'Stable geometry with minimal curling or warping',
      'Excellent dimensional stability for snap-fit designs'
    ],
    specs: [
      { label: 'Material', value: 'PLA + Carbon Fiber' },
      { label: 'Nozzle Temp', value: '200–230°C (typical)' },
      { label: 'Bed Temp', value: '50–60°C (typical)' },
      { label: 'Enclosure', value: 'Not required' },
      { label: 'Recommended Nozzle', value: '0.4–0.6 mm hardened steel' },
      { label: 'Surface Finish', value: 'Matte, low visible layer lines' },
      { label: 'Filament Diameter', value: '1.75 mm' }
    ]
  },
  {
    slug: 'pc-abs-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'PC-ABS',
    type: 'Engineering Filament',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762092904/pc-abs4_kjutjq.png',
    description: 'A professional blend of polycarbonate and ABS that balances strength, impact resistance, and elevated heat performance for demanding applications.',
    properties: 'High impact strength, high temperature tolerance, good toughness, improved aesthetics vs. ABS',
    applications: 'Automotive interiors, tooling, electrical enclosures, functional prototypes in warm environments',
    features: [
      'Excellent impact resistance for rugged end‑use parts',
      'Heat tolerance suitable for under‑hood style conditions',
      'Better layer adhesion and finish than standard ABS',
      'Good machinability and post‑processing compatibility',
      'Ideal for snap‑fit and screw‑boss designs'
    ],
    specs: [
      { label: 'Material', value: 'PC/ABS Blend' },
      { label: 'Nozzle Temp', value: '250–280°C (typical)' },
      { label: 'Bed Temp', value: '90–110°C (typical)' },
      { label: 'Enclosure', value: 'Required for best results' },
      { label: 'Recommended Nozzle', value: '0.4–0.6 mm' },
      { label: 'Strength', value: 'High impact and heat resistance' },
      { label: 'Filament Diameter', value: '1.75 mm' }
    ]
  },
  {
    slug: 'petg-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'PETG',
    type: 'FDM Filament',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762092904/PETG-HS_5_mrw1om.webp',
    description: 'Tough, low‑warp engineering filament with balanced strength, ductility, and chemical resistance—great for functional applications.',
    properties: 'Tough and ductile, good chemical resistance, low shrink, good transparency (natural grades)',
    applications: 'Mechanical housings, clips, fluid-contact jigs, consumer products, outdoor fixtures',
    features: [
      'Low warp and shrink for reliable large prints',
      'Balanced strength and impact resistance',
      'Moisture tolerant and easier than nylon to manage',
      'Compatible with a wide range of printers',
      'Good surface finish with minimal stringing when tuned'
    ],
    specs: [
      { label: 'Material', value: 'PETG (Polyethylene Terephthalate Glycol)' },
      { label: 'Nozzle Temp', value: '230–250°C (typical)' },
      { label: 'Bed Temp', value: '70–90°C (typical)' },
      { label: 'Enclosure', value: 'Not required' },
      { label: 'Recommended Nozzle', value: '0.4–0.6 mm' },
      { label: 'Chemical Resistance', value: 'Good' },
      { label: 'Filament Diameter', value: '1.75 mm' }
    ]
  },
  {
    slug: 'abs-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'ABS',
    type: 'FDM Filament',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762092903/abs6_s2l3dl.jpg',
    description: 'Industry-standard engineering filament known for mechanical strength, heat resistance, and excellent post‑processing options.',
    properties: 'High strength, good heat resistance, acetone‑polishable, durable and machinable',
    applications: 'Enclosures, fixtures, automotive prototypes, consumer product housings, snap‑fit parts',
    features: [
      'Robust mechanical performance for functional parts',
      'Acetone vapor smoothing for near‑injection‑molded finish',
      'Good thermal stability above PLA range',
      'Well‑suited for threaded inserts and tapping',
      'Widely supported material with mature print profiles'
    ],
    specs: [
      { label: 'Material', value: 'ABS (Acrylonitrile Butadiene Styrene)' },
      { label: 'Nozzle Temp', value: '230–260°C (typical)' },
      { label: 'Bed Temp', value: '90–110°C (typical)' },
      { label: 'Enclosure', value: 'Recommended/Required to reduce warping' },
      { label: 'Recommended Nozzle', value: '0.4–0.6 mm' },
      { label: 'Post-Processing', value: 'Acetone vapor smoothing compatible' },
      { label: 'Filament Diameter', value: '1.75 mm' }
    ]
  },
  {
    slug: 'tpu-filament',
    category: 'materials',
    icon: 'Droplets',
    name: 'TPU',
    type: 'Flexible Filament',
    price: 'Request Quote',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762092903/flexible7_kknnjg.jpg',
    description: 'Flexible polyurethane-based filament combining elasticity, abrasion resistance, and impact absorption for durable flexible components.',
    properties: 'Shore hardness options, high abrasion resistance, excellent flexibility and rebound',
    applications: 'Gaskets and seals, vibration dampers, protective boots, phone mounts, wearable components',
    features: [
      'Elastic deformation with rapid recovery',
      'Outstanding abrasion and wear resistance',
      'Energy absorption for impact protection',
      'Good layer adhesion for tear resistance',
      'Printable on direct‑drive systems with tuned settings'
    ],
    specs: [
      { label: 'Material', value: 'TPU (Thermoplastic Polyurethane)' },
      { label: 'Nozzle Temp', value: '210–240°C (typical)' },
      { label: 'Bed Temp', value: '40–60°C (typical)' },
      { label: 'Enclosure', value: 'Not required' },
      { label: 'Recommended Nozzle', value: '0.4–0.6 mm' },
      { label: 'Shore Hardness', value: 'Around 95A (typical flexible grade)' },
      { label: 'Print Speed', value: 'Slow/Moderate for best results' }
    ]
  }
]
