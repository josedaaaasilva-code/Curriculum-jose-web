import type { Content } from './types';

export const es: Content = {
  lang: 'es',
  meta: {
    title: "José da Silva · Técnico en sistemas y redes",
    description:
      "Currículum de José da Silva, técnico en administración de sistemas y redes. Soporte IT, servidores Linux y Windows, redes y automatización. Disponible para prácticas o un primer empleo.",
  },
  site: {
    name: "José da Silva",
    initials: "JS",
    role: "Técnico en administración de sistemas y redes",
    location: "Tordera (Barcelona)",
    availability: "Disponible para prácticas o un primer empleo en sistemas y cloud",
    email: "josedaaaasilva@gmail.com",
    phoneDisplay: "722 827 664",
    phoneHref: "+34722827664",
    github: "https://github.com/josedaaaasilva-code",
  },
  nav: {
    home: "Inicio",
    cv: "Currículum",
    letter: "Carta",
    contact: "Hablemos",
  },
  ui: {
    skip: "Salta al contenido",
    themeToggle: "Cambiar el tema",
    themeToDark: "Activar el modo oscuro",
    themeToLight: "Activar el modo claro",
    langLabel: "Idioma",
    mainNav: "Navegación principal",
    print: "Descargar el CV (PDF)",
    printHint: "Se abre el diálogo de impresión: elige «Guardar como PDF».",
    backToTop: "Volver arriba",
    madeWith: "Hecho con Astro y publicado en GitHub Pages",
    updated: "Actualizado en octubre de 2026",
    statusLabel: "Disponibilidad",
  },
  hero: {
    eyebrow: "Sistemas · Redes · Cloud",
    subtitle: "Técnico en administración de sistemas y redes, a punto de terminar ASIR.",
    intro:
      "Resuelvo problemas técnicos y los dejo documentados. Busco un equipo donde crecer en sistemas y cloud desde el primer día.",
    primaryCta: "Ver el currículum",
    secondaryCta: "Leer la carta",
    facts: [
      { label: "Formación actual", value: "CFGS ASIR · 2.º curso" },
      { label: "Centro", value: "IES Sa Palomera (Blanes)" },
      { label: "Especialidad", value: "Administración de sistemas y cloud" },
      { label: "Idiomas", value: "Catalán y castellano nativos · Inglés B1 · Portugués A2" },
    ],
  },
  home: {
    meta: {
      title: "José da Silva · Técnico en sistemas y redes",
      description:
        "Web personal de José da Silva: currículum y carta de presentación. Técnico en administración de sistemas y redes, disponible para prácticas o un primer empleo.",
    },
    lead: "Soy técnico en sistemas y redes. Esta web es mi currículum: qué sé hacer, qué he hecho y cómo me presento.",
    primaryCta: "Ver el currículum",
    secondaryCta: "Leer la carta",
    sectionsTitle: "Los documentos",
    cards: [
      {
        key: "cv",
        number: "01",
        title: "Currículum",
        text: "Perfil, experiencia, formación, competencias, proyectos e idiomas. También se puede descargar en PDF.",
        cta: "Abrir el currículum",
      },
      {
        key: "letter",
        number: "02",
        title: "Carta de presentación",
        text: "Cómo me presento a una empresa: quién soy, qué he hecho y qué puedo aportar desde el primer día.",
        cta: "Leer la carta",
      },
    ],
    highlightsTitle: "Qué puedo aportar",
    highlights: [
      {
        title: "Sistemas y servidores",
        text: "Linux y Windows Server, virtualización, servicios de red y copias de seguridad.",
      },
      {
        title: "Soporte a usuarios",
        text: "Incidencias del día a día con un trato claro, también con quien no es técnico.",
      },
      {
        title: "Automatización y documentación",
        text: "Scripts para ahorrar trabajo repetido y documentación para que el siguiente pueda mantenerlo.",
      },
    ],
  },
  profile: {
    title: "Perfil",
    lead: "Quién soy, de dónde vengo y qué quiero hacer los próximos años.",
    paragraphs: [
      "Técnico informático con formación en Sistemas Microinformáticos y Redes (SMX) y Administración de Sistemas Informáticos en Red (ASIR). Tengo experiencia en soporte IT, atención a usuarios, resolución de incidencias y mantenimiento de equipos, además de participación en tareas con servidores Windows y Linux y recursos de red.",
      "Estoy ampliando mis conocimientos en virtualización, Docker, Kubernetes, SQL, PostgreSQL y automatización con scripting. Busco incorporarme a un equipo de soporte IT o sistemas donde aportar capacidad de resolución, trato cercano con el usuario y ganas de seguir creciendo en infraestructura, Cloud y DevOps.",
    ],
  },
  experience: {
    title: "Experiencia",
    lead: "Del soporte de proximidad a la administración de servidores.",
    items: [
      {
        role: "Técnico IT",
        org: "Hardysoft Consultories",
        place: "Palafolls",
        period: "diciembre 2025 — noviembre 2026",
        summary: "Configuración y administración de servidores Windows y Linux y gestión de recursos de red.",
        bullets: [
          "Configuración y administración de servidores Windows y Linux y gestión de recursos de red.",
          "Colaboración en la automatización de tareas mediante scripting.",
          "Participación en proyectos de infraestructura y despliegue de servicios.",
          "Atención a clientes y apoyo en la resolución de problemas técnicos.",
        ],
        tags: ["Windows Server", "Linux", "Redes", "Scripting"],
      },
      {
        role: "Auxiliar IT",
        org: "Ajuntament de Tordera",
        place: "Tordera",
        period: "enero 2024 — octubre 2024",
        summary: "Soporte a usuarios y resolución de incidencias.",
        bullets: [
          "Soporte a usuarios y resolución de incidencias.",
          "Instalación, configuración y mantenimiento de ordenadores, impresoras y servidores.",
          "Control del inventario informático y apoyo en tareas básicas de red y seguridad.",
        ],
        tags: ["Soporte a usuarios", "Hardware", "Inventario", "Redes"],
      },
    ],
    otherTitle: "Otras experiencias",
    other: [
      {
        role: "Camarero",
        org: "La Masia",
        place: "Tordera",
        period: "2023 — actualidad",
        summary: "Trabajo compatible con los estudios.",
        bullets: [
          "Atención al cliente y gestión de comandas.",
          "Organización del almacén y del ritmo de servicio.",
          "Trabajo en equipo en entornos de alta presión.",
        ],
        tags: ["Atención al cliente", "Trabajo en equipo"],
      },
    ],
  },
  education: {
    title: "Formación",
    lead: "La base técnica, paso a paso.",
    items: [
      {
        title: "CFGS Administración de Sistemas Informáticos en Red (ASIR)",
        org: "IES Sa Palomera",
        place: "Blanes",
        period: "2025 — 2027",
        status: "En curso",
        detail:
          "Segundo curso. Administración de sistemas Windows y Linux, redes y servicios, bases de datos SQL, automatización mediante scripting y despliegue de servicios con Docker; aprendizaje de Kubernetes.",
      },
      {
        title: "CFGM Sistemas Microinformáticos y Redes (SMX)",
        org: "IES Lluís Companys",
        place: "Tordera",
        period: "2023 — 2025",
        status: "Titulado",
        detail:
          "Montaje, configuración y mantenimiento de equipos y redes; gestión de infraestructuras IT y resolución de incidencias técnicas.",
      },
      {
        title: "Educación Secundaria Obligatoria (ESO)",
        org: "IES Brianxa",
        place: "Tordera",
        period: "2019 — 2023",
        status: "Titulado",
        detail: "",
      },
    ],
  },
  skills: {
    title: "Competencias",
    lead: "Lo que sé hacer con las manos y lo que sé hacer con la gente.",
    groups: [
      {
        title: "Sistemas",
        items: [
          "Linux (Debian, Ubuntu)",
          "Windows Server",
          "Windows 10 y 11",
          "macOS",
          "Virtualización",
          "Docker",
          "Kubernetes",
          "Servicios de red: DNS, DHCP, ficheros",
          "Copias de seguridad",
        ],
      },
      {
        title: "Redes y seguridad",
        items: [
          "TCP/IP",
          "Redes locales y cableado estructurado",
          "Routers y switches",
          "Cortafuegos y políticas de acceso",
          "Gestión de usuarios y permisos",
        ],
      },
      {
        title: "Datos",
        items: ["SQL", "PostgreSQL", "Modelado de datos", "Gestión y organización de la información"],
      },
      {
        title: "Automatización y herramientas",
        items: [
          "Python",
          "Scripting (Bash, PowerShell)",
          "Git y GitHub",
          "Microsoft 365 y Office",
          "Inventario y soporte remoto",
          "Documentación técnica",
        ],
      },
      {
        title: "Competencias personales",
        items: [
          "Resiliencia y gestión del estrés",
          "Empatía y trabajo en equipo",
          "Coordinación y comunicación",
          "Adaptabilidad y aprendizaje rápido",
          "Atención al detalle",
          "Autonomía",
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    lead: "Lo que he hecho en el ciclo, explicado con el problema y la solución.",
    items: [
      {
        title: "Digitalización de un hospital",
        period: "Proyecto de ciclo · 2026 — actualidad",
        summary:
          "Simulación de la modernización de los sistemas de un centro hospitalario, desde la infraestructura hasta las herramientas de gestión interna.",
        bullets: [
          "Diseño de una infraestructura con sistemas de alta disponibilidad.",
          "Modelado de datos y consultas SQL para la gestión de la información del centro.",
          "Automatización de tareas críticas y desarrollo de herramientas para los procesos internos.",
          "Etiquetado y catalogación de activos para facilitar su mantenimiento.",
        ],
        tags: ["Alta disponibilidad", "SQL", "Automatización", "Documentación"],
      },
      {
        title: "Infraestructura IT de principio a fin",
        period: "Proyectos de ciclo · 2024 — 2026",
        summary:
          "Montaje y administración de una infraestructura completa de laboratorio, del cableado a los servicios.",
        bullets: [
          "Montaje físico de la red: cableado, rack y equipos.",
          "Administración de servidores Windows y Linux y de los servicios de red.",
          "Aplicación de políticas de seguridad y de copias de seguridad.",
        ],
        tags: ["Redes", "Windows Server", "Linux", "Seguridad"],
      },
    ],
  },
  languages: {
    title: "Idiomas",
    lead: "Trabajar en catalán y castellano, y defenderme en inglés.",
    items: [
      { name: "Catalán", level: "Nativo" },
      { name: "Castellano", level: "Nativo" },
      { name: "Inglés", level: "B1" },
      { name: "Portugués", level: "A2" },
    ],
  },
  letter: {
    meta: {
      title: "Carta de presentación · José da Silva",
      description:
        "Carta de presentación de José da Silva, técnico en administración de sistemas y redes, para acompañar el currículum en una candidatura.",
    },
    eyebrow: "Carta de presentación",
    title: "Carta de presentación",
    lead: "El texto que acompaña al currículum cuando envío una candidatura. Puedes leerlo aquí o imprimirlo.",
    place: "Tordera, octubre de 2026",
    greeting: "Buenos días:",
    paragraphs: [
      "Actualmente estoy cursando el ciclo formativo de grado superior de Administración de Sistemas Informáticos en Red (ASIR). Me considero una persona práctica y responsable, con ganas de aportar y de ampliar lo que sé. Me gusta resolver problemas técnicos y dejar las cosas funcionando mejor que como las encontré.",
      "Tengo experiencia en tareas de soporte informático, mantenimiento de equipos, instalación de software y hardware, redes básicas y administración de sistemas. En el Ayuntamiento de Tordera aprendí a tratar con usuarios que no son técnicos; en Hardysoft administré servidores Windows y Linux y automaticé tareas repetitivas.",
      "También tengo conocimientos de Python, bases de datos y Git y GitHub, y he dado mis primeros pasos con métodos ágiles como Scrum. Estoy familiarizado con el vocabulario administrativo público y con la gestión de documentación, y trabajo con herramientas de oficina con soltura.",
      "Me gusta el contacto con la gente: hago míos los problemas de los demás e intento resolver cada incidencia de la manera más correcta y rápida posible. Aprendo rápido, me adapto con facilidad y trabajo de forma clara y ordenada.",
      "Busco un puesto en el que pueda colaborar desde el primer día, seguir mejorando como profesional y construir una relación de confianza con la empresa. En esta web encontraréis el currículum completo y mi proyección profesional, por si os resulta útil antes de hablar.",
    ],
    closing:
      "Quedo a vuestra disposición para una entrevista o para daros cualquier información que necesitéis. Gracias por vuestro tiempo.",
    signature: "José da Silva",
    signatureRole: "Técnico en administración de sistemas y redes",
    printLabel: "Imprimir la carta",
    cvCta: "Ver el currículum completo",
  },
  contact: {
    title: "Hablemos",
    lead: "Busco prácticas o un primer empleo en administración de sistemas, soporte técnico o cloud. Si tienes una oportunidad o quieres comentar el proyecto, escríbeme.",
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
    phoneReveal: "Mostrar el teléfono",
    locationLabel: "Dónde estoy",
    githubLabel: "GitHub",
    note: "Respondo normalmente en menos de dos días. El teléfono está oculto para evitar robots de publicidad.",
  },
  footer: {
    line: "Web personal y currículum · Ciclo ASIR (2025—2027)",
  },
};
