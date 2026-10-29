import type { Content } from './types';

export const en: Content = {
  lang: 'en',
  meta: {
    title: "José da Silva · Systems and network technician",
    description:
      "CV of José da Silva, systems and network administration technician. IT support, Linux and Windows servers, networking, automation and web. Available to join a systems, networking or support team.",
  },
  site: {
    name: "José da Silva",
    initials: "JS",
    role: "Systems and network administration technician",
    location: "Tordera (Barcelona)",
    availability: "Available to join a team and contribute from day one",
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
    statusLabel: "Open to",
  },
  hero: {
    eyebrow: "Systems · Networks · Support · Automation",
    subtitle: "Systems, networking and support technician, finishing ASIR. Also scripting and web when it helps.",
    intro:
      "Systems, networking and support technician. I administer Windows and Linux servers, resolve user incidents and automate repetitive work. I am currently finishing the ASIR diploma.",
    primaryCta: "See the CV",
    secondaryCta: "Read the letter",
    facts: [
      { label: "Roles", value: "Systems · Networks · Support · Automation" },
      { label: "Working style", value: "On-site, hybrid or remote" },
      { label: "Location", value: "Tordera (Barcelona)" },
      { label: "Education", value: "ASIR advanced diploma · year 2 (2025—2027)" },
      { label: "Languages", value: "Catalan and Spanish native · English B1 · Portuguese A2" },
    ],
  },
  tech: {
    title: "Technical skills",
    lead: "The tools I work with every day: from the machine to the network, and from the terminal to code.",
    groups: [
      {
        title: "Systems and servers",
        items: [
          { icon: "linux", name: "Linux" },
          { icon: "debian", name: "Debian" },
          { icon: "ubuntu", name: "Ubuntu" },
          { icon: "windows", name: "Windows Server" },
          { icon: "apple", name: "macOS" },
          { icon: "vmware", name: "VMware" },
          { icon: "proxmox", name: "Proxmox" },
          { icon: "nginx", name: "Nginx" },
        ],
      },
      {
        title: "Networking, data and security",
        items: [
          { icon: "cisco", name: "Cisco" },
          { icon: "wireshark", name: "Wireshark" },
          { icon: "postgresql", name: "PostgreSQL" },
          { icon: "mysql", name: "MySQL" },
          { icon: "sqlite", name: "SQLite" },
        ],
      },
      {
        title: "Automation and web",
        items: [
          { icon: "gnubash", name: "Bash" },
          { icon: "python", name: "Python" },
          { icon: "git", name: "Git" },
          { icon: "github", name: "GitHub" },
          { icon: "astro", name: "Astro" },
          { icon: "html5", name: "HTML" },
          { icon: "css", name: "CSS" },
          { icon: "javascript", name: "JavaScript" },
          { icon: "markdown", name: "Markdown" },
        ],
      },
    ],
  },
  home: {
    meta: {
      title: "José da Silva · Systems and network technician",
      description:
        "Personal site of José da Silva: CV and cover letter. Systems and network administration technician, available to join a team.",
    },
    lead: "I am a systems and network technician. This site is my CV: what I can do, what I have done and how I introduce myself.",
    intro:
      "My name is José da Silva and I am from Tordera. I got into computing taking old computers apart at home, and I have not stopped since: I am now finishing ASIR and I work so technology does what people need it to do. I am practical, organised and good with people; I like leaving things better than I found them and learning every day.",
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
        text: "Linux and Windows Server, virtualisation, network services, backups and monitoring.",
      },
      {
        title: "Networking and security",
        text: "Cabling, routers and switches, DNS and DHCP, firewalls and user and permission management.",
      },
      {
        title: "User support",
        text: "Day-to-day incidents handled clearly, including with non-technical users, and documented so they do not come back.",
      },
      {
        title: "Automation and web",
        text: "Bash and PowerShell scripts, Git and HTML, CSS and Astro: if it can be scripted, I script it.",
      },
    ],
  },
  profile: {
    title: "Profile",
    lead: "Who I am, where I come from and what I want to do next.",
    paragraphs: [
      "I am from Tordera and I got into computing the usual way: taking old computers apart at home, breaking things and learning to make them work again. Then came SMX, where I discovered that what I enjoyed could also be a job.",
      "At Tordera Town Council I learned that support is mostly about people: listening, understanding what someone needs and fixing it without making them feel foolish. At Hardysoft I moved on to administering Windows and Linux servers and automating tasks, and confirmed that this is the direction I want to take.",
      "I see myself as an organised, curious person who adapts easily to new tools. When a problem appears I like to investigate before asking for help; when I solve it, I write it down. I am now finishing ASIR and want to learn systems and cloud alongside a team.",
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
        period: "June 2026 — August 2026",
        summary: "Support and administration for the consultancy's clients.",
        bullets: [
          "Set up and administered Windows and Linux servers and network resources.",
          "Automated repetitive tasks with scripting.",
          "Worked on infrastructure projects and service deployments.",
          "Supported clients and guided users who needed more help.",
        ],
        tags: ["Windows Server", "Linux", "Networking", "Scripting"],
      },
      {
        role: "IT Assistant",
        org: "Tordera Town Council",
        place: "Tordera",
        period: "May 2024 — July 2024",
        summary: "On-site support for the municipal departments.",
        bullets: [
          "Technical support for users and resolution of day-to-day incidents.",
          "Maintenance, installation and configuration of computers, printers and servers.",
          "Inventory management and basic networking and security tasks.",
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
          "Second year: advanced Linux and Windows server administration, database servers and SQL, network management and scripting automation.",
      },
      {
        title: "Intermediate Diploma in Microcomputer Systems and Networks (SMX)",
        org: "IES Lluís Companys",
        place: "Tordera",
        period: "2023 — 2025",
        status: "Graduated",
        detail:
          "IT infrastructures, troubleshooting technical incidents, and data connectivity and security in small and medium-sized companies.",
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
      "I want to contribute from day one, keep growing as a professional and build a relationship of trust with the company. On this site you will find my full CV and my career plan, in case they are useful before we talk.",
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
    lead: "I work in systems administration, IT support and cloud. If you have an opportunity or want to discuss the project, get in touch.",
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
