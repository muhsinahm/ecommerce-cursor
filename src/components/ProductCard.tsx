import Link from 'next/link';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  discountPercent?: number;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  rating, 
  isFeatured, 
  isNew, 
  isOnSale, 
  discountPercent 
}: ProductCardProps) {
  const originalPrice = isOnSale && discountPercent 
    ? (price / (1 - discountPercent / 100)).toFixed(2) 
    : null;

  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        {/* Image */}
        <Link href={`/product/${id}`}>
          <div 
            className="h-80 w-full bg-gray-100 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">
              NEW
            </span>
          )}
          {isOnSale && (
            <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
              SALE {discountPercent}%
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow-md hover:text-primary">
            <FiHeart size={18} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:text-primary">
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-4">
        <div className="text-sm text-gray-500">{category}</div>
        <Link href={`/product/${id}`} className="block">
          <h3 className="text-lg font-medium mt-1 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center">
            {isOnSale ? (
              <>
                <span className="text-primary font-semibold">${price.toFixed(2)}</span>
                <span className="ml-2 text-gray-400 line-through text-sm">
                  ${originalPrice}
                </span>
              </>
            ) : (
              <span className="font-semibold">${price.toFixed(2)}</span>
            )}
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 