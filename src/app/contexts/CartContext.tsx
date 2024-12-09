"use client"
import { createContext, useState, useContext, ReactNode } from 'react';

// Define the structure of the CartItem
interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

// Define the structure of the CartContext
interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// CartProvider component to provide cart data and functions
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize cartItems from localStorage or empty array
  const [cartItems, setCartItems] = useState<CartItem[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

  // Add item to cart
  const addItemToCart = (newItem: CartItem) => {
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Remove item from cart
  const removeItemFromCart = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart); // Update state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
