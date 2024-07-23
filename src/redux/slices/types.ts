// src/redux/slices/types.ts

export interface Venue {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: {
    id: number;
    venueId: number;
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
  };
  ccy: string;
  ccySymbol: string;
  currency: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: { id: number; image: string }[];
  available: boolean;
  modifiers?: Modifier[];
}

export interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
}

export interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number; // Optional for tracking quantity
}

export interface MenuSection {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images: { id: number; image: string }[];
  items: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: MenuSection[];
}
