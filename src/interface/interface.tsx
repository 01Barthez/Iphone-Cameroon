import type { ReactNode } from "react";

export interface ISEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  favicon?: string;
}

export interface ISocialLink {
  id: string,
  url: string,
  name: string,
  icon: ReactNode,
}

export interface IFootersLinks {
  id?: string,
  title: string,
  links: { // For differents links
    url: string;
    name: string;
  }[],
}

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
}

export interface IPrivateRouteProps {
  children: ReactNode
}

export interface ILogoProps {
  isDarkZone?: boolean;
}

export interface ILinkCategory {
  id: string;
  icon: ReactNode;
  name: string;
  href: string;
}

export interface IcardCategory {
  icon: ReactNode;
  name: string;
  href: string;
}

export interface ICTAProduct { 
  name?: string; 
  url: string 
}

export interface ICTA2 { 
  name?: string; 
  url: string 
}

type statutProduct = "New" | "Best Seller" | "Popular" | "Discount" | "Free Shipping" | "On Stock" | "On Solde" | null

export interface IProduct {
  id: string;
  slug: string;
  picture: string;
  name: string;
  price: number;
  caracteristiques?: string;
  description?: string;
  isWhiteListe?: boolean;
  isPromo?: boolean;
  promoDelay?: number;
  promoPercent?: number;
  statut?: statutProduct;
}