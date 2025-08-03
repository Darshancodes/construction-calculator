import { create } from "zustand";

// Price item interface
interface PriceItem {
  NAME: string;
  AMOUNT: number;
  BRAND: string;
  // Add other properties as needed based on your price items
  // id?: string;
  // name?: string;
  // category?: string;
}

// Construction data interface
interface ConstructionData {
  ground_floor_area: number;
  no_of_floors: number;
  readonly total_build_up_area: number;
}

// Data store state interface
interface DataStoreState {
  all_prices: PriceItem[];
  constructionData: ConstructionData;
  readonly total_prices: number;
}

// Data store actions interface
interface DataStoreActions {
  addPrice: (newItem: PriceItem) => void;
  calculateTotal: () => void;
  addAndCalculate: (newItem: PriceItem) => void;
}

// Combined data store type
type DataStore = DataStoreState & DataStoreActions;

// Data store implementation
export const useDataStore = create<DataStore>((set, get) => ({
  all_prices: [],
  // Construction data
  constructionData: {
    ground_floor_area: 2000,
    no_of_floors: 5,
    // This will be calculated automatically
    get total_build_up_area(): number {
      return this.ground_floor_area * this.no_of_floors;
    },
  },

  // Method to add a new price object
  addPrice: (newItem: PriceItem) =>
    set((state) => ({
      all_prices: [...state.all_prices, newItem],
    })),

  // Derive total_prices from all_prices
  get total_prices(): number {
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
  addAndCalculate: (newItem: PriceItem) =>
    set((state) => {
      // Check if an item with the same NAME already exists
      const existingItemIndex = state.all_prices.findIndex(
        (item) => item.NAME === newItem.NAME
      );

      let updatedPrices;

      if (existingItemIndex >= 0) {
        // If exists, replace it with the new item
        updatedPrices = [...state.all_prices];
        updatedPrices[existingItemIndex] = newItem;
      } else {
        // If doesn't exist, add the new item
        updatedPrices = [...state.all_prices, newItem];
      }

      const total = updatedPrices.reduce((sum, item) => sum + item.AMOUNT, 0);

      return {
        all_prices: updatedPrices,
        total_prices: total,
      };
    }),
}));

// Optional: Export types for use in components
export type {
  PriceItem,
  ConstructionData,
  DataStore,
  DataStoreState,
  DataStoreActions,
};

// export const useDataStore = create((set, get) => ({
//   all_prices: [],
//   // Construction data
//   constructionData: {
//     ground_floor_area: 2000,
//     no_of_floors: 5,
//     // This will be calculated automatically
//     get total_build_up_area() {
//       return this.ground_floor_area * this.no_of_floors;
//     },
//   },
//   // Method to add a new price object
//   addPrice: (newItem) =>
//     set((state) => ({
//       all_prices: [...state.all_prices, newItem],
//     })),

//   // Derive total_prices from all_prices
//   get total_prices() {
//     return this.all_prices.reduce((sum, item) => sum + item.AMOUNT, 0);
//   },

//   // Method to calculate and update the total prices
//   calculateTotal: () =>
//     set(() => {
//       const { all_prices } = get();
//       const total = all_prices.reduce((sum, item) => sum + item.AMOUNT, 0);
//       return { total_prices: total };
//     }),

//   // Combined method that adds and then calculates total
//   addAndCalculate: (newItem) =>
//     set((state) => {
//       const updatedPrices = [...state.all_prices, newItem];
//       const total = updatedPrices.reduce((sum, item) => sum + item.AMOUNT, 0);
//       return {
//         all_prices: updatedPrices,
//         total_prices: total,
//       };
//     }),
// }));
