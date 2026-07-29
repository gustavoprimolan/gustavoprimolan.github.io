import type { Locale } from './types';

const en = {
  meta: {
    homeTitle: 'Gustavo Primolan | Software Engineer',
    homeDescription:
      'Software Engineer at Bitso. Backend, fintech, and blockchain — also into video games, sports, CrossFit, and building things beyond code.',
    accomplishmentsTitle: 'Accomplishments | Gustavo Primolan',
    accomplishmentsDescription: 'Certificates, credentials, and milestones — tech and beyond.',
    blogTitle: 'Blog | Gustavo Primolan',
    blogDescription: 'Thoughts on engineering, learning, and side projects.',
    defaultDescription: 'Gustavo Primolan — Software Engineer at Bitso.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    accomplishments: 'Accomplishments',
    experience: 'Experience',
    education: 'Education',
    blog: 'Blog',
    contact: 'Contact',
    toggleMenu: 'Toggle menu',
    switchTo: 'Switch to',
  },
  hero: {
    available: 'Available for opportunities',
    subtitleBefore: 'Software Engineer at',
    subtitleAfter:
      '— backend, fintech, and blockchain by day. Video games, sports, CrossFit, and the gym when I\'m off the clock.',
    viewWork: 'View my work',
    publicRepos: 'Public repos',
    basedIn: 'Based in',
    locationName: 'Brazil',
    codingSince: 'Coding since',
    scroll: 'Scroll',
    scrollAria: 'Scroll to about section',
  },
  about: {
    tag: '01 — About',
    title: 'Who I am',
    leadBefore: "I'm Gustavo — a software engineer based in Brazil, currently at",
    leadAfter:
      ", one of Latin America's leading cryptocurrency platforms. But this site isn't just a résumé in HTML. It's a picture of the whole person behind the commits.",
    p2: 'Professionally, I care about backend systems that are reliable, secure, and built to last — from fintech and digital banking to blockchain experiments, DevOps, and AI side projects. I like understanding how things work under the hood and shipping code that holds up in production.',
    p3: 'Away from the keyboard, I\'m just as active. I love video games, follow sports, and train regularly — CrossFit, the gym, and staying moving in general. I\'m also involved in community and event work (like building the site for Bauru Anime Fest), because the things I\'m curious about outside tech often find their way back into what I build.',
    outsideWork: 'Outside of work',
    quickFacts: 'Quick facts',
    location: 'Location',
    company: 'Company',
    focus: 'Focus',
    focusValue: 'Backend & Fintech',
    languages: 'Languages',
    languagesValue: 'PT, EN',
    alsoInto: 'Also into',
    alsoIntoValue: 'Games, sports & fitness',
  },
  interests: [
    'Video games',
    'Sports',
    'CrossFit',
    'Gym',
    'Anime & events',
    'Learning new things',
  ],
  skills: {
    tag: '02 — Skills',
    title: 'Technologies I work with',
    items: [
      {
        title: 'Backend',
        description:
          'Java, Spring, REST APIs, microservices architecture, and enterprise-grade web systems.',
        tags: ['Java', 'Spring', 'REST'],
        icon: 'code' as const,
      },
      {
        title: 'Blockchain',
        description:
          'Smart contract development and decentralized application concepts with Solidity.',
        tags: ['Solidity', 'Web3', 'DeFi'],
        icon: 'bolt' as const,
      },
      {
        title: 'DevOps',
        description:
          'Infrastructure automation, CI/CD pipelines, containerization, and cloud-native workflows.',
        tags: ['Docker', 'CI/CD', 'Python'],
        icon: 'server' as const,
      },
      {
        title: 'AI & More',
        description:
          'AI hackathon projects, game development exploration, and always learning something new.',
        tags: ['AI/ML', 'Game Dev', 'Hackathons'],
        icon: 'monitor' as const,
      },
    ],
  },
  projects: {
    tag: '03 — Projects',
    title: 'Selected work',
    liveSite: 'Live site',
    visit: 'Visit',
    items: [
      {
        name: 'Bauru Anime Fest',
        description:
          'Official website for Bauru Anime Fest — anime convention in Bauru, Brazil. Designed and developed by me.',
        url: 'https://bauruanimefest.com.br/',
      },
    ],
  },
  accomplishments: {
    tag: '04 — Accomplishments',
    title: 'Certificates & milestones',
    viewAll: 'View all',
    verify: 'Verify',
    empty: 'No accomplishments yet.',
    pageTag: 'Accomplishments',
    pageTitle: 'Certificates & milestones',
    pageIntro:
      'Professional certifications, education, language credentials, hackathons, and personal achievements.',
    categories: {
      tech: 'Technology',
      education: 'Education',
      professional: 'Professional',
      personal: 'Personal',
      language: 'Language',
      other: 'Other',
    },
  },
  experience: {
    tag: '05 — Experience',
    title: "Where I've worked",
    items: [
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
          "Backend development for a digital bank — Google Pay and Apple Pay integrations, Pix portability streams, legacy refactoring, and app unification. Won 2nd place at Inter's hackathon building Babi, an AI assistant for the super app. Java 11 with Spring and Micronaut on AWS (SQS, SNS, DynamoDB, S3, MSK) with Terraform.",
      },
      {
        date: 'Feb 2019 – Feb 2020',
        title: 'Java Engineer',
        company: 'Avenue Code',
        location: 'Belo Horizonte, Brazil',
        description:
          'Technology consulting for enterprise clients — RESTful APIs in Java 8 with Spring Boot, Spring Cloud, and Spring Security. AWS (EC2, SQS, Cognito, DynamoDB), Docker, Kubernetes, and frontend work with AEM and Vue.js.',
      },
    ],
  },
  education: {
    tag: '06 — Education',
    title: 'Academic background',
    items: [
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
    ],
  },
  contact: {
    tag: '07 — Contact',
    title: "Let's build something together",
    intro:
      "I'm open to interesting projects, collaborations, and new opportunities. Reach out through any of the channels below.",
    letsTalk: "Let's talk",
  },
  blog: {
    tag: 'Blog',
    title: 'Writing',
    intro:
      "Notes on backend engineering, fintech, blockchain, DevOps, and whatever I'm learning along the way.",
    noPosts: 'No posts yet',
    noPostsHint: 'Blog posts are published in English for now. More coming soon.',
    backHome: 'Back home',
    backToBlog: 'Back to blog',
  },
  footer: {
    builtWith: 'Built with Astro.',
    backToTop: 'Back to top',
  },
};

