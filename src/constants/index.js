import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  drillbit,
  docker,
  meta,
  starbucks,
  shopify,
  etherstream,
  cashstream,
  blockstay,
  dartmart,
  passage,
  makerspace,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "CAD Designer",
    icon: backend,
  },
  {
    title: "Fusion Musician",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Passage Protocol",
    icon: passage,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Develop projects such as Passage and Drillbit using React, ExpressJS, TailwindJS and GraphQL",
    ],
  },
  {
    title: "React Developer",
    company_name: "CashStream",
    icon: null,
    iconBg: "#E6DEDD",
    date: "August 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Tech Assistant",
    company_name: "Cable Makerspace",
    icon: makerspace,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Aided in 3D Printing designs and laser-cut for Dartmouth students, staffs and multiple PHD Researches",
      "Projects: Makerspace’s NFC Log-In System, PrusaSlicer Tutorial, Designed Makerspace’s Logo"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful, but Harold proved me wrong.",
    name: "Johnathan Nicastro",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Harold does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Harold optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BlockStay",
    description:
    "Blockchain-Based Hotel Access and Stream-Pay Rental Service Using Metamask Wallet and IoT-enabled Smart Lock",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blockstay,
    source_code_link: "https://github.com/thanvinhbaohoang/BlockStay",
  },
  {
    name: "CashStream",
    description:
    "Superfluid Protocol Dashboard for money streaming on Ethereum Network",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cashstream,
    source_code_link: "https://github.com/thanvinhbaohoang/CashStream",
  },
  {
    name: "EtherStream",
    description:
      "Proof Of Concept: Superfluid-powered subscription service that integrate CashStream's uses money stream for user authentication .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: etherstream,
    source_code_link: "https://github.com/thanvinhbaohoang/EtherStream",
  },
  {
    name: "DartMart",
    description:
      "A React Native Food Delivery App for Dartmouth Students.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: dartmart,
    source_code_link: "https://github.com/thanvinhbaohoang/project-dartmart",
  },
  {
  name: "drillBit",
  description:
  "Generate monthly automated reports with on-chain and off-chain data, receive retention and ROI insights with real-time updates, and run your first retention analysis report.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "TypeScript",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: drillbit,
  source_code_link: "https://github.com/thanvinhbaohoang/db-fe",
},

];

export { services, technologies, experiences, testimonials, projects };
