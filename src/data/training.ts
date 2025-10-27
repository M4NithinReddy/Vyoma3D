export type TrainingCourse = {
  slug: string;
  title: string;
  duration: string;
  level: string;
  topics: string[];
  priceInr: number;
  syllabus: Array<{ section: string; items: string[] }>;
};

export const trainingCourses: TrainingCourse[] = [
  {
    slug: 'solidworks-mastery',
    title: 'CAD Design Mastery',
    duration: '40 hours',
    level: 'Beginner to Advanced',
    topics: ['Part modeling', 'Assemblies', 'Drawings', 'Surface design'],
    priceInr: 34999,
    syllabus: [
      { section: 'Foundations', items: ['UI and sketching', 'Constraints and dimensions', 'Best practices'] },
      { section: 'Parts', items: ['Features and patterns', 'Configurations', 'Design table intro'] },
      { section: 'Assemblies', items: ['Mates and motion', 'Top-down design', 'Interference checks'] },
      { section: 'Drawings', items: ['Views and annotations', 'GD&T basics', 'BOM and templates'] },
      { section: 'Surface Design', items: ['Curves and lofts', 'Surface knit', 'Repair workflows'] },
    ],
  },
  {
    slug: 'ai-robotics-bonicbot',
    title: 'AI & Robotics with BonicBot',
    duration: '12 live sessions + mentoring',
    level: 'Beginner to Advanced',
    topics: [
      '12 expert-led live AI & robotics sessions',
      '1:1 personalized mentoring with robotics engineers',
      'Bonic.ai platform access for coding and simulation',
      'Scratch and Python programming for robotics',
      'Object/facial recognition, gesture control, navigation',
      'Curriculum integration add-on for institutes',
      'Industry-relevant outcomes: AI, IoT, ROS fundamentals',
      '300 AI Credits worth ₹5000 included'
    ],
    priceInr: 0,
    syllabus: [
      { section: 'Orientation & Setup', items: ['Program overview', 'Platform access (Bonic.ai)', 'S1/A1 hardware familiarization'] },
      { section: 'Programming Fundamentals', items: ['Scratch basics', 'Python basics', 'Controlling actuators and sensors'] },
      { section: 'AI Capabilities', items: ['Conversational AI', 'Vision: object & facial recognition', 'Gesture control workflows'] },
      { section: 'Navigation & Autonomy', items: ['Manual vs autonomous modes', 'Face tracking & sequence recording', 'Intro to SLAM & LiDAR (A1)'] },
      { section: 'ROS & Perception (Advanced)', items: ['ROS basics', 'Depth camera pipelines', 'Integrating AI models with ROS'] },
      { section: 'IoT & Cloud', items: ['Cloud access & status monitoring', 'AI Credits usage & top-up', 'Remote operations and safety'] },
      { section: 'Projects & Assessment', items: ['Mini-projects: recognition, gesture, navigation', 'Custom projects aligned to learner goals', 'Review and certification'] },
      { section: 'Support & Warranty', items: ['6-month manufacturing defect warranty', 'Software updates & AI enhancements', 'Best practices and next steps'] }
    ]
  },
  {
    slug: 'ansys-fea',
    title: 'Finite Element Analysis (FEA)',
    duration: '32 hours',
    level: 'Intermediate',
    topics: ['Structural analysis', 'Modal analysis', 'Thermal', 'Optimization'],
    priceInr: 39999,
    syllabus: [
      { section: 'Pre-processing', items: ['Geometry cleanup', 'Meshing strategy', 'Material models'] },
      { section: 'Analysis Types', items: ['Static structural', 'Modal', 'Thermal steady-state'] },
      { section: 'Contacts & BCs', items: ['Contact types', 'Loads and supports', 'Submodeling'] },
      { section: 'Post-processing', items: ['Stress/strain review', 'Convergence checks', 'Report generation'] },
      { section: 'Optimization', items: ['Design points', 'Response surfaces', 'DOE overview'] },
    ],
  },
  {
    slug: 'dfam-3d-printing',
    title: '3D Printing & DfAM',
    duration: '24 hours',
    level: 'All levels',
    topics: ['AM processes', 'Design principles', 'Topology optimization', 'Post-processing'],
    priceInr: 28999,
    syllabus: [
      { section: 'AM Overview', items: ['SLA, FDM, DLP', 'Materials overview', 'Tolerances & accuracy'] },
      { section: 'DfAM', items: ['Minimum features', 'Overhangs & support', 'Lattice structures'] },
      { section: 'Topology', items: ['Load cases', 'Objective/constraints', 'Validation workflow'] },
      { section: 'Production', items: ['Orientation & nesting', 'QA and inspection', 'Finishing techniques'] },
    ],
  },
  {
    slug: 'hypermesh-advanced',
    title: 'Advanced Pre-processing & Meshing',
    duration: '36 hours',
    level: 'Advanced',
    topics: ['Pre-processing', 'Meshing', 'CAE setup', 'Crash analysis'],
    priceInr: 42999,
    syllabus: [
      { section: 'Pre-processing', items: ['Geometry cleanup', 'Mid-surfacing', 'DTL workflows'] },
      { section: 'Meshing', items: ['2D/3D meshing', 'Quality criteria', 'Automation tools'] },
      { section: 'Assemblies', items: ['Connections', 'Contacts', 'Property cards'] },
      { section: 'Crash', items: ['Solver setup', 'Boundary conditions', 'Result interpretation'] },
    ],
  },
];
