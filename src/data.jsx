//  icons
import {
  RiGithubFill,
  RiDribbbleLine,
  RiSettingsFill,
  RiPenNibFill,
  RiTaskFill,
  RiMailFill,
  RiMapPinFill,
  RiFacebookBoxLine,
  RiLinkedinFill,
} from 'react-icons/ri';

import { MdSecurity, MdMobileFriendly, MdAutoAwesomeMotion } from "react-icons/md";
import { IoLogoPwa } from "react-icons/io5";
import { SiChatbot, SiServerless } from "react-icons/si";
import { BsPalette2 } from "react-icons/bs";
import { BiUserVoice } from "react-icons/bi";
import { DiResponsive } from "react-icons/di";
import { CgDarkMode } from "react-icons/cg";

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/tailwind.png';
import SkillImg6 from './assets/img/skills/nextjs.png';
import SkillImg7 from './assets/img/skills/nodejs.png';
import SkillImg8 from './assets/img/skills/git.png';
import SkillImg9 from './assets/img/skills/github.png';
import SkillImg10 from './assets/img/skills/php.png';
import SkillImg11 from './assets/img/skills/mysqli.png';
import SkillImg12 from './assets/img/skills/figma.png';
import SkillImg13 from './assets/img/skills/linux.png';
import SkillImg14 from './assets/img/skills/docker.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
import React from 'react';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const socialIcon = [
  {
    icon: <RiFacebookBoxLine />,
    href: 'https://www.facebook.com/badfoxxxxx/',
  },
  {
    icon: <RiLinkedinFill />,
    href: 'https://www.linkedin.com/in/rashid-bik-b830b8202/',
  },
  {
    icon: <RiGithubFill />,
    href: 'https://github.com/RashidBik',
  },
  {
    icon: <RiDribbbleLine />,
    href: 'https://dribbble.com/rashidbik',
  },
];
// https://t.me/RRRRRRRRRASHID

export const brands = [
  {
    img: FreelancerBrandIcon,
    href: 'https://www.freelancer.com/',
  },
  {
    img: UpworkBrandIcon,
    href: 'https://www.upwork.com/',
  },
  {
    img: FiverBrandIcon,
    href: 'https://www.fiverr.com/',
  },
  {
    img: BehanceBrandIcon,
    href: 'https://www.behance.net/',
  },
  {
    img: DribbbleBrandIcon,
    href: 'https://dribbble.com/',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Rythem',
    category: 'UI/UX design',
    href: '',
    discription: 'Music player',
  },
  {
    id: '2',
    image: Project2,
    name: 'JS_Method',
    category: 'web development',
    href: 'https://javascript-tutorial-rho.vercel.app/',
    discription: 'Lets learn JS methods easily',
  },
  {
    id: '3',
    image: Project3,
    name: 'Divan',
    category: 'UI/UX design',
    href: 'http://divan-client.vercel.app/',
    discription: 'Social Media',
  },
  {
    id: '4',
    image: Project4,
    name: 'Marketing',
    category: 'branding',
    href: '',
    discription: '',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
    href: '',
    discription: '',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
    href: '',
    discription: '',
  },
];

// projects
export const projectNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },
  {
    image: SkillImg14,
  },
];



// services
export const servicesData = [
  {
    icon: <MdSecurity />,
    name: 'Improved Native Cybersecurity',
    description:
      'Transform app designs into front-end code with HTML, CSS, JavaScript/ react',
  },
  {
    icon: <RiSettingsFill />,
    name: 'Web Development',
    description:
      'Work with back-end developers to integrate UI components with APIs and databases.',
  },
  {
    icon: <RiPenNibFill />,
    name: 'Branding',
    description:
      'Stay plugged into emerging technologies and industry trends.',
  },
  {
    icon: <RiTaskFill />,
    name: 'SEO',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <IoLogoPwa />,
    name: 'Progressive Web Apps (PWAs)',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <SiChatbot />,
    name: 'AI Chatbots',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <MdMobileFriendly />,
    name: 'Accelerated Mobile Pages',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <BsPalette2 />,
    name: 'Single-Page Application',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <BiUserVoice />,
    name: 'Optimized Voice Search',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <MdAutoAwesomeMotion />,
    name: 'Motion UI',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <SiServerless />,
    name: 'Serverless Architecture',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <DiResponsive />,
    name: 'Responsive Site Design',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
  {
    icon: <CgDarkMode />,
    name: 'Dark Mode Standardization',
    description:
      'Write high-quality, scalable, and reusable code, On-site search engine optimization (SEO).',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Lorem ipsum Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Lorem ipsum Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Lorem ipsum Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <RiMailFill />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at rashidbik777@gmil.com',
  },
  {
    icon: <RiMapPinFill />,
    title: 'Current Location',
    subtitle: 'Kabul, Afghanistan',
    description: 'Serving clients worldwide',
  },
];
