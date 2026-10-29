import type { Content } from './types';

export const es: Content = {
  lang: 'es',
  meta: {
    title: "José da Silva · Técnico en sistemas y redes",
    description:
      "Currículum de José da Silva, técnico en administración de sistemas y redes. Soporte IT, servidores Linux y Windows, redes, automatización y web. Disponible para incorporarme a un equipo de sistemas, redes o soporte.",
  },
  site: {
    name: "José da Silva",
    initials: "JS",
    role: "Técnico en administración de sistemas y redes",
    location: "Tordera (Barcelona)",
    availability: "Disponible para incorporarme a un equipo y aportar desde el primer día",
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
    statusLabel: "Abierto a",
  },
  hero: {
    eyebrow: "Sistemas · Redes · Soporte · Automatización",
    subtitle: "Técnico de sistemas, redes y soporte, a punto de terminar ASIR. También scripting y web cuando hace falta.",
    intro:
      "Técnico de sistemas, redes y soporte. Administro servidores Windows y Linux, resuelvo incidencias de usuarios y automatizo las tareas que se repiten. Actualmente termino el CFGS ASIR.",
    primaryCta: "Ver el currículum",
    secondaryCta: "Leer la carta",
    facts: [
      { label: "Roles", value: "Sistemas · Redes · Soporte · Automatización" },
      { label: "Modalidad", value: "Presencial, híbrido o remoto" },
      { label: "Ubicación", value: "Tordera (Barcelona)" },
      { label: "Formación", value: "CFGS ASIR · 2.º curso (2025—2027)" },
      { label: "Idiomas", value: "Catalán y castellano nativos · Inglés B1 · Portugués A2" },
    ],
  },
  tech: {
    title: "Competencias técnicas",
    lead: "Las herramientas con las que trabajo cada día: de la máquina a la red, y del terminal al código.",
    groups: [
      {
        title: "Sistemas y servidores",
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
        title: "Redes, datos y seguridad",
        items: [
          { icon: "cisco", name: "Cisco" },
          { icon: "wireshark", name: "Wireshark" },
          { icon: "postgresql", name: "PostgreSQL" },
          { icon: "mysql", name: "MySQL" },
          { icon: "sqlite", name: "SQLite" },
        ],
      },
      {
        title: "Automatización y web",
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
      title: "José da Silva · Técnico en sistemas y redes",
      description:
        "Web personal de José da Silva: currículum y carta de presentación. Técnico en administración de sistemas y redes, disponible para incorporarme a un equipo.",
    },
    lead: "Soy técnico en sistemas y redes. Esta web es mi currículum: qué sé hacer, qué he hecho y cómo me presento.",
    intro:
      "Me llamo José da Silva y soy de Tordera. Empecé en la informática abriendo ordenadores viejos en casa, y todavía no he parado: ahora estoy terminando ASIR y me dedico a que la tecnología funcione para quien la usa. Soy práctico, ordenado y con trato con la gente; me gusta dejar las cosas mejor de como las encuentro y aprender cada día.",
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
        text: "Linux y Windows Server, virtualización, servicios de red, copias de seguridad y monitorización.",
      },
      {
        title: "Redes y seguridad",
        text: "Cableado, routers y switches, DNS y DHCP, cortafuegos y gestión de usuarios y permisos.",
      },
      {
        title: "Soporte a usuarios",
        text: "Incidencias del día a día con un trato claro, también con quien no es técnico, y documentadas para que no se repitan.",
      },
      {
        title: "Automatización y web",
        text: "Scripts en Bash y PowerShell, Git y HTML, CSS y Astro: si hay que programarlo, lo programo.",
      },
    ],
  },
  profile: {
    title: "Perfil",
    lead: "Quién soy, de dónde vengo y qué quiero hacer los próximos años.",
    paragraphs: [
      "Soy de Tordera y empecé en la informática por el camino habitual: abriendo ordenadores viejos en casa, rompiendo cosas y aprendiendo a volver a hacerlas funcionar. Después llegó SMX, donde descubrí que lo que me gustaba también podía ser un trabajo.",
      "En el Ayuntamiento de Tordera aprendí que el soporte es sobre todo trato: escuchar, entender qué necesita la persona y resolverlo sin hacerla sentir mal. En Hardysoft pasé a administrar servidores Windows y Linux y a automatizar tareas, y confirmé que quiero profundizar por ese lado.",
      "Me considero una persona ordenada, curiosa y con facilidad para adaptarme a herramientas nuevas. Cuando aparece un problema, me gusta investigar antes de pedir ayuda; cuando lo resuelvo, lo dejo por escrito. Ahora estoy terminando ASIR y quiero aprender sistemas y cloud junto a un equipo.",
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
        period: "junio 2026 — agosto 2026",
        summary: "Soporte y administración para los clientes de la consultora.",
        bullets: [
          "Configuración y administración de servidores Windows y Linux y de los recursos de red.",
          "Automatización de tareas repetitivas mediante scripting.",
          "Colaboración en proyectos de infraestructura y despliegue de servicios.",
          "Atención a los clientes y acompañamiento a los usuarios con más dificultades.",
        ],
        tags: ["Windows Server", "Linux", "Redes", "Scripting"],
      },
      {
        role: "Auxiliar IT",
        org: "Ajuntament de Tordera",
        place: "Tordera",
        period: "mayo 2024 — julio 2024",
        summary: "Soporte de proximidad a los departamentos municipales.",
        bullets: [
          "Soporte técnico a los usuarios y resolución de incidencias del día a día.",
          "Mantenimiento, instalación y configuración de ordenadores, impresoras y servidores.",
          "Gestión de inventario y tareas básicas de red y seguridad.",
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
          "Segundo curso: administración avanzada de servidores Linux y Windows, servidores de bases de datos y SQL, gestión de redes y automatización con scripting.",
      },
      {
        title: "CFGM Sistemas Microinformáticos y Redes (SMX)",
        org: "IES Lluís Companys",
        place: "Tordera",
        period: "2023 — 2025",
        status: "Titulado",
        detail:
          "Infraestructuras IT, resolución de incidencias técnicas y conectividad y seguridad de los datos en pequeñas y medianas empresas.",
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
      "Quiero colaborar desde el primer día, seguir mejorando como profesional y construir una relación de confianza con la empresa. En esta web encontraréis el currículum completo y mi proyección profesional, por si os resulta útil antes de hablar.",
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
    lead: "Trabajo en administración de sistemas, soporte técnico y cloud. Si tienes una oportunidad o quieres comentar el proyecto, escríbeme.",
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
