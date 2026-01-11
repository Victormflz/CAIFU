export interface Testimonial {
  id: number;
  name: string;
  business: string;
  quote: string;
  rating: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}