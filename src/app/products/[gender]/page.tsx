import { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByGender } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    gender: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const gender = params.gender;
  const formattedGender = gender.charAt(0).toUpperCase() + gender.slice(1);
  
  return {
    title: `${formattedGender}'s Collection | StyleHub`,
    description: `Explore our ${formattedGender.toLowerCase()}'s collection featuring the latest fashion trends and styles.`,
  };
}

export default function GenderProductsPage({ params }: PageProps) {
  const gender = params.gender as 'men' | 'women';
  
  // Validate gender parameter
  if (gender !== 'men' && gender !== 'women') {
    notFound();
  }
  
  const products = getProductsByGender(gender);
  const formattedGender = gender.charAt(0).toUpperCase() + gender.slice(1);
  
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="font-medium text-dark">{formattedGender}'s Collection</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{formattedGender}'s Collection</h1>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
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
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
} 