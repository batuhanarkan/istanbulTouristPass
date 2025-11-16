export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  location?: string;
  price?: string;
  rating?: number;
}

export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  destination?: string;
  price?: string;
  duration?: string;
  discount?: string;
}

export interface NavItem {
  label: string;
  items?: NavItem[];
  url?: string;
}

