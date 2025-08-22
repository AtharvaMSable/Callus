export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors?: string[];
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
  description?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}
