export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  subCategory: string;
  gender?: 'men' | 'women' | 'unisex';
  rating: number;
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  discountPercent?: number;
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  // Men's Products
  {
    id: 1,
    name: "Classic Fit Denim Jacket",
    price: 89.99,
    image: "/images/products/men/portrait-sexy-handsome-fashion-businessman-model-dressed-elegant-suit-posing-street-background-metrosexual.jpg",
    category: "Outerwear",
    subCategory: "Jackets",
    gender: "men",
    rating: 4.5,
    description: "A timeless denim jacket crafted from premium quality cotton. Features a classic fit with button closure and multiple pockets.",
    isFeatured: true,
    isNew: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Light Blue", "Black"]
  },
  {
    id: 2,
    name: "Slim Fit Chino Pants",
    price: 59.99,
    image: "/images/products/men/young-handsome-hipster-man-standing.jpg",
    category: "Bottoms",
    subCategory: "Pants",
    gender: "men",
    rating: 4.2,
    description: "Modern slim fit chinos made from stretch cotton for comfort and style. Perfect for both casual and semi-formal occasions.",
    isFeatured: true,
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive", "Black"]
  },
  {
    id: 3,
    name: "Casual Cotton T-Shirt",
    price: 24.99,
    image: "/images/products/men/young-man-model-posing-street.jpg",
    category: "Tops",
    subCategory: "T-Shirts",
    gender: "men",
    rating: 4.0,
    description: "Soft and comfortable cotton t-shirt with a classic crew neck. Essential casual wear for everyday style.",
    isOnSale: true,
    discountPercent: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray", "Navy", "Green"]
  },
  {
    id: 4,
    name: "Oxford Button-Down Shirt",
    price: 69.99,
    image: "/images/products/men/portrait-handsome-smiling-stylish-young-man.jpg",
    category: "Tops",
    subCategory: "Shirts",
    gender: "men",
    rating: 4.7,
    description: "Classic Oxford button-down shirt made from premium cotton fabric. Perfect for a sharp business casual look.",
    isFeatured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink", "Gray"]
  },
  {
    id: 5,
    name: "Premium Wool Blend Sweater",
    price: 79.99,
    image: "/images/products/men/thinking-businessman-fashion-studio-clothes-trendy-smart-casual-work-male-model-jacket-idea-outfit-elegance-confidence-luxury-apparel-by-gray-background_590464-413823.avif",
    category: "Tops",
    subCategory: "Sweaters",
    gender: "men",
    rating: 4.3,
    description: "Luxurious wool blend sweater with ribbed cuffs and hem. Provides excellent warmth and comfort during colder months.",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Burgundy", "Charcoal", "Cream"]
  },
  {
    id: 6,
    name: "Athletic Performance Sneakers",
    price: 119.99,
    image: "/images/products/men/fashionable-man-front-blue-wall.jpg",
    category: "Footwear",
    subCategory: "Sneakers",
    gender: "men",
    rating: 4.8,
    description: "Performance sneakers designed for maximum comfort and support. Features responsive cushioning and breathable mesh uppers.",
    isFeatured: true,
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    colors: ["Black/White", "Gray/Blue", "All Black"]
  },
  
  // Women's Products
  {
    id: 7,
    name: "Tailored Blazer",
    price: 129.99,
    image: "/images/products/women/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag.jpg",
    category: "Outerwear",
    subCategory: "Blazers",
    gender: "women",
    rating: 4.6,
    description: "Sophisticated tailored blazer with a modern silhouette. Perfect for elevating any professional or casual outfit.",
    isFeatured: true,
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Beige"]
  },
  {
    id: 8,
    name: "High-Waisted Skinny Jeans",
    price: 69.99,
    image: "/images/products/women/de14738ec8efce7f76b566dd8c6d5546.jpg",
    category: "Bottoms",
    subCategory: "Jeans",
    gender: "women",
    rating: 4.4,
    description: "Flattering high-waisted skinny jeans with stretch denim for maximum comfort and movement.",
    isFeatured: true,
    sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
    colors: ["Dark Blue", "Black", "Light Blue", "Gray"]
  },
  {
    id: 9,
    name: "Floral Print Midi Dress",
    price: 89.99,
    image: "/images/products/women/young-woman-beautiful-dress-hat.jpg",
    category: "Dresses",
    subCategory: "Midi Dresses",
    gender: "women",
    rating: 4.7,
    description: "Elegant floral print midi dress with a flattering silhouette. Perfect for both casual outings and special occasions.",
    isOnSale: true,
    discountPercent: 15,
    isFeatured: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Print"]
  },
  {
    id: 10,
    name: "Silk Button-Up Blouse",
    price: 79.99,
    image: "/images/products/women/istockphoto-1388261858-612x612.webp",
    category: "Tops",
    subCategory: "Blouses",
    gender: "women",
    rating: 4.5,
    description: "Luxurious silk blouse with a relaxed fit and classic button-up design. Elevates any outfit with elegant simplicity.",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Ivory", "Blush"]
  },
  {
    id: 11,
    name: "A-Line Midi Skirt",
    price: 59.99,
    image: "/images/products/women/lethicia-matos-BxBW-OyjaiA-unsplash.jpg",
    category: "Bottoms",
    subCategory: "Skirts",
    gender: "women",
    rating: 4.2,
    description: "Classic A-line midi skirt with a flattering silhouette. Versatile piece that transitions easily from office to evening.",
    isFeatured: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Beige", "Burgundy"]
  },
  {
    id: 12,
    name: "Block Heel Ankle Boots",
    price: 99.99,
    image: "/images/products/women/the-aw-creative-digital-marketing-vj-_S20w04o-unsplash.jpg",
    category: "Footwear",
    subCategory: "Boots",
    gender: "women",
    rating: 4.6,
    description: "Stylish ankle boots with comfortable block heels and side zippers. Perfect for all-day wear and versatile styling.",
    isOnSale: true,
    discountPercent: 10,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Brown", "Tan"]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.isOnSale);
};

export const getProductsByGender = (gender: 'men' | 'women' | 'unisex'): Product[] => {
  return products.filter(product => product.gender === gender);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
}; 