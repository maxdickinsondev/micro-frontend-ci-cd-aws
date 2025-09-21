import { create } from "zustand";

// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useWishlistStore = create((set) => ({
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => ({ wishlist: [...state.wishlist, product] })),
}));

export const useCartStore = create((set) => ({
  products: [],
  addToCart: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}));
