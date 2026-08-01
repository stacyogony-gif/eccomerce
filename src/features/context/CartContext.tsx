"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/products';

export interface CartItem {
  id: number;
  name: string;
  price: number | string;
  image: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount (hydration safe)
  useEffect(() => {
    const savedCart = localStorage.getItem('maisy_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart items from localStorage", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes, but only after hydration
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('maisy_cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isHydrated]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Hydration guard: return 0 counts / empty array during SSR
  const cartCount = isHydrated ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  const cartTotal = isHydrated ? cartItems.reduce((total, item) => {
    const priceNum = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace('$', ''));
    return total + priceNum * item.quantity;
  }, 0) : 0;

  return (
    <CartContext.Provider value={{
      cartItems: isHydrated ? cartItems : [],
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
