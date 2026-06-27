import fullShowcase from '../../assets/split your trip full image.png';
import heroFocus from '../../assets/ChatGPT Image.png';
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
  'Backend API Developer',
  'React Native Developer',
  'Full Stack Engineer',
];

export const quickFacts = [
  '1+ year MERN experience',
  'React, Node, Express, MongoDB, MySQL',
  'Production admin dashboards',
  'REST APIs, authentication, deployment',
];

export const aboutPoints = [
  'I have 1+ year of MERN experience working with React, Node.js, Express, MongoDB, MySQL, REST APIs, authentication, admin dashboards, and deployment.',
  'I also built Split Your Trip as my personal React Native project for expense splitting, trip management, settlements, and invitations.',
  'My work includes live company applications, backend API development, React admin dashboards, bug fixing, deployment, and server migration.',
];

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'Tailwind', 'HTML', 'CSS'], icon: 'frontend' },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'JWT'], icon: 'backend' },
  { title: 'Database', items: ['MongoDB', 'MySQL', 'Schema Design', 'Data Modeling', 'Aggregation'], icon: 'database' },
  { title: 'Dev Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Socket.io'], icon: 'tools' },
  { title: 'Deployment', items: ['Render', 'cPanel', 'Vercel', 'Netlify'], icon: 'tools' },
  { title: 'Cloud', items: ['Cloudinary', 'Firebase', 'Media Uploads', 'Notifications'], icon: 'tools' },
];

export const professionalExperience = [
  {
    title: 'MERN Stack Developer',
    period: 'Current role',
    description:
      'Worked on live production applications including Food Delivery Admin Dashboard, Restaurant Management, Vendor Management, Delivery Partner Management, Customer Management, Analytics Dashboard, Broadcast Notifications, Dynamic Pricing, Order Management, Reservation APIs, Authentication, Role Based Access, Payment-related APIs, bug fixing, performance improvements, backend API development, React admin dashboards, deployment, server migration, cPanel deployment, Render deployment, MongoDB, MySQL, Express.js, Node.js, and React.',
    bullets: [
      'Built and maintained backend APIs and React dashboards.',
      'Implemented authentication, role based access, and payment-related flows.',
      'Handled deployment, server migration, and cPanel / Render releases.',
      'Worked across MongoDB and MySQL data models for live features.',
    ],
  },
  {
    title: 'Split Your Trip',
    period: 'Personal product',
    description:
      'Designed and developed a complete expense splitting application in React Native. Built backend architecture, REST APIs, MongoDB schema, authentication, settlement logic, notifications, activity logs, connections, and invite flows.',
    bullets: [
      'Created the mobile experience and the product flows.',
      'Built the backend APIs and database structure.',
      'Implemented expense tracking and settlement logic.',
      'Added authentication and invite-based trip management.',
    ],
  },
  {
    title: 'Currently Learning',
    period: 'Ongoing',
    description: 'Socket.io, performance optimization, and scalable backend architecture.',
    bullets: ['Socket.io', 'Performance optimization', 'Scalable backend architecture'],
  },
];

export const featuredProject = {
  name: 'Split Your Trip',
  tagline: 'Personal React Native project for group travel expense splitting.',
  problem: 'Group travel becomes messy when expense tracking, settlements, and invitations are spread across different tools.',
  solution: 'Split Your Trip brings trip creation, expense tracking, settlement logic, notifications, and invite flows into one app.',
  architecture: 'React Native frontend, Node.js backend APIs, MongoDB schema design, authentication, and real-time-ready workflows.',
  responsibilities: [
    'Designed the user experience and core mobile screens.',
    'Built backend APIs and MongoDB data models.',
    'Implemented authentication, expense tracking, and settlement logic.',
    'Added notifications, activity logs, connections, and invite flows.',
  ],
  challenges: [
    'Keeping the settlement flow accurate and easy to understand.',
    'Making the mobile UI fast without hiding important trip data.',
    'Presenting multiple screens in a way that still feels clean.',
  ],
  future: [
    'Add more analytics for trip spending patterns.',
    'Expand activity history and notification detail.',
    'Improve offline-friendly sync behavior.',
  ],
  tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'REST APIs'],
  screenshots: [screen1, screen2, screen3, screen4],
  banner: fullShowcase,
};

export const otherProjects = [
  {
    name: 'Ride Booking App',
    problem: 'Users needed a simple way to create bike trips and let people join them.',
    solution: 'Built a ride booking experience where admins can create trips and users can join available rides.',
    techStack: 'React, Node.js, MongoDB',
    contribution: 'Implemented trip creation flows, joining logic, and dashboard screens.',
    screenshots: [],
  },
  {
    name: 'Reservation App',
    problem: 'Table, club, and event reservations need a clear booking flow with backend validation.',
    solution: 'Built reservation APIs and booking screens for scheduling and managing reservations.',
    techStack: 'React, Node.js, MySQL',
    contribution: 'Created booking APIs, form validation, and reservation management flows.',
    screenshots: [],
  },
  {
    name: 'Food Delivery App',
    problem: 'A food delivery system needs separate flows for vendor, customer, and driver operations.',
    solution: 'Built the admin and operational side of a delivery platform with role-based workflows.',
    techStack: 'React, Node.js, MongoDB, MySQL',
    contribution: 'Worked on vendor, customer, and driver management, order flows, and backend APIs.',
    screenshots: [],
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
  'Scalable REST APIs',
  'MongoDB schema design',
  'JWT authentication',
  'Role based access control',
  'CRUD operations',
  'File upload systems',
  'Socket.io',
  'Responsive UI',
  'Performance optimization',
  'API integration',
  'Deployment',
  'Git workflow',
];

export const education = {
  degree: 'Bachelor of Technology (Computer Science)',
  university: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
  city: 'Indore',
  years: '2019-2023',
  cgpa: '7.5',
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/deepaksahu100', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/deepak-sahu-aa6a941ba', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:deepaksahu@example.com', icon: 'mail' },
  { label: 'Resume', href: '/resume.pdf', icon: 'resume' },
];

export const heroFocusImage = heroFocus;
