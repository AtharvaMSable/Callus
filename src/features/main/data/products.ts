import type { Product, ProductCategory } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Business Suit',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    colors: ['#2C2C2C', '#000000', '#4A4A4A'],
    description: 'Premium wool business suit for professional settings',
    isNew: true
  },
  {
    id: '2',
    name: 'Smart Casual Blazer',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    colors: ['#4169E1', '#2F4F4F', '#708090'],
    description: 'Versatile blazer perfect for business casual events',
    discount: 15
  },
  {
    id: '3',
    name: 'Crisp White Dress Shirt',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    colors: ['#FFFFFF', '#F8F8FF', '#F0F8FF'],
    description: 'Essential white dress shirt with impeccable tailoring'
  },
  {
    id: '4',
    name: 'Executive Pencil Skirt',
    price: 165000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    colors: ['#000000', '#2F2F2F', '#708090'],
    description: 'Professional pencil skirt for executive wardrobe',
    discount: 20
  },
  {
    id: '5',
    name: 'Silk Blouse Collection',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    colors: ['#F5DEB3', '#FFF8DC', '#FFFFFF'],
    description: 'Elegant silk blouse for sophisticated office looks',
    isNew: true
  },
  {
    id: '6',
    name: 'Premium Leather Belt',
    price: 89000,
    image: 'https://images.unsplash.com/photo-1609587312208-cea54be969f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    colors: ['#8B4513', '#000000', '#654321'],
    description: 'Genuine leather belt for professional attire'
  },
  {
    id: '7',
    name: 'Corporate Polo Shirt',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    colors: ['#FFFFFF', '#000080', '#FF0000'],
    description: 'High-quality polo shirt perfect for business casual',
    discount: 10
  },
  {
    id: '8',
    name: 'Professional Dress Pants',
    price: 135000,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    colors: ['#2F2F2F', '#000000', '#4A4A4A'],
    description: 'Tailored dress pants for professional settings',
    isNew: true
  },
  {
    id: '9',
    name: 'Executive Blazer',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    colors: ['#2F2F2F', '#000080', '#4A4A4A'],
    description: 'Sophisticated blazer for executive presence'
  },
  {
    id: '10',
    name: 'Work Dress Collection',
    price: 195000,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcacf30dea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    colors: ['#000080', '#000000', '#708090'],
    description: 'Professional dress perfect for office environment',
    discount: 25
  },
  {
    id: '11',
    name: 'Classic Dress Shoes',
    price: 245000,
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    colors: ['#000000', '#8B4513', '#2F2F2F'],
    description: 'Handcrafted leather shoes for professional wear',
    isNew: true
  },
  {
    id: '12',
    name: 'Professional Handbag',
    price: 285000,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    colors: ['#000000', '#8B4513', '#2F2F2F'],
    description: 'Elegant handbag for business professionals'
  }
];

export const productCategories: ProductCategory[] = [
  {
    id: '1',
    name: 'Professional Suits',
    description: 'Complete business suits for executive presence',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Business Casual',
    description: 'Smart casual wear for modern workplaces',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Executive Women\'s Wear',
    description: 'Sophisticated attire for professional women',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Professional Accessories',
    description: 'Complete your professional look',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
