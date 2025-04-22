import Link from 'next/link';
import { FiArrowLeft, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';

export default function CartPage() {
  // In a real application, this would fetch cart data from context/API
  const cartItems = [
    {
      id: 1,
      name: "Classic Fit Denim Jacket",
      price: 89.99,
      image: "/images/products/men-jacket-1.jpg",
      quantity: 1,
      size: "M",
      color: "Blue"
    },
    {
      id: 9,
      name: "Floral Print Midi Dress",
      price: 89.99,
      image: "/images/products/women-dress-1.jpg",
      quantity: 2,
      size: "S",
      color: "Floral Print"
    }
  ];
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10.00;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;
  
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {/* Cart Items */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`flex flex-col sm:flex-row gap-6 p-6 ${
                      index < cartItems.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    {/* Product Image */}
                    <div 
                      className="w-full sm:w-24 h-24 bg-gray-100 rounded-md bg-cover bg-center flex-shrink-0"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    
                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div>
                          <h3 className="font-medium">
                            <Link href={`/product/${item.id}`} className="hover:text-primary transition">
                              {item.name}
                            </Link>
                          </h3>
                          <div className="text-sm text-gray-500 mt-1">
                            <span>Size: {item.size}</span>
                            <span className="mx-2">|</span>
                            <span>Color: {item.color}</span>
                          </div>
                        </div>
                        <div className="text-lg font-medium mt-2 sm:mt-0">${item.price.toFixed(2)}</div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button className="w-10 h-10 flex items-center justify-center border-r border-gray-300 text-gray-600 hover:text-primary transition">
                            <FiMinus size={16} />
                          </button>
                          <div className="w-12 h-10 flex items-center justify-center text-center">
                            {item.quantity}
                          </div>
                          <button className="w-10 h-10 flex items-center justify-center border-l border-gray-300 text-gray-600 hover:text-primary transition">
                            <FiPlus size={16} />
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button className="text-gray-500 hover:text-red-500 transition flex items-center gap-1">
                          <FiTrash2 size={16} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Continue Shopping */}
              <Link href="/products/men" className="flex items-center gap-2 text-primary font-medium">
                <FiArrowLeft size={16} />
                <span>Continue Shopping</span>
              </Link>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition">
                  Proceed to Checkout
                </button>
                
                <div className="mt-6 text-sm text-gray-500 text-center">
                  <p>We accept all major credit cards and PayPal</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 max-w-lg mx-auto">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link href="/" className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 