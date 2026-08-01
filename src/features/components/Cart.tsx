"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart, CartItem } from '@/features/context/CartContext';
import { TrashIcon, PlusIcon, MinusIcon, ShoppingBagIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Shipping logic: Free for orders over $100, otherwise $9.99
  const shippingThreshold = 100;
  const shippingCost = cartTotal >= shippingThreshold || cartTotal === 0 ? 0 : 9.99;
  
  // Tax logic: 8% of cart total
  const estimatedTax = cartTotal * 0.08;
  
  // Order total
  const orderTotal = cartTotal + shippingCost + estimatedTax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate brief API call
    setTimeout(() => {
      const generatedOrderNum = 'MS-' + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(generatedOrderNum);
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
    }, 1200);
  };

  const handleCloseSuccess = () => {
    clearCart();
    setCheckoutSuccess(false);
  };

  if (checkoutSuccess) {
    return (
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 transform transition-all duration-300">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircleIcon className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-sm text-gray-500 mb-6">Thank you for your purchase. We are preparing your shipment.</p>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
            <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1">Order Number</p>
            <p className="text-lg font-mono font-bold text-indigo-600">{orderNumber}</p>
          </div>

          <button
            onClick={handleCloseSuccess}
            className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-all duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center max-w-xl mx-auto mt-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-50 mb-6">
              <ShoppingBagIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 text-sm mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
              <ul className="divide-y divide-gray-100">
                {cartItems.map((item: CartItem) => (
                  <li key={item.id} className="py-6 flex first:pt-0 last:pb-0">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-100 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center relative shadow-xs">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>

                    <div className="ml-6 flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500 uppercase font-semibold tracking-wider">{item.category}</p>
                        </div>
                        <p className="text-base font-bold text-gray-950">{item.price}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm mt-4">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors border-r border-gray-200"
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-3 font-semibold text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors border-l border-gray-200"
                            aria-label="Increase quantity"
                          >
                            <PlusIcon className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-1.5 font-medium text-red-600 hover:text-red-500 transition-colors px-2 py-1 rounded-md hover:bg-red-50"
                        >
                          <TrashIcon className="h-4 w-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
              <h2 className="text-lg font-bold text-gray-950 border-b pb-4">Order Summary</h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {shippingCost === 0 ? (
                      <span className="text-green-600 font-bold">Free</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {shippingCost > 0 && (
                  <div className="bg-indigo-50 text-indigo-700 p-3 rounded-lg text-xs font-medium">
                    Add <span className="font-bold">${(shippingThreshold - cartTotal).toFixed(2)}</span> more to unlock free shipping!
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-gray-900">${estimatedTax.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between text-base font-extrabold text-gray-950">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full flex justify-center items-center px-6 py-3.5 border border-transparent rounded-xl shadow-md text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer disabled:bg-indigo-400 transition-all duration-200"
                >
                  {isCheckingOut ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </button>

                <div className="text-center text-xs text-gray-500">
                  <span>or </span>
                  <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                    Continue Shopping <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
