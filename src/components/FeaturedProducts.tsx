import ProductCard from './ProductCard';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the season's most stylish and sought-after pieces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
              isFeatured={product.isFeatured}
              isNew={product.isNew}
              isOnSale={product.isOnSale}
              discountPercent={product.discountPercent}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 