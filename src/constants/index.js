import {
  mobile,
  backend,
  web,
  javascript,
  php,
  html,
  css,
  reactjs,
  laravel,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  git,
  idekite,
  carrent,
  jobit,
  tripguide,
  threejs,
  jempolTech,
  sql,
  DicodingDasarGitdenganGitHub,
  dicoding,
  DicodingDasarManajemenProyek,
  DicodingDasarVisualisasiData,
  DicodingProgrammingLogic101,
  SkilvulJavaScriptDasar,
  skilvul,
  SkilvulJavaScriptIntermediate,
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
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Quality Assurance",
    icon: backend,
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Creative Marketing (Intern)",
    company_name: "IdeKite",
    icon: idekite,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Developing and enhancing creative marketing campaigns using innovative strategies and techniques to engage target audiences effectively.",
      "Leveraging various social media platforms to execute marketing promotions and campaigns, engaging with the target audience, and ensuring effective online brand presence.",
      "Interacting with potential clients, analyzing their challenges, and providing tailored creative marketing solutions using our company's products and services.",
    ],
  },
  {
    title: "Full stack Developer & QA",
    company_name: "Jempol Tech",
    icon: jempolTech,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creating a user-friendly database schema design and implementing best practices database.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const certificates = [
  {
    name: "Javascript Intermediate",
    image: SkilvulJavaScriptIntermediate,
    company: "Skilvul",
    companyImage: skilvul,
    color: "pink-text-gradient",
  },
  {
    name: "Javascript Dasar",
    image: SkilvulJavaScriptDasar,
    company: "Skilvul",
    companyImage: skilvul,
    color: "pink-text-gradient",
  },
  {
    name: "Dasar Manajemen Proyek",
    image: DicodingDasarManajemenProyek,
    company: "Dicoding",
    companyImage: dicoding,
    color: "blue-text-gradient",
  },
  {
    name: "Dasar Visualisasi Data",
    image: DicodingDasarVisualisasiData,
    company: "Dicoding",
    companyImage: dicoding,
    color: "blue-text-gradient",
  },
  {
    name: "Programming Logic 101",
    image: DicodingProgrammingLogic101,
    company: "Dicoding",
    companyImage: dicoding,
    color: "blue-text-gradient",
  },
  {
    name: "Dasar Git dengan GitHub",
    image: DicodingDasarGitdenganGitHub,
    company: "Dicoding",
    companyImage: dicoding,
    color: "blue-text-gradient",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, certificates };
