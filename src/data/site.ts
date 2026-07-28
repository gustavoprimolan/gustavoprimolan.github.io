export const site = {
  name: 'Gustavo Primolan',
  title: 'Software Engineer',
  company: 'Bitso',
  companyUrl: 'https://bitso.com',
  location: 'Brazil',
  languages: 'PT, EN',
  github: 'https://github.com/gustavoprimolan',
  linkedin: 'https://www.linkedin.com/in/gustavoprimolan/',
  instagram: 'https://instagram.com/gustavoprimolan',
  avatar: '/profile-picture.jpg',
  publicRepos: 57,
  codingSince: 2016,
  available: true,
  description:
    'Software Engineer at Bitso. Building reliable systems at the intersection of fintech, blockchain, and backend engineering.',
} as const;

export const skills = [
  {
    title: 'Backend',
    description:
      'Java, Spring, REST APIs, microservices architecture, and enterprise-grade web systems.',
    tags: ['Java', 'Spring', 'REST'],
    icon: 'code',
  },
  {
    title: 'Blockchain',
    description:
      'Smart contract development and decentralized application concepts with Solidity.',
    tags: ['Solidity', 'Web3', 'DeFi'],
    icon: 'bolt',
  },
  {
    title: 'DevOps',
    description:
      'Infrastructure automation, CI/CD pipelines, containerization, and cloud-native workflows.',
    tags: ['Docker', 'CI/CD', 'Python'],
    icon: 'server',
  },
  {
    title: 'AI & More',
    description:
      'AI hackathon projects, game development exploration, and always learning something new.',
    tags: ['AI/ML', 'Game Dev', 'Hackathons'],
    icon: 'monitor',
  },
] as const;

export const projects = [
  {
    name: 'Bauru Anime Fest',
    slug: 'bauru-anime-fest',
    description:
      'Official website for Bauru Anime Fest — anime convention in Bauru, Brazil. Designed and developed by me.',
    url: 'https://bauruanimefest.com.br/',
  },
] as const;

export const experience = [
  {
    date: 'Present',
    title: 'Software Engineer',
    company: 'Bitso',
    location: 'Brazil · Remote',
    description:
      "Building and maintaining systems for one of Latin America's leading cryptocurrency exchanges, focusing on reliability, security, and scale in the fintech space.",
  },
  {
    date: 'Mar 2020 – Sep 2021',
    title: 'Java Developer',
    company: 'Inter',
    location: 'Belo Horizonte, MG · Hybrid',
    description:
      'Backend development for a digital bank — Google Pay and Apple Pay integrations, Pix portability streams, legacy refactoring, and app unification. Java 11 with Spring and Micronaut on AWS (SQS, SNS, DynamoDB, S3, MSK) with Terraform.',
  },
  {
    date: 'Feb 2019 – Feb 2020',
    title: 'Java Engineer',
    company: 'Avenue Code',
    location: 'Belo Horizonte, Brazil',
    description:
      'Technology consulting for enterprise clients — RESTful APIs in Java 8 with Spring Boot, Spring Cloud, and Spring Security. AWS (EC2, SQS, Cognito, DynamoDB), Docker, Kubernetes, and frontend work with AEM and Vue.js.',
  },
] as const;

export const education = [
  {
    date: '2019 – 2021',
    degree: 'Specialization in Distributed Software Architecture',
    institution: 'PUC Minas',
  },
  {
    date: '2014 – 2017',
    degree: "Bachelor's Degree in Computer Science",
    institution: 'UNISAGRADO',
  },
] as const;

export const accomplishmentCategories = {
  tech: 'Technology',
  education: 'Education',
  professional: 'Professional',
  personal: 'Personal',
  language: 'Language',
  other: 'Other',
} as const;
