"use client"
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend service
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };
  
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">
            Stay updated with the latest trends, new arrivals, and exclusive offers.
          </p>
          
          {subscribed ? (
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="text-xl font-medium">Thank you for subscribing!</p>
              <p className="mt-2">You'll now receive our latest updates directly to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-md focus:outline-none flex-grow max-w-md text-dark"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
} 