import type { Content } from './types';

export const ca: Content = {
  lang: 'ca',
  meta: {
    title: 'José da Silva · Tècnic en sistemes i xarxes',
    description:
      'Currículum de José da Silva, tècnic en administració de sistemes i xarxes. Suport IT, servidors Linux i Windows, xarxes i automatització. Disponible per a pràctiques o una primera feina.',
  },
  site: {
    name: 'José da Silva',
    initials: 'JS',
    role: 'Tècnic en administració de sistemes i xarxes',
    location: 'Tordera (Barcelona)',
    availability: 'Disponible per a pràctiques o una primera feina en sistemes i cloud',
    email: 'josedaaaasilva@gmail.com',
    phoneDisplay: '722 827 664',
    phoneHref: '+34722827664',
    github: 'https://github.com/josedaaaasilva-code',
  },
  nav: {
    home: 'Inici',
    cv: 'Currículum',
    letter: 'Carta',
    contact: 'Parlem-ne',
  },
  ui: {
    skip: 'Salta al contingut',
    themeToggle: 'Canvia el tema',
    themeToDark: 'Activa el mode fosc',
    themeToLight: 'Activa el mode clar',
    langLabel: 'Idioma',
    mainNav: 'Navegació principal',
    print: 'Descarrega el CV (PDF)',
    printHint: 'S\'obre el diàleg d\'impressió: tria «Desa com a PDF».',
    backToTop: 'Torna a dalt',
    madeWith: 'Fet amb Astro i publicat a GitHub Pages',
    updated: 'Actualitzat l\'octubre de 2026',
    statusLabel: 'Disponibilitat',
  },
  hero: {
    eyebrow: 'Sistemes · Xarxes · Cloud',
    subtitle: 'Tècnic en administració de sistemes i xarxes, a punt de tancar ASIR.',
    intro:
      'Resolc problemes tècnics i els deixo documentats. Busco un equip on créixer en sistemes i cloud des del primer dia.',
    primaryCta: 'Veure el currículum',
    secondaryCta: 'Llegir la carta',
    facts: [
      { label: 'Formació actual', value: 'CFGS ASIR · 2n curs' },
      { label: 'Centre', value: 'IES Sa Palomera (Blanes)' },
      { label: 'Especialitat', value: 'Administració de sistemes i cloud' },
      { label: 'Idiomes', value: 'Català i castellà nadius · Anglès B1 · Portuguès A2' },
    ],
  },
  home: {
    meta: {
      title: 'José da Silva · Tècnic en sistemes i xarxes',
      description:
        'Web personal de José da Silva: currículum i carta de presentació. Tècnic en administració de sistemes i xarxes, disponible per a pràctiques o una primera feina.',
    },
    lead: 'Soc tècnic en sistemes i xarxes. Aquesta web és el meu currículum: què sé fer, què he fet i com em presento.',
    primaryCta: 'Veure el currículum',
    secondaryCta: 'Llegir la carta',
    sectionsTitle: 'Els documents',
    cards: [
      {
        key: 'cv',
        number: '01',
        title: 'Currículum',
        text: 'Perfil, experiència, formació, competències, projectes i idiomes. També es pot descarregar en PDF.',
        cta: 'Obrir el currículum',
      },
      {
        key: 'letter',
        number: '02',
        title: 'Carta de presentació',
        text: 'Com em presento a una empresa: qui sóc, què he fet i què puc aportar des del primer dia.',
        cta: 'Llegir la carta',
      },
    ],
    highlightsTitle: 'Què puc aportar',
    highlights: [
      {
        title: 'Sistemes i servidors',
        text: 'Linux i Windows Server, virtualització, serveis de xarxa i còpies de seguretat.',
      },
      {
        title: 'Suport a usuaris',
        text: 'Incidències del dia a dia amb tracte clar, també amb qui no és tècnic.',
      },
      {
        title: 'Automatització i documentació',
        text: 'Scripts per estalviar feina repetida i documentació perquè el següent ho pugui mantenir.',
      },
    ],
  },
  profile: {
    title: 'Perfil',
    lead: 'Qui sóc, d\'on vinc i què vull fer els propers anys.',
    paragraphs: [
      'Soc de Tordera i vaig començar a l\'informàtica pel camí habitual: obrint ordinadors vells a casa, espatllant coses i aprenent a tornar-les a fer funcionar. Després va arribar SMX, on vaig descobrir que allò que m\'agradava també podia ser una feina.',
      'A l\'Ajuntament de Tordera vaig aprendre que el suport és sobretot tracte: escoltar, entendre què necessita la persona i resoldre-ho sense fer-la sentir malament. A Hardysoft vaig passar a administrar servidors Windows i Linux i a automatitzar tasques, i vaig confirmar que vull aprofundir per aquesta banda.',
      'Em considero una persona ordenada, curiosa i amb facilitat per adaptar-me a eines noves. Quan apareix un problema, m\'agrada investigar abans de demanar ajuda; quan el resolc, ho deixo escrit. Ara estic acabant ASIR i busco un lloc on aprendre sistemes i cloud al costat d\'un equip.',
    ],
  },
  experience: {
    title: 'Experiència',
    lead: 'Del suport a peu d\'usuari a l\'administració de servidors.',
    items: [
      {
        role: 'Tècnic IT',
        org: 'Hardysoft Consultories',
        place: 'Palafolls',
        period: 'juny 2026 — agost 2026',
        summary: 'Suport i administració per als clients de la consultora.',
        bullets: [
          'Configuració i administració de servidors Windows i Linux i dels recursos de xarxa.',
          'Automatització de tasques repetitives mitjançant scripting.',
          'Col·laboració en projectes d\'infraestructura i desplegament de serveis.',
          'Atenció als clients i acompanyament als usuaris amb més dificultats.',
        ],
        tags: ['Windows Server', 'Linux', 'Xarxes', 'Scripting'],
      },
      {
        role: 'Auxiliar IT',
        org: 'Ajuntament de Tordera',
        place: 'Tordera',
        period: 'maig 2024 — juliol 2024',
        summary: 'Suport de proximitat als departaments municipals.',
        bullets: [
          'Suport tècnic als usuaris i resolució d\'incidències del dia a dia.',
          'Manteniment, instal·lació i configuració d\'ordinadors, impressores i servidors.',
          'Gestió d\'inventari i tasques bàsiques de xarxa i seguretat.',
        ],
        tags: ['Suport a usuaris', 'Maquinari', 'Inventari', 'Xarxes'],
      },
    ],
    otherTitle: 'Altres experiències',
    other: [
      {
        role: 'Cambrer',
        org: 'La Masia',
        place: 'Tordera',
        period: '2023 — actualitat',
        summary: 'Feina compatible amb els estudis.',
        bullets: [
          'Atenció al client i gestió de comandes.',
          'Organització del magatzem i del ritme de servei.',
          'Treball en equip en entorns d\'alta pressió.',
        ],
        tags: ['Atenció al client', 'Treball en equip'],
      },
    ],
  },
  education: {
    title: 'Formació',
    lead: 'La base tècnica, pas a pas.',
    items: [
      {
        title: 'CFGS Administració de Sistemes Informàtics en Xarxa (ASIR)',
        org: 'IES Sa Palomera',
        place: 'Blanes',
        period: '2025 — 2027',
        status: 'En curs',
        detail:
          'Segon curs: administració avançada de servidors Linux i Windows, servidors de bases de dades i SQL, gestió de xarxes i automatització amb scripting.',
      },
      {
        title: 'CFGM Sistemes Microinformàtics i Xarxes (SMX)',
        org: 'IES Lluís Companys',
        place: 'Tordera',
        period: '2023 — 2025',
        status: 'Titulat',
        detail:
          'Infraestructures IT, resolució d\'incidències tècniques i connectivitat i seguretat de les dades en petites i mitjanes empreses.',
      },
      {
        title: 'Educació Secundària Obligatòria (ESO)',
        org: 'IES Brianxa',
        place: 'Tordera',
        period: '2019 — 2023',
        status: 'Titulat',
        detail: '',
      },
    ],
  },
  skills: {
    title: 'Competències',
    lead: 'El que sé fer amb les mans i el que sé fer amb la gent.',
    groups: [
      {
        title: 'Sistemes',
        items: [
          'Linux (Debian, Ubuntu)',
          'Windows Server',
          'Windows 10 i 11',
          'macOS',
          'Virtualització',
          'Serveis de xarxa: DNS, DHCP, fitxers',
          'Còpies de seguretat',
        ],
      },
      {
        title: 'Xarxes i seguretat',
        items: [
          'TCP/IP',
          'Xarxes locals i cablejat estructurat',
          'Routers i switches',
          'Tallafocs i polítiques d\'accés',
          'Gestió d\'usuaris i permisos',
        ],
      },
      {
        title: 'Dades',
        items: ['SQL', 'PostgreSQL', 'Modelatge de dades', 'Gestió i organització de la informació'],
      },
      {
        title: 'Automatització i eines',
        items: [
          'Scripting (Bash, PowerShell)',
          'Git i GitHub',
          'Microsoft 365 i Office',
          'Inventari i suport remot',
          'Documentació tècnica',
        ],
      },
      {
        title: 'Competències personals',
        items: [
          'Resiliència i gestió de l\'estrès',
          'Empatia i treball en equip',
          'Coordinació i comunicació',
          'Adaptabilitat i aprenentatge ràpid',
          'Atenció al detall',
          'Autonomia',
        ],
      },
    ],
  },
  projects: {
    title: 'Projectes',
    lead: 'El que he fet al cicle, explicat amb el problema i la solució.',
    items: [
      {
        title: 'Digitalització d\'un hospital',
        period: 'Projecte de cicle · 2026 — actualitat',
        summary:
          'Simulació de la modernització dels sistemes d\'un centre hospitalari, des de la infraestructura fins a les eines de gestió interna.',
        bullets: [
          'Disseny d\'una infraestructura amb sistemes d\'alta disponibilitat.',
          'Modelatge de dades i consultes SQL per a la gestió de la informació del centre.',
          'Automatització de tasques crítiques i desenvolupament d\'eines per als processos interns.',
          'Marcatge i catalogació d\'actius per facilitar-ne el manteniment.',
        ],
        tags: ['Alta disponibilitat', 'SQL', 'Automatització', 'Documentació'],
      },
      {
        title: 'Infraestructura IT de cap a peus',
        period: 'Projectes de cicle · 2024 — 2026',
        summary:
          'Muntatge i administració d\'una infraestructura completa de laboratori, del cablejat als serveis.',
        bullets: [
          'Muntatge físic de la xarxa: cablejat, rack i equips.',
          'Administració de servidors Windows i Linux i dels serveis de xarxa.',
          'Aplicació de polítiques de seguretat i de còpies de seguretat.',
        ],
        tags: ['Xarxes', 'Windows Server', 'Linux', 'Seguretat'],
      },
    ],
  },
  languages: {
    title: 'Idiomes',
    lead: 'Treballar en català i castellà, i defensar-me en anglès.',
    items: [
      { name: 'Català', level: 'Natiu' },
      { name: 'Castellà', level: 'Natiu' },
      { name: 'Anglès', level: 'B1' },
      { name: 'Portuguès', level: 'A2' },
    ],
  },
  letter: {
    meta: {
      title: 'Carta de presentació · José da Silva',
      description:
        'Carta de presentació de José da Silva, tècnic en administració de sistemes i xarxes, per acompanyar el currículum en una candidatura.',
    },
    eyebrow: 'Carta de presentació',
    title: 'Carta de presentació',
    lead: 'El text que acompanya el currículum quan envio una candidatura. El podeu llegir aquí o imprimir.',
    place: 'Tordera, octubre de 2026',
    greeting: 'Bon dia,',
    paragraphs: [
      'Actualment estic cursant el cicle formatiu de grau superior d\'Administració de Sistemes Informàtics en Xarxa (ASIR). Em considero una persona pràctica i responsable, amb ganes d\'aportar i d\'ampliar el que sé. M\'agrada resoldre problemes tècnics i deixar les coses funcionant millor que com les vaig trobar.',
      'Tinc experiència en tasques de suport informàtic, manteniment d\'equips, instal·lació de programari i maquinari, xarxes bàsiques i administració de sistemes. A l\'Ajuntament de Tordera vaig aprendre a tractar amb usuaris que no són tècnics; a Hardysoft vaig administrar servidors Windows i Linux i vaig automatitzar tasques repetitives.',
      'També tinc coneixements de Python, bases de dades i Git i GitHub, i he fet les primeres passes amb mètodes àgils com Scrum. Estic familiaritzat amb el vocabulari administratiu públic i amb la gestió de documentació, i treballo amb eines d\'oficina amb soltesa.',
      'M\'agrada tenir contacte amb la gent: faig meves les dificultats dels altres i intento resoldre cada incidència de la manera més correcta i ràpida possible. Aprenc de pressa, m\'adapto fàcilment i treballo de manera clara i ordenada.',
      'Busco un lloc on pugui col·laborar des del primer dia, seguir millorant com a professional i construir una relació de confiança amb l\'empresa. En aquesta web hi trobareu el currículum complet i la meva projecció professional, per si us és útil abans de parlar.',
    ],
    closing:
      'Estic a la vostra disposició per a una entrevista o per donar-vos qualsevol informació que necessiteu. Gràcies pel vostre temps.',
    signature: 'José da Silva',
    signatureRole: 'Tècnic en administració de sistemes i xarxes',
    printLabel: 'Imprimeix la carta',
    cvCta: 'Veure el currículum complet',
  },
  contact: {
    title: 'Parlem-ne',
    lead: 'Busco pràctiques o una primera feina en administració de sistemes, suport tècnic o cloud. Si tens una oportunitat o vols comentar el projecte, escriu-me.',
    emailLabel: 'Correu',
    phoneLabel: 'Telèfon',
    phoneReveal: 'Mostra el telèfon',
    locationLabel: 'On sóc',
    githubLabel: 'GitHub',
    note: 'Responc normalment en menys de dos dies. El telèfon està amagat per evitar robots de publicitat.',
  },
  footer: {
    line: 'Web personal i currículum · Cicle ASIR (2025—2027)',
  },
};
