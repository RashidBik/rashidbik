// import { useEffect, useState } from 'react';

// import { createClient } from "@supabase/supabase-js";

// const API_URL="https://vwnvvsmjitnwqeexzhfz.supabase.co"
// const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bnZ2c21qaXRud3FlZXh6aGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4ODk0MjQsImV4cCI6MTk5NDQ2NTQyNH0.cmCuiMpQghc_NzrxQp8T-Z3OJ0RSnUChsPFyIjrcvgs"
// const supabse = createClient(API_URL, API_KEY);

// export default function data(url)
// {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     async function fetchData(params)
//     {
//       setLoading(true);
//       const { data, error } = await supabse.from('rashidbik').select();

//       if (error) {
//         setError(error)
//         setData(null)
//         setLoading(false)
//       } else
//       {
//           setError(null)
//         setData(data)
//         setLoading(false)
//       }
//     }
//   }, [input]);
// return {data, error, loading}

// }

















//  icons
import {
  RiGithubFill,
  RiDribbbleLine,
  RiMailFill,
  RiMapPinFill,
  RiFacebookBoxLine,
  RiLinkedinFill,
} from 'react-icons/ri';

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

// testimonials
export const testimonials = [
  {
    authorImg: 'TestiImage1',
    authorText:
      '',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: 'TestiImage2',
    authorText:
      '',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: 'TestiImage3',
    authorText:
      '',
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
    description: 'Email me at abdurashid.bigzad1999@gmail.com',
  },
  {
    icon: <RiMapPinFill />,
    title: 'Current Location',
    subtitle: 'Kabul, Afghanistan',
    description: 'Serving clients worldwide',
  },
];


