import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="h-[600px] md:h-[700px] bg-[url('/images/hero.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Summer Collection 2024
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover the latest trends in fashion and express your unique style.
              </p>
              <div className="flex space-x-4">
                <Link href="/products/men" className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition">
                  Shop Men
                </Link>
                <Link href="/products/women" className="px-6 py-3 bg-white text-dark font-medium rounded-md hover:bg-opacity-90 transition">
                  Shop Women
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 