"use client"
import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            StyleHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/products/men" className="font-medium hover:text-primary">
              Men
            </Link>
            <Link href="/products/women" className="font-medium hover:text-primary">
              Women
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-primary">
              <FiSearch size={20} />
            </button>
            <Link href="/cart" className="p-2 hover:text-primary">
              <FiShoppingCart size={20} />
            </Link>
            <Link href="/account" className="p-2 hover:text-primary">
              <FiUser size={20} />
            </Link>
            <button 
              className="p-2 hover:text-primary md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/" className="block font-medium hover:text-primary py-2">
              Home
            </Link>
            <Link href="/products/men" className="block font-medium hover:text-primary py-2">
              Men
            </Link>
            <Link href="/products/women" className="block font-medium hover:text-primary py-2">
              Women
            </Link>
            <Link href="/about" className="block font-medium hover:text-primary py-2">
              About
            </Link>
            <Link href="/contact" className="block font-medium hover:text-primary py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
} 