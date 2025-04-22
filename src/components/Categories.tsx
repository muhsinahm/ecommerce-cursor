import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Men\'s Collection',
      image: '/images/men-category.jpg',
      url: '/products/men',
    },
    {
      id: 2,
      name: 'Women\'s Collection',
      image: '/images/women-category.jpg',
      url: '/products/women',
    },
    {
      id: 3,
      name: 'Accessories',
      image: '/images/accessories-category.jpg',
      url: '/products/accessories',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.url}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg h-80">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 