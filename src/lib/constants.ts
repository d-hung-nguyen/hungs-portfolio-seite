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
    title: 'Certificate Fullstack Software Development',
    institution: 'Neuefische',
    link: '(Intensive course) in JavaScript, React, Astro, MongoDB, and SQL.',
    date: 'Jan - Apr 2024',
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
    link: 'in English, Han-nom and Far East Culture.',
    date: '2001 - 2005',
  },
]

export const EXPERIENCE = [
  {
    company: 'Kerzner International - Regional Office',
    location: 'Frankfurt am Main, Germany',
    position: 'Sales and Marketing',
    start: 'Sep 2006',
    end: 'Nov 2023',
    tasks: [
      'Responsible for developing and implementing marketing strategies to increase brand awareness and revenue in the DACH region.',
    ],
  },
  {
    company: 'One&Only The Palm, Dubai',
    location: 'Dubai, UAE',
    position: 'Reservation and Revenue Manager',
    start: 'Sep 2010',
    end: 'Feb 2015',
    tasks: [
      'Leading the reservation team and strategically planning revenue optimization for a successful hotel opening.',
    ],
  },
  {
    company: 'One&Only Royal Mirage, Dubai',
    location: 'Dubai, UAE',
    position: 'Reservation and Revenue Coordinator',
    start: 'Jun 2006',
    end: 'Aug 2009',
    tasks: [
      'Coordinating and monitoring daily reservation operations and revenue reports.',
    ],
  },
  {
    company: 'Velaa Private Island, Maldives',
    location: 'Maldives',
    position: 'Project Consultant, Reservations and Revenue Management',
    start: 'Mar 2015',
    end: 'Jul 2015',
    tasks: ['Consulting to optimize booking systems and revenue strategies.'],
  },
  {
    company: 'RCI, Schliersee',
    location: 'Schliersee, Germany',
    position: 'Reservation and Front Office Manager',
    start: 'Mar 2014',
    end: 'Mar 2015',
    tasks: [
      'Managing the front office and reservations, increasing customer satisfaction and loyalty.',
    ],
  },
  {
    company: 'InterContinental Asiana Saigon',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Assistant Reservation Manager',
    start: 'Aug 2009',
    end: 'Sep 2010',
    tasks: [
      'Supporting the establishment of efficient reservation processes for the market launch.',
    ],
  },
  {
    company: 'Sofitel Legend Metropole, Hanoi',
    location: 'Hanoi, Vietnam',
    position: 'Reservation Agent',
    start: 'May 2005',
    end: 'Jun 2006',
    tasks: [
      'Handling reservations and customer inquiries, ensuring high quality of service.',
    ],
  },
]
