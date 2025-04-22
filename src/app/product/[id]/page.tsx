import { Metadata } from 'next';
import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiShare2 } from 'react-icons/fi';
import { getProductById, getProductsByGender } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductById(parseInt(params.id, 10));
  
  if (!product) {
    return {
      title: 'Product Not Found | StyleHub',
    };
  }
  
  return {
    title: `${product.name} | StyleHub`,
    description: product.description,
  };
}

export default function ProductPage({ params }: PageProps) {
  const productId = parseInt(params.id, 10);
  const product = getProductById(productId);
  
  if (!product) {
    notFound();
  }
  
  // Get related products from the same gender category
  const relatedProducts = product.gender 
    ? getProductsByGender(product.gender).filter(p => p.id !== product.id).slice(0, 4)
    : [];
  
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link>
          <span>/</span>
          {product.gender && (
            <>
              <Link href={`/products/${product.gender}`}>
                {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="font-medium text-dark">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div>
            <div 
              className="h-[500px] w-full bg-gray-100 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="text-xl font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
              {product.isOnSale && product.discountPercent && (
                <span className="ml-2 text-gray-400 line-through text-base">
                  ${(product.price / (1 - product.discountPercent / 100)).toFixed(2)}
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Options */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="border border-gray-300 px-3 py-1 rounded hover:border-primary"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 w-12 h-12 rounded-full flex items-center justify-center hover:border-primary"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Add to Cart */}
            <div className="flex gap-4">
              <button className="flex-grow bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2">
                <FiShoppingCart />
                Add to Cart
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:text-primary transition">
                <FiHeart size={20} />
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:text-primary transition">
                <FiShare2 size={20} />
              </button>
            </div>
            
            {/* Product Meta */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Category</h3>
                  <p>{product.category}</p>
                </div>
                {product.subCategory && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Type</h3>
                    <p>{product.subCategory}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  image={relatedProduct.image}
                  category={relatedProduct.category}
                  rating={relatedProduct.rating}
                  isFeatured={relatedProduct.isFeatured}
                  isNew={relatedProduct.isNew}
                  isOnSale={relatedProduct.isOnSale}
                  discountPercent={relatedProduct.discountPercent}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 