import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/d-hung-nguyen',
  linkedin: 'https://www.linkedin.com/in/nd-hung/',
  mail: 'mailto:nd.hung@me.com',
  medium: '/',
  discord: '/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Certificate in Fullstack Software Development',
    institution: 'Neuefische',
    link: '(Intensive course) in JavaScript, React, Astro, MongoDB, and SQL.',
    date: 'Jan 2014 - Apr 2024',
  },
  {
    title: "Bachelor's Degree",
    institution: 'Foreign Trade University',
    link: 'Business Administration - BBA, Business Administration and Management, General',
    date: '2001 - 2005',
  },
  {
    title: "Bachelor's Degree",
    institution: 'Phuong Dong University',
    link: 'in English, Han-nom, and Far Eastern Culture.',
    date: '2001 - 2005',
  },
]

export const EXPERIENCE = [
  {
    company: 'Kerzner International - Regional Sales Office',
    location: 'Frankfurt am Main, Germany',
    position: 'Sales & Marketing DACH & CEE',
    start: 'Sep 2015',
    end: 'Nov 2023',
    tasks: [
      'Developed and implemented marketing strategies to increase brand awareness and revenue in the DACH and CEE regions.',
      'Conducted market research to identify new opportunities and trends.',
      'Managed relationships with key stakeholders and partners.',
      'Coordinated promotional activities and events.',
      'Analyzed marketing campaign performance and adjusted strategies accordingly.',
    ],
  },
  {
    company: 'Velaa Private Island, Maldives',
    location: 'Maldives',
    position: 'Project Consultant, Reservations and Revenue Management',
    start: 'Mar 2015',
    end: 'Jul 2015',
    tasks: [
      'Coordinated and supervised daily reservation operations and revenue reports.',
      'Developed and implemented revenue management strategies.',
      'Trained staff on reservation procedures and revenue management techniques.',
      'Monitored booking trends and adjusted pricing strategies to maximize revenue.',
      'Ensured high levels of customer satisfaction through efficient reservation processes.',
    ],
  },
  {
    company: 'RCI, Schliersee',
    location: 'Schliersee, Germany',
    position: 'Reservations and Front Office Manager',
    start: 'Mar 2014',
    end: 'Mar 2015',
    tasks: [
      'Advised on optimizing booking systems and revenue strategies.',
      'Managed front office operations, ensuring smooth check-in and check-out processes.',
      'Handled guest inquiries and resolved complaints.',
      'Trained and supervised front office staff.',
      'Implemented new reservation systems to improve efficiency.',
    ],
  },
  {
    company: 'One&Only The Palm, Dubai',
    location: 'Dubai, UAE',
    position: 'Reservations and Revenue Manager',
    start: 'Sep 2010',
    end: 'Feb 2015',
    tasks: [
      'Led the reservations team and strategic planning for revenue optimization for a successful hotel opening.',
      'Developed and implemented revenue management strategies.',
      'Monitored booking trends and adjusted pricing strategies.',
      'Trained and supervised reservation staff.',
      'Ensured high levels of customer satisfaction through efficient reservation processes.',
    ],
  },
  {
    company: 'InterContinental Asiana Saigon',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Assistant Reservations Manager',
    start: 'Aug 2009',
    end: 'Sep 2010',
    tasks: [
      'Managed front office and reservations, enhancing customer satisfaction and loyalty.',
      'Assisted in the development and implementation of revenue management strategies.',
      'Trained and supervised reservation staff.',
      'Handled guest inquiries and resolved complaints.',
      'Monitored booking trends and adjusted pricing strategies.',
    ],
  },
  {
    company: 'One&Only Royal Mirage, Dubai',
    location: 'Dubai, UAE',
    position: 'Reservations and Revenue Coordinator',
    start: 'Jun 2006',
    end: 'Aug 2009',
    tasks: [
      'Coordinated reservations and revenue management.',
      'Developed and implemented revenue management strategies.',
      'Monitored booking trends and adjusted pricing strategies.',
      'Trained and supervised reservation staff.',
      'Ensured high levels of customer satisfaction through efficient reservation processes.',
    ],
  },
  {
    company: 'Sofitel Legend Metropole Hanoi',
    location: 'Hanoi, Vietnam',
    position: 'Reservations Agent',
    start: 'May 2005',
    end: 'Jun 2006',
    tasks: [
      'Supported the establishment of efficient reservation processes for market introduction.',
      'Handled reservations and customer inquiries.',
      'Ensured high service quality.',
      'Assisted in the development and implementation of revenue management strategies.',
      'Trained and supervised reservation staff.',
    ],
  },
]

export const SKILLS = [
  {
    category: 'Communication',
    details:
      'Strong interpersonal and communication skills, fluent in German and English.',
  },
  {
    category: 'Hotel Management',
    details:
      'Expertise in hotel operations and management, especially in the pre-opening phase of luxury hotels.',
  },
  {
    category: 'Revenue Management',
    details:
      'In-depth knowledge of revenue analysis, budgeting, and forecasting.',
  },
  {
    category: 'Technology',
    details:
      'Knowledge in fullstack development, including modern web technologies and database management.',
  },
]
