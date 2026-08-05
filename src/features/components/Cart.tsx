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
      <div className="bg-background min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-card rounded-2xl shadow-md p-8 text-center border border-border">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircleIcon className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-extrabold text-foreground mb-2">Order Confirmed!</h2>
          <p className="text-sm text-muted-foreground mb-6">Thank you for your purchase. We are preparing your shipment.</p>
          
          <div className="bg-muted rounded-xl p-4 mb-6 border border-border">
            <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1">Order Number</p>
            <p className="text-lg font-mono font-bold text-primary">{orderNumber}</p>
          </div>

          <button
            onClick={handleCloseSuccess}
            className="w-full flex justify-center items-center px-6 py-3 rounded-xl shadow-md text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 cursor-pointer transition-all duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-foreground mb-8 tracking-tight">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-card rounded-2xl shadow-sm border border-border p-12 text-center max-w-xl mx-auto mt-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <ShoppingBagIcon className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground text-sm mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 bg-card rounded-2xl shadow-sm border border-border p-6 space-y-6">
              <ul className="divide-y divide-border">
                {cartItems.map((item: CartItem) => (
                  <li key={item.id} className="py-6 flex first:pt-0 last:pb-0">
                    <div className="flex-shrink-0 w-24 h-24 border border-border rounded-xl overflow-hidden bg-muted flex items-center justify-center relative">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                      ) : (
                        <span className="text-xs text-muted-foreground">No Image</span>
                      )}
                    </div>

                    <div className="ml-6 flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-bold text-foreground hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground uppercase font-semibold tracking-wider">{item.category}</p>
                        </div>
                        <p className="text-base font-bold text-foreground">{item.price}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm mt-4">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border-r border-border"
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-3 font-semibold text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border-l border-border"
                            aria-label="Increase quantity"
                          >
                            <PlusIcon className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-1.5 font-medium text-destructive hover:text-destructive/80 transition-colors px-2 py-1 rounded-md hover:bg-destructive/10"
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
            <div className="lg:col-span-4 bg-card rounded-2xl shadow-sm border border-border p-6 space-y-6">
              <h2 className="text-lg font-bold text-foreground border-b border-border pb-4">Order Summary</h2>
              
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-foreground">
                    {shippingCost === 0 ? (
                      <span className="text-green-600 font-bold">Free</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {shippingCost > 0 && (
                  <div className="bg-primary/10 text-primary p-3 rounded-lg text-xs font-medium">
                    Add <span className="font-bold">${(shippingThreshold - cartTotal).toFixed(2)}</span> more to unlock free shipping!
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-foreground">${estimatedTax.toFixed(2)}</span>
                </div>

                <div className="border-t border-border pt-4 flex justify-between text-base font-extrabold text-foreground">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full flex justify-center items-center px-6 py-3.5 rounded-xl shadow-md text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 cursor-pointer disabled:opacity-60 transition-all duration-200"
                >
                  {isCheckingOut ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </button>

                <div className="text-center text-xs text-muted-foreground">
                  <span>or </span>
                  <Link href="/" className="font-medium text-primary hover:underline transition-colors">
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