const pt = {
  meta: {
    homeTitle: 'Gustavo Primolan | Engenheiro de Software',
    homeDescription:
      'Engenheiro de Software na Bitso. Backend, fintech e blockchain — também curto video games, esportes, CrossFit e coisas além do código.',
    accomplishmentsTitle: 'Conquistas | Gustavo Primolan',
    accomplishmentsDescription: 'Certificados, credenciais e marcos — dentro e fora da tecnologia.',
    blogTitle: 'Blog | Gustavo Primolan',
    blogDescription: 'Reflexões sobre engenharia, aprendizado e projetos paralelos.',
    defaultDescription: 'Gustavo Primolan — Engenheiro de Software na Bitso.',
  },
  nav: {
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    accomplishments: 'Conquistas',
    experience: 'Experiência',
    education: 'Formação',
    blog: 'Blog',
    contact: 'Contato',
    toggleMenu: 'Abrir menu',
    switchTo: 'Mudar para',
  },
  hero: {
    available: 'Disponível para oportunidades',
    subtitleBefore: 'Engenheiro de Software na',
    subtitleAfter:
      '— backend, fintech e blockchain no trabalho. Video games, esportes, CrossFit e academia quando não estou codando.',
    viewWork: 'Ver meus projetos',
    publicRepos: 'Repositórios públicos',
    basedIn: 'Baseado em',
    locationName: 'Brasil',
    codingSince: 'Codando desde',
    scroll: 'Rolar',
    scrollAria: 'Rolar até a seção sobre',
  },
  about: {
    tag: '01 — Sobre',
    title: 'Quem sou eu',
    leadBefore: 'Eu sou o Gustavo — engenheiro de software no Brasil, atualmente na',
    leadAfter:
      ', uma das principais plataformas de criptomoedas da América Latina. Mas este site não é só um currículo em HTML. É um retrato de quem eu sou por trás dos commits.',
    p2: 'Profissionalmente, me importo com sistemas backend confiáveis, seguros e feitos para durar — de fintech e banco digital a experimentos com blockchain, DevOps e projetos com IA. Gosto de entender como as coisas funcionam por baixo dos panos e entregar código que aguenta produção.',
    p3: 'Longe do teclado, sou igualmente ativo. Adoro video games, acompanho esportes e treino regularmente — CrossFit, academia e manter o corpo em movimento. Também participo de comunidade e eventos (como o site do Bauru Anime Fest), porque o que me interessa fora da tech muitas vezes volta para o que eu construo.',
    outsideWork: 'Fora do trabalho',
    quickFacts: 'Resumo',
    location: 'Local',
    company: 'Empresa',
    focus: 'Foco',
    focusValue: 'Backend & Fintech',
    languages: 'Idiomas',
    languagesValue: 'PT, EN',
    alsoInto: 'Também curto',
    alsoIntoValue: 'Games, esportes & fitness',
  },
  interests: [
    'Video games',
    'Esportes',
    'CrossFit',
    'Academia',
    'Anime & eventos',
    'Aprender coisas novas',
  ],
  skills: {
    tag: '02 — Skills',
    title: 'Tecnologias que uso',
    items: [
      {
        title: 'Backend',
        description:
          'Java, Spring, APIs REST, arquitetura de microsserviços e sistemas web de nível enterprise.',
        tags: ['Java', 'Spring', 'REST'],
        icon: 'code' as const,
      },
      {
        title: 'Blockchain',
        description:
          'Desenvolvimento de smart contracts e conceitos de aplicações descentralizadas com Solidity.',
        tags: ['Solidity', 'Web3', 'DeFi'],
        icon: 'bolt' as const,
      },
      {
        title: 'DevOps',
        description:
          'Automação de infraestrutura, pipelines CI/CD, containerização e fluxos cloud-native.',
        tags: ['Docker', 'CI/CD', 'Python'],
        icon: 'server' as const,
      },
      {
        title: 'IA & mais',
        description:
          'Projetos de hackathon com IA, estudos de game dev e sempre aprendendo algo novo.',
        tags: ['IA/ML', 'Game Dev', 'Hackathons'],
        icon: 'monitor' as const,
      },
    ],
  },
  projects: {
    tag: '03 — Projetos',
    title: 'Trabalhos selecionados',
    liveSite: 'Site no ar',
    visit: 'Visitar',
    items: [
      {
        name: 'Bauru Anime Fest',
        description:
          'Site oficial do Bauru Anime Fest — evento de anime em Bauru, SP. Projetado e desenvolvido por mim.',
        url: 'https://bauruanimefest.com.br/',
      },
    ],
  },
  accomplishments: {
    tag: '04 — Conquistas',
    title: 'Certificados & marcos',
    viewAll: 'Ver todos',
    verify: 'Verificar',
    empty: 'Nenhuma conquista ainda.',
    pageTag: 'Conquistas',
    pageTitle: 'Certificados & marcos',
    pageIntro:
      'Certificações profissionais, formação, idiomas, hackathons e conquistas pessoais.',
    categories: {
      tech: 'Tecnologia',
      education: 'Educação',
      professional: 'Profissional',
      personal: 'Pessoal',
      language: 'Idioma',
      other: 'Outro',
    },
  },
  experience: {
    tag: '05 — Experiência',
    title: 'Onde trabalhei',
    items: [
      {
        date: 'Atual',
        title: 'Engenheiro de Software',
        company: 'Bitso',
        location: 'Brasil · Remoto',
        description:
          'Construção e manutenção de sistemas para uma das principais exchanges de criptomoedas da América Latina, com foco em confiabilidade, segurança e escala no setor fintech.',
      },
      {
        date: 'mar 2020 – set 2021',
        title: 'Desenvolvedor Java',
        company: 'Inter',
        location: 'Belo Horizonte, MG · Híbrido',
        description:
          'Backend para banco digital — integrações Google Pay e Apple Pay, fluxos de portabilidade Pix, refatoração de legado e unificação de apps. 2º lugar no hackathon do Inter com a Babi, assistente de IA para o super app. Java 11 com Spring e Micronaut na AWS (SQS, SNS, DynamoDB, S3, MSK) e Terraform.',
      },
      {
        date: 'fev 2019 – fev 2020',
        title: 'Engenheiro Java',
        company: 'Avenue Code',
        location: 'Belo Horizonte, Brasil',
        description:
          'Consultoria tecnológica para clientes enterprise — APIs RESTful em Java 8 com Spring Boot, Spring Cloud e Spring Security. AWS (EC2, SQS, Cognito, DynamoDB), Docker, Kubernetes e frontend com AEM e Vue.js.',
      },
    ],
  },
  education: {
    tag: '06 — Formação',
    title: 'Formação acadêmica',
    items: [
      {
        date: '2019 – 2021',
        degree: 'Especialização em Arquitetura de Software Distribuído',
        institution: 'PUC Minas',
      },
      {
        date: '2014 – 2017',
        degree: 'Bacharelado em Ciência da Computação',
        institution: 'UNISAGRADO',
      },
    ],
  },
  contact: {
    tag: '07 — Contato',
    title: 'Vamos construir algo juntos',
    intro:
      'Estou aberto a projetos interessantes, colaborações e novas oportunidades. Entre em contato por qualquer canal abaixo.',
    letsTalk: 'Vamos conversar',
  },
  blog: {
    tag: 'Blog',
    title: 'Escritos',
    intro:
      'Notas sobre backend, fintech, blockchain, DevOps e o que estou aprendendo pelo caminho.',
    noPosts: 'Nenhum post ainda',
    noPostsHint: 'Os posts do blog são publicados em inglês por enquanto. Em breve, mais conteúdo.',
    backHome: 'Voltar ao início',
    backToBlog: 'Voltar ao blog',
  },
  footer: {
    builtWith: 'Feito com Astro.',
    backToTop: 'Voltar ao topo',
  },
};

export const translations = { en, pt } as const;

export type Translations = typeof en;

export function getTranslations(lang: Locale): Translations {
  return translations[lang];
}
