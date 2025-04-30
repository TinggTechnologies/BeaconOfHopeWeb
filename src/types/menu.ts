// types/menu.ts
export interface HeaderItem {
  label: string;
  href: string; // Required
  submenu?: {
    label: string;
    href: string; // Required for subitems
  }[];
}