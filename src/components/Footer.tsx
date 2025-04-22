import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StyleHub</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for modern fashion that defines your style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/men" className="text-gray-300 hover:text-primary">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link href="/products/women" className="text-gray-300 hover:text-primary">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-300 hover:text-primary">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-300 hover:text-primary">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-primary">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 