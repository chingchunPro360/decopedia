export interface Material {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: {
    min: number;
    max: number;
  };
}

export interface Category {
  id: number;
  name: string;
  image: string;
  href: string;
  description: string;
}

export interface Space {
  id: number;
  name: string;
  image: string;
  href: string;
  description: string;
}
