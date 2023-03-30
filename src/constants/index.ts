import {
  blackwind,
  crow,
  css,
  dntc,
  figma,
  git,
  greenAgri,
  html,
  javascript,
  mcom,
  mobile,
  mongodb,
  nextjs,
  nodejs,
  portfolio,
  reactjs,
  reactQuery,
  redux,
  shopee,
  tailwind,
  typescript,
  ueh,
  vite,
  web
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'experience',
    title: 'Work Experience'
  },
  {
    id: 'education',
    title: 'Education'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const education = [
  {
    title: 'Bachelor of Information Technology',
    school_name: 'Technical College, Dong Nai',
    icon: dntc,
    iconBg: '#E6DEDD',
    date: 'Sep 2017 - Nov 2020',
    diploma: 'Excellent',
    point: '3.65/4'
  },
  {
    title: 'Bachelor of Business Administration',
    school_name: 'University of Economic, HCM city',
    icon: ueh,
    iconBg: '#E6DEDD',
    date: 'Sep 2012 - Aug 2018',
    diploma: 'Good',
    point: '8.1/10'
  }
]

const services = [
  {
    title: 'ReactJS',
    icon: web
  },
  {
    title: 'NextJS',
    icon: mobile
  }
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Next JS',
    icon: nextjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs
  // },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'vite',
    icon: vite
  },
  {
    name: 'reactQuery',
    icon: reactQuery
  }
]

const experiences = [
  {
    title: 'Junior Front-end Web Developer',
    company_name: 'Green Agri',
    icon: greenAgri,
    iconBg: '#b9e0cc',
    date: 'May 2022 - Present',
    points: [
      'Developed and maintained code for in-house and client websites primarily using React, NextJS, Typescript and TailwindCSS based on Figma design.',
      'Build reusable components and front-end libraries for future use.',
      'Optimize components for maximum performance across a vast array of devices.',
      'Perform code reviews and bug fixes.'
    ]
  },
  {
    title: 'Junior Front-end Web Developer',
    company_name: 'MCOM',
    icon: mcom,
    iconBg: '#E6DEDD',
    date: 'Nov 2021 - May 2022',
    points: [
      'Maintain and develop web applications using React.js, Nextjs, Typescript and TailwindCSS.',
      'Optimising components for maximum performance across a vast array of browsers.',
      'Collaborating with back-end developers and web designers to improve usability, performance.',
      'Troubleshooting/fixing problems.'
    ]
  },
  {
    title: 'Fresher Full-stack Web Developer',
    company_name: 'Blackwind Software',
    icon: blackwind,
    iconBg: '#383E56',
    date: 'April 2021 - Nov 2022',
    points: [
      'Develop, test and maintain responsive web/mobile apps with elegant UX that delight our users and raise their productivity.',
      'Joining to support the end-user and solving the emergencies problems',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Research, design, develop, and test the platform including API and dashboard.'
    ]
  }
]

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Portfolio',
    description:
      'The purpose of this project is to build an online WebGL portfolio with the purpose of introducing myself and showcasing the skills and experience that I have gained. This portfolio utilizes modern technologies such as ReactJS, ThreeJS, TailwindCSS, and VietJS.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'threejs',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'vitejs',
        color: 'green-text-gradient'
      }
    ],
    image: portfolio,
    source_code_link: 'https://github.com/hoapha1009/3d_portfolio',
    live_demo_link: 'https://3d-portfolio-neon.vercel.app/'
  },
  {
    name: 'Shopee Clone',
    description:
      'The purpose of this project is to create a clone of the popular e-commerce platform Shopee using modern web development technologies. The website will have similar functionalities to the original Shopee, such as product listings, shopping cart, payment processing, and order tracking. Additionally, the project will incorporate modern UI/UX design principles and responsive layouts for an optimal user experience across various devices.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'react-query',
        color: 'green-text-gradient'
      },
      {
        name: 'typescript',
        color: 'green-text-gradient'
      },
      {
        name: 'vitejs',
        color: 'green-text-gradient'
      },
      {
        name: 'react.i18next',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: shopee,
    source_code_link: 'https://github.com/hoapha1009/shopee-clone',
    live_demo_link: 'https://shopee-clone-eosin.vercel.app/'
  },
  {
    name: 'Crow Clothing Shop',
    description:
      'My personal project is an online clothing store aimed at providing customers with a seamless shopping experience. Using modern front-end technologies like ReactJS and Redux, I have designed and developed a visually appealing and user-friendly website that is optimized for both desktop and mobile devices.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'Redux',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: crow,
    source_code_link: 'https://github.com/hoapha1009/crown-clothing',
    live_demo_link: 'https://crown-clothing-puce.vercel.app/'
  }
]

export { services, technologies, experiences, testimonials, projects, education }
