import type { Content } from './types';

export const en: Content = {
  lang: 'en',
  meta: {
    title: "José da Silva · Systems and network technician",
    description:
      "CV of José da Silva, systems and network administration technician. IT support, Linux and Windows servers, networking and automation. Available for an internship or a first job.",
  },
  site: {
    name: "José da Silva",
    initials: "JS",
    role: "Systems and network administration technician",
    location: "Tordera (Barcelona)",
    availability: "Available for an internship or a first job in systems and cloud",
    email: "josedaaaasilva@gmail.com",
    phoneDisplay: "722 827 664",
    phoneHref: "+34722827664",
    github: "https://github.com/josedaaaasilva-code",
  },
  nav: {
    home: "Home",
    cv: "CV",
    letter: "Cover letter",
    contact: "Let's talk",
  },
  ui: {
    skip: "Skip to content",
    themeToggle: "Switch theme",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    langLabel: "Language",
    mainNav: "Main navigation",
    print: "Download CV (PDF)",
    printHint: "Your print dialog opens: choose “Save as PDF”.",
    backToTop: "Back to top",
    madeWith: "Built with Astro and published on GitHub Pages",
    updated: "Updated October 2026",
    statusLabel: "Availability",
  },
  hero: {
    eyebrow: "Systems · Networks · Cloud",
    subtitle: "Systems and network administration technician, finishing ASIR.",
    intro:
      "I solve technical problems and write down what I did. I am looking for a team where I can grow in systems and cloud from day one.",
    primaryCta: "See the CV",
    secondaryCta: "Read the letter",
    facts: [
      { label: "Currently studying", value: "ASIR advanced diploma · year 2" },
      { label: "College", value: "IES Sa Palomera (Blanes)" },
      { label: "Specialism", value: "Systems administration and cloud" },
      { label: "Languages", value: "Catalan and Spanish native · English B1 · Portuguese A2" },
    ],
  },
  home: {
    meta: {
      title: "José da Silva · Systems and network technician",
      description:
        "Personal site of José da Silva: CV and cover letter. Systems and network administration technician, available for an internship or a first job.",
    },
    lead: "I am a systems and network technician. This site is my CV: what I can do, what I have done and how I introduce myself.",
    primaryCta: "See the CV",
    secondaryCta: "Read the letter",
    sectionsTitle: "The documents",
    cards: [
      {
        key: "cv",
        number: "01",
        title: "CV",
        text: "Profile, experience, education, skills, projects and languages. It can also be downloaded as a PDF.",
        cta: "Open the CV",
      },
      {
        key: "letter",
        number: "02",
        title: "Cover letter",
        text: "How I introduce myself to a company: who I am, what I have done and what I can contribute from day one.",
        cta: "Read the letter",
      },
    ],
    highlightsTitle: "What I can bring",
    highlights: [
      {
        title: "Systems and servers",
        text: "Linux and Windows Server, virtualisation, network services and backups.",
      },
      {
        title: "User support",
        text: "Day-to-day incidents handled clearly, including with non-technical users.",
      },
      {
        title: "Automation and documentation",
        text: "Scripts that remove repetitive work and documentation so the next person can maintain it.",
      },
    ],
  },
  profile: {
    title: "Profile",
    lead: "Who I am, where I come from and what I want to do next.",
    paragraphs: [
      "IT technician with training in Microcomputer Systems and Networks (SMX) and Networked Computer Systems Administration (ASIR). I have experience in IT support, user assistance, incident resolution and equipment maintenance, as well as participation in tasks with Windows and Linux servers and network resources.",
      "I am expanding my knowledge in virtualisation, Docker, Kubernetes, SQL, PostgreSQL and automation with scripting. I am looking to join an IT support or systems team where I can contribute problem-solving ability, close user support and a desire to keep growing in infrastructure, Cloud and DevOps.",
    ],
  },
  experience: {
    title: "Experience",
    lead: "From hands-on support to server administration.",
    items: [
      {
        role: "IT Technician",
        org: "Hardysoft Consultories",
        place: "Palafolls",
        period: "December 2025 — November 2026",
        summary: "Configuration and administration of Windows and Linux servers and network resource management.",
        bullets: [
          "Configuration and administration of Windows and Linux servers and network resource management.",
          "Collaboration in task automation through scripting.",
          "Participation in infrastructure projects and service deployments.",
          "Client support and assistance in resolving technical problems.",
        ],
        tags: ["Windows Server", "Linux", "Networking", "Scripting"],
      },
      {
        role: "IT Assistant",
        org: "Tordera Town Council",
        place: "Tordera",
        period: "January 2024 — October 2024",
        summary: "User support and incident resolution.",
        bullets: [
          "User support and incident resolution.",
          "Installation, configuration and maintenance of computers, printers and servers.",
          "IT inventory control and support in basic networking and security tasks.",
        ],
        tags: ["User support", "Hardware", "Inventory", "Networking"],
      },
    ],
    otherTitle: "Other experience",
    other: [
      {
        role: "Waiter",
        org: "La Masia",
        place: "Tordera",
        period: "2023 — present",
        summary: "Work alongside my studies.",
        bullets: [
          "Customer service and order management.",
          "Stockroom organisation and service pace.",
          "Teamwork under pressure.",
        ],
        tags: ["Customer service", "Teamwork"],
      },
    ],
  },
  education: {
    title: "Education",
    lead: "The technical foundation, step by step.",
    items: [
      {
        title: "Advanced Diploma in Networked Computer Systems Administration (ASIR)",
        org: "IES Sa Palomera",
        place: "Blanes",
        period: "2025 — 2027",
        status: "In progress",
        detail:
          "Second year. Windows and Linux systems administration, networks and services, SQL databases, automation through scripting and service deployment with Docker; learning Kubernetes.",
      },
      {
        title: "Intermediate Diploma in Microcomputer Systems and Networks (SMX)",
        org: "IES Lluís Companys",
        place: "Tordera",
        period: "2023 — 2025",
        status: "Graduated",
        detail:
          "Assembly, configuration and maintenance of equipment and networks; IT infrastructure management and technical incident resolution.",
      },
      {
        title: "Compulsory Secondary Education (ESO)",
        org: "IES Brianxa",
        place: "Tordera",
        period: "2019 — 2023",
        status: "Graduated",
        detail: "",
      },
    ],
  },
  skills: {
    title: "Skills",
    lead: "What I can do with my hands and what I can do with people.",
    groups: [
      {
        title: "Systems",
        items: [
          "Linux (Debian, Ubuntu)",
          "Windows Server",
          "Windows 10 and 11",
          "macOS",
          "Virtualisation",
          "Docker",
          "Kubernetes",
          "Network services: DNS, DHCP, file sharing",
          "Backups",
        ],
      },
      {
        title: "Networking and security",
        items: [
          "TCP/IP",
          "Local networks and structured cabling",
          "Routers and switches",
          "Firewalls and access policies",
          "User and permission management",
        ],
      },
      {
        title: "Data",
        items: ["SQL", "PostgreSQL", "Data modelling", "Information management and organisation"],
      },
      {
        title: "Automation and tools",
        items: [
          "Python",
          "Scripting (Bash, PowerShell)",
          "Git and GitHub",
          "Microsoft 365 and Office",
          "Inventory and remote support",
          "Technical documentation",
        ],
      },
      {
        title: "Personal skills",
        items: [
          "Resilience and stress management",
          "Empathy and teamwork",
          "Coordination and communication",
          "Adaptability and fast learning",
          "Attention to detail",
          "Autonomy",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    lead: "What I have built during the course, explained through the problem and the solution.",
    items: [
      {
        title: "Digitalising a hospital",
        period: "Course project · 2026 — present",
        summary:
          "A simulation of modernising a hospital's systems, from the infrastructure to the internal management tools.",
        bullets: [
          "Designed an infrastructure with high-availability systems.",
          "Modelled data and wrote SQL queries to manage the centre's information.",
          "Automated critical tasks and built tools for internal processes.",
          "Tagged and catalogued assets to make maintenance easier.",
        ],
        tags: ["High availability", "SQL", "Automation", "Documentation"],
      },
      {
        title: "End-to-end IT infrastructure",
        period: "Course projects · 2024 — 2026",
        summary:
          "Built and administered a complete lab infrastructure, from cabling to services.",
        bullets: [
          "Physical network build: cabling, rack and equipment.",
          "Administered Windows and Linux servers and network services.",
          "Applied security policies and backups.",
        ],
        tags: ["Networking", "Windows Server", "Linux", "Security"],
      },
    ],
  },
  languages: {
    title: "Languages",
    lead: "Working in Catalan and Spanish, and getting by in English.",
    items: [
      { name: "Catalan", level: "Native" },
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B1" },
      { name: "Portuguese", level: "A2" },
    ],
  },
  letter: {
    meta: {
      title: "Cover letter · José da Silva",
      description:
        "Cover letter from José da Silva, systems and network administration technician, to accompany his CV in an application.",
    },
    eyebrow: "Cover letter",
    title: "Cover letter",
    lead: "The text I send with my CV when I apply for a role. You can read it here or print it.",
    place: "Tordera, October 2026",
    greeting: "Hello,",
    paragraphs: [
      "I am currently in the final year of the advanced diploma in Networked Computer Systems Administration (ASIR). I see myself as a practical, reliable person, keen to contribute and to keep expanding what I know. I like solving technical problems and leaving things working better than I found them.",
      "I have experience in IT support, equipment maintenance, software and hardware installation, basic networking and systems administration. At Tordera Town Council I learned to work with non-technical users; at Hardysoft I administered Windows and Linux servers and automated repetitive tasks.",
      "I also have a working knowledge of Python, databases, Git and GitHub, and I have taken my first steps with agile methods such as Scrum. I am familiar with public-sector administrative vocabulary and document management, and I am comfortable with office tools.",
      "I enjoy contact with people: I make other people's problems my own and try to resolve every incident as correctly and quickly as possible. I learn fast, adapt easily and work in a clear, orderly way.",
      "I am looking for a role where I can contribute from day one, keep growing as a professional and build a relationship of trust with the company. On this site you will find my full CV and my career plan, in case they are useful before we talk.",
    ],
    closing:
      "I am available for an interview or to provide any further information you may need. Thank you for your time.",
    signature: "José da Silva",
    signatureRole: "Systems and network administration technician",
    printLabel: "Print the letter",
    cvCta: "See the full CV",
  },
  contact: {
    title: "Let's talk",
    lead: "I am looking for an internship or a first job in systems administration, IT support or cloud. If you have an opportunity or want to discuss the project, get in touch.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    phoneReveal: "Show phone number",
    locationLabel: "Where I am",
    githubLabel: "GitHub",
    note: "I usually reply within two days. The phone number is hidden to keep advertising bots away.",
  },
  footer: {
    line: "Personal site and CV · ASIR course (2025—2027)",
  },
};
