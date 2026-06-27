import fullShowcase from '../../assets/split your trip full image.png';
import screen1 from '../../assets/screenshot1.jpeg';
import screen2 from '../../assets/screenshot2.jpeg';
import screen3 from '../../assets/screenshot3.jpeg';
import screen4 from '../../assets/screenshot4.jpeg';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroHighlights = [
  'MERN Stack Developer',
  'Node.js Backend Developer',
  'React Native Developer',
  'REST API Specialist',
];

export const stats = [
  { value: '10+', label: 'Production-ready apps shipped' },
  { value: '4+', label: 'Core stacks across web and mobile' },
  { value: '1', label: 'Flagship personal project: Split Your Trip' },
  { value: 'Live', label: 'Company work with Socket.io and data layers' },
];

export const aboutPoints = [
  'I build product-focused applications from idea to deployment, combining clean interfaces with reliable backend architecture.',
  'My daily stack includes React, Node.js, Express, MongoDB, MySQL, REST APIs, authentication, and Socket.io for real-time features.',
  'I have also delivered live company projects and client-facing work, which sharpened my approach to scalability, maintainability, and release quality.',
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'Tailwind', 'HTML', 'CSS'],
    icon: 'frontend',
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'JWT'],
    icon: 'backend',
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL', 'Schema Design', 'Aggregation', 'Data Modeling'],
    icon: 'database',
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Cloudinary', 'Firebase'],
    icon: 'tools',
  },
];

export const experience = [
  {
    title: 'Flutter Internship',
    period: 'Early hands-on exposure',
    description:
      'Learned mobile app workflows, shipped UI features, and developed an appreciation for fast, iterative product delivery.',
  },
  {
    title: 'Java Full Stack Training',
    period: 'Structured training phase',
    description:
      'Built a strong backend foundation around API design, database thinking, and application structure.',
  },
  {
    title: 'MERN Stack Developer',
    period: 'Professional delivery',
    description:
      'Built and maintained real-world web apps, company projects, and REST APIs with authentication, role-based access, and deployment.',
  },
  {
    title: 'Current Projects',
    period: 'Now',
    description:
      'Continuing to ship modern applications across MERN, MongoDB, MySQL, and Socket.io-driven experiences for live use cases.',
  },
];

export const featuredProject = {
  name: 'Split Your Trip',
  tagline: 'Personal flagship project focused on group travel expense management.',
  problem:
    'Group travel planning usually breaks down when expenses, settlements, and invitations are handled across multiple tools.',
  solution:
    'Split Your Trip centralizes trip creation, invite workflows, expense tracking, settlements, and live updates in one mobile-first product.',
  architecture:
    'The product is structured around modular mobile UI, a Node.js API layer, MongoDB persistence, and real-time event flows for trip coordination.',
  responsibilities: [
    'Designed the user experience and core mobile flows.',
    'Built backend APIs, authentication logic, and data models.',
    'Implemented expense and settlement workflows for trip groups.',
    'Polished responsive states and production-ready interactions.',
  ],
  challenges: [
    'Keeping settlement logic accurate while preserving a lightweight UI.',
    'Designing a flow that feels fast on mobile without losing clarity.',
    'Presenting dense trip data in a way that still feels premium.',
  ],
  future: [
    'Add advanced analytics for spending patterns.',
    'Expand notifications and activity feeds.',
    'Refine offline-friendly behavior and sync resilience.',
  ],
  tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'REST APIs'],
  screenshots: [screen1, screen2, screen3, screen4],
  banner: fullShowcase,
};

export const otherProjects = [
  {
    name: 'Admin Dashboard',
    overview: 'A structured admin experience for managing users, content, and application metrics.',
    techStack: 'React, Node.js, MongoDB',
    responsibilities: 'Built reusable panels, analytics views, and secure admin workflows.',
  },
  {
    name: 'REST API Development',
    overview: 'Production-style API work for CRUD, auth, role access, and integration readiness.',
    techStack: 'Node.js, Express.js, MongoDB, MySQL',
    responsibilities: 'Designed endpoints, validation layers, and clean response contracts.',
  },
  {
    name: 'Food Delivery Admin Panel',
    overview: 'Operations panel for menus, orders, and business-side management.',
    techStack: 'React, REST APIs, MySQL',
    responsibilities: 'Created responsive data tables, filters, and workflow screens.',
  },
  {
    name: 'Reservation API',
    overview: 'Reservation logic and backend infrastructure for booking-style use cases.',
    techStack: 'Node.js, Express.js, MongoDB',
    responsibilities: 'Handled availability checks, validation, and API hardening.',
  },
];

export const buildItems = [
  'Responsive websites',
  'REST APIs',
  'React dashboards',
  'Admin panels',
  'Authentication systems',
  'MongoDB applications',
  'React Native apps',
  'Deployment',
];

export const highlights = [
  'Designed scalable REST APIs',
  'MongoDB schema design',
  'JWT authentication',
  'Role based access control',
  'CRUD operations',
  'File upload systems',
  'Socket.io real-time features',
  'Responsive UI',
  'Performance optimization',
  'API integration',
  'Deployment',
  'Git workflow',
];

export const education = [
  {
    title: 'Degree Program',
    detail: 'Professional engineering foundation focused on software and application development.',
  },
  {
    title: 'University',
    detail: 'Academic background supporting problem-solving, systems thinking, and software fundamentals.',
  },
  {
    title: 'Relevant Coursework',
    detail: 'Full-stack web development, databases, API design, responsive UI, and application deployment.',
  },
  {
    title: 'Java Full Stack Training',
    detail: 'Hands-on training across backend concepts, project structure, and delivery practices.',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:deepaksahu@example.com', icon: 'mail' },
  { label: 'Resume', href: '/resume.pdf', icon: 'resume' },
];

