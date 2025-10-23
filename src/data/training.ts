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
