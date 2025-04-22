import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 