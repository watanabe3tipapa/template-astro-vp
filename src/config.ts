export const logo = 'My Hybrid Docs';

export interface NavItem {
  text: string;
  link: string;
}

export interface SidebarItem {
  text: string;
  link?: string;
  children?: SidebarItem[];
}

export const navItems: NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/getting-started' },
];

export const sidebarItems: SidebarItem[] = [
  {
    text: 'Guide',
    children: [
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Advanced', link: '/guide/advanced' },
    ],
  },
];

export interface DocPage {
  text: string;
  link: string;
}

export const docPages: DocPage[] = [
  { text: 'Home', link: '/' },
  { text: 'Getting Started', link: '/guide/getting-started' },
  { text: 'Advanced', link: '/guide/advanced' },
];

export function getPrevNext(currentLink: string) {
  const index = docPages.findIndex((p) => p.link === currentLink);
  return {
    prev: index > 0 ? docPages[index - 1] : null,
    next: index >= 0 && index < docPages.length - 1 ? docPages[index + 1] : null,
  };
}