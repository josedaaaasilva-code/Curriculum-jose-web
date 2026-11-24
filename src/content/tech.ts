import type { Lang, TechSection } from './types';

export const tech: Record<Lang, TechSection> = {
  ca: {
    title: 'Competències tècniques',
    lead: 'Les eines amb què treballo cada dia: de la màquina a la xarxa, i del terminal al codi.',
    groups: [
      {
        title: 'Sistemes i servidors',
        items: [
          { icon: 'linux', name: 'Linux' },
          { icon: 'debian', name: 'Debian' },
          { icon: 'ubuntu', name: 'Ubuntu' },
          { icon: 'windows', name: 'Windows Server' },
          { icon: 'apple', name: 'macOS' },
          { icon: 'nginx', name: 'Nginx' },
        ],
      },
      {
        title: 'Xarxes, dades i seguretat',
        items: [
          { icon: 'cisco', name: 'Cisco' },
          { icon: 'wireshark', name: 'Wireshark' },
          { icon: 'postgresql', name: 'PostgreSQL' },
          { icon: 'mysql', name: 'MySQL' },
          { icon: 'sqlite', name: 'SQLite' },
        ],
      },
      {
        title: 'Automatització i web',
        items: [
          { icon: 'gnubash', name: 'Bash' },
          { icon: 'python', name: 'Python' },
          { icon: 'github', name: 'GitHub' },
          { icon: 'html5', name: 'HTML' },
          { icon: 'css', name: 'CSS' },
          { icon: 'javascript', name: 'JavaScript' },
          { icon: 'markdown', name: 'Markdown' },
        ],
      },
    ],
  },
  es: {
    title: 'Competencias técnicas',
    lead: 'Las herramientas con las que trabajo cada día: de la máquina a la red, y del terminal al código.',
    groups: [
      {
        title: 'Sistemas y servidores',
        items: [
          { icon: 'linux', name: 'Linux' },
          { icon: 'debian', name: 'Debian' },
          { icon: 'ubuntu', name: 'Ubuntu' },
          { icon: 'windows', name: 'Windows Server' },
          { icon: 'apple', name: 'macOS' },
          { icon: 'nginx', name: 'Nginx' },
        ],
      },
      {
        title: 'Redes, datos y seguridad',
        items: [
          { icon: 'cisco', name: 'Cisco' },
          { icon: 'wireshark', name: 'Wireshark' },
          { icon: 'postgresql', name: 'PostgreSQL' },
          { icon: 'mysql', name: 'MySQL' },
          { icon: 'sqlite', name: 'SQLite' },
        ],
      },
      {
        title: 'Automatización y web',
        items: [
          { icon: 'gnubash', name: 'Bash' },
          { icon: 'python', name: 'Python' },
          { icon: 'github', name: 'GitHub' },
          { icon: 'html5', name: 'HTML' },
          { icon: 'css', name: 'CSS' },
          { icon: 'javascript', name: 'JavaScript' },
          { icon: 'markdown', name: 'Markdown' },
        ],
      },
    ],
  },
  en: {
    title: 'Technical skills',
    lead: 'The tools I work with every day: from the machine to the network, and from the terminal to code.',
    groups: [
      {
        title: 'Systems and servers',
        items: [
          { icon: 'linux', name: 'Linux' },
          { icon: 'debian', name: 'Debian' },
          { icon: 'ubuntu', name: 'Ubuntu' },
          { icon: 'windows', name: 'Windows Server' },
          { icon: 'apple', name: 'macOS' },
          { icon: 'nginx', name: 'Nginx' },
        ],
      },
      {
        title: 'Networking, data and security',
        items: [
          { icon: 'cisco', name: 'Cisco' },
          { icon: 'wireshark', name: 'Wireshark' },
          { icon: 'postgresql', name: 'PostgreSQL' },
          { icon: 'mysql', name: 'MySQL' },
          { icon: 'sqlite', name: 'SQLite' },
        ],
      },
      {
        title: 'Automation and web',
        items: [
          { icon: 'gnubash', name: 'Bash' },
          { icon: 'python', name: 'Python' },
          { icon: 'github', name: 'GitHub' },
          { icon: 'html5', name: 'HTML' },
          { icon: 'css', name: 'CSS' },
          { icon: 'javascript', name: 'JavaScript' },
          { icon: 'markdown', name: 'Markdown' },
        ],
      },
    ],
  },
};
