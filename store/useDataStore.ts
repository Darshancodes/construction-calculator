import { create } from "zustand";

export const useDataStore = create((set, get) => ({
  all_prices: [],
  //   total_prices: 0,
  // Method to add a new price object
  addPrice: (newItem) =>
    set((state) => ({
      all_prices: [...state.all_prices, newItem],
    })),

  // Derive total_prices from all_prices
  get total_prices() {
    return this.all_prices.reduce((sum, item) => sum + item.AMOUNT, 0);
  },

  // Method to calculate and update the total prices
  calculateTotal: () =>
    set(() => {
      const { all_prices } = get();
      const total = all_prices.reduce((sum, item) => sum + item.AMOUNT, 0);
      return { total_prices: total };
    }),

  // Combined method that adds and then calculates total
  addAndCalculate: (newItem) =>
    set((state) => {
      const updatedPrices = [...state.all_prices, newItem];
      const total = updatedPrices.reduce((sum, item) => sum + item.AMOUNT, 0);
      return {
        all_prices: updatedPrices,
        total_prices: total,
      };
    }),
}));
