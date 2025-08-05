import { create } from "zustand";

// Base interfaces
export interface PriceItem {
  NAME: string;
  AMOUNT: number;
  BRAND: string;
}

export interface ConstructionData {
  ground_floor_area: number;
  no_of_floors: number;
  readonly total_build_up_area: number;
}

// Calculation parameter types for different categories
export interface BaseCalculationParams {
  type: string;
  name: string;
  originalAmount?: number;
}

export interface UnitRateParams extends BaseCalculationParams {
  type:
    | "BRICKS"
    | "CEMENT"
    | "RMC"
    | "PCC"
    | "SAND"
    | "STEEL"
    | "STONE"
    | "STAIR-HANDRAIL"
    | "BALCONY-HANDRAIL";
  per_unit_rate: number;
  standard_quantity: number;
}

export interface SqftRateParams extends BaseCalculationParams {
  type: "WATER-PROOFING" | "TERMITE-SOLUTION";
  per_sqft_rate: number;
  standard_quantity: number;
}

export interface BuildUpAreaRateParams extends BaseCalculationParams {
  type:
    | "DOOR-SHUTTER"
    | "DOOR-FRAME-SINGLE-REBATE-ELS0100"
    | "ELECTRICAL-SLAB-AND-WALL-MATERIAL"
    | "WIRES-AND-CABLES-EWC0100-FLAT"
    | "SHEET-AND-SWITCHES-EWC0100-FLAT"
    | "VETRIFIED-TILES"
    | "WINDOW-MATERIAL"
    | "PLUMBING-PVC-INTERNAL-AND-EXTERNAL"
    | "PLUMBING-CPVC-INTERNAL-AND-EXTERNAL";
  per_sqft_rate: number;
}

export interface MultipliedSqftRateParams extends BaseCalculationParams {
  type:
    | "CERAMIC-WALL-TILE-TOILED-AND-KITCHEN"
    | "GRANITE-DOOR_FRAME-WINDOW_FRAME-KITCHEN_TOP-STAIRCASE"
    | "ROUGH-STONE-TERRACE-AND-PARKING-AREA"
    | "WALL-FINISH-POP-FALSE-CEILING"
    | "WALL-FINISH-POP-IN-WALLS"
    | "WALL-FINISH-INTERNAL-WALL-PAINT";
  per_sqft_rate: number;
  standard_quantity: number;
}

export interface FixedAmountParams extends BaseCalculationParams {
  type: "MAIN-DOOR" | "KITCHEN" | "WATER-TANK";
  amount: number;
}

export type CalculationParams =
  | UnitRateParams
  | SqftRateParams
  | BuildUpAreaRateParams
  | MultipliedSqftRateParams
  | FixedAmountParams;

// Main store interface
export interface DataStore {
  // Data arrays and objects
  all_prices: PriceItem[];
  inclusion_settings: Record<string, boolean>;
  constructionData: ConstructionData;
  calculationMetadata: Map<string, CalculationParams>;

  // Cost constants
  MISCELLANEOUS_COST_PERCENT: number;
  LABOUR_COST_PER_SQFT: number;
  MANAGEMENT_COST_PER_SQFT: number;

  // Calculated values
  readonly total_prices: number;
  miscellaneous_cost: number;
  labour_cost: number;
  management_cost: number;
  total_final_cost: number;

  // Methods
  addPrice: (newItem: PriceItem) => void;
  addAndCalculate: (
    newItem: PriceItem,
    calculationParams?: CalculationParams
  ) => void;
  setInclusion: (categoryName: string, include: boolean) => void;
  removePriceByName: (categoryName: string) => void;
  calculateTotal: () => void;
  recalculateAllPrices: () => void;
  updateConstructionData: (data: Partial<ConstructionData>) => void;
}

// Type for the Zustand create function
export type DataStoreCreator = (
  set: (fn: (state: DataStore) => Partial<DataStore>) => void,
  get: () => DataStore
) => DataStore;

// Enhanced Data store implementation with auto-recalculation
export const useDataStore = create<DataStore>((set, get) => ({
  all_prices: [],
  // Construction data
  inclusion_settings: {},
  constructionData: {
    ground_floor_area: 2000,
    no_of_floors: 5,
    // This will be calculated automatically
    get total_build_up_area(): number {
      return this.ground_floor_area * this.no_of_floors;
    },
  },
  // Cost constants
  MISCELLANEOUS_COST_PERCENT: 5,
  LABOUR_COST_PER_SQFT: 290,
  MANAGEMENT_COST_PER_SQFT: 249,

  // Store calculation metadata for each price item
  calculationMetadata: new Map(),

  // Method to add a new price object with metadata
  addPrice: (newItem: PriceItem) =>
    set((state) => ({
      all_prices: [...state.all_prices, newItem],
    })),

  // Enhanced method to store calculation parameters
  addAndCalculate: (newItem: PriceItem, calculationParams?: any) =>
    set((state) => {
      // Check if an item with the same NAME already exists
      const existingItemIndex = state.all_prices.findIndex(
        (item) => item.NAME === newItem.NAME
      );

      let updatedPrices;
      const newMetadata = new Map(state.calculationMetadata);

      if (existingItemIndex >= 0) {
        // If exists, replace it with the new item
        updatedPrices = [...state.all_prices];
        updatedPrices[existingItemIndex] = newItem;
      } else {
        // If doesn't exist, add the new item
        updatedPrices = [...state.all_prices, newItem];
      }

      // Store calculation parameters if provided
      if (calculationParams) {
        newMetadata.set(newItem.NAME, calculationParams);
      }

      const total = updatedPrices.reduce((sum, item) => sum + item.AMOUNT, 0);

      const buildUpArea = get().constructionData.total_build_up_area;
      const miscPercent = get().MISCELLANEOUS_COST_PERCENT;
      const labourRate = get().LABOUR_COST_PER_SQFT;
      const managementRate = get().MANAGEMENT_COST_PER_SQFT;

      const miscellaneous = (miscPercent / 100) * total;
      const labour = buildUpArea * labourRate;
      const management = buildUpArea * managementRate;
      const final = total + miscellaneous + labour + management;

      return {
        all_prices: updatedPrices,
        calculationMetadata: newMetadata,
        total_prices: total,
        miscellaneous_cost: miscellaneous,
        labour_cost: labour,
        management_cost: management,
        total_final_cost: final,
      };
    }),

  // Method to set inclusion/exclusion for a category
  setInclusion: (categoryName: string, include: boolean) =>
    set((state) => {
      const newInclusionSettings = {
        ...state.inclusion_settings,
        [categoryName]: include,
      };

      // If setting to false (exclude), remove the item from all_prices
      let updatedPrices = state.all_prices;
      const newMetadata = new Map(state.calculationMetadata);

      if (!include) {
        updatedPrices = state.all_prices.filter(
          (item) => item.NAME !== categoryName
        );
        newMetadata.delete(categoryName);
      }

      // Recalculate totals
      const total = updatedPrices.reduce((sum, item) => sum + item.AMOUNT, 0);
      const buildUpArea = get().constructionData.total_build_up_area;
      const miscPercent = get().MISCELLANEOUS_COST_PERCENT;
      const labourRate = get().LABOUR_COST_PER_SQFT;
      const managementRate = get().MANAGEMENT_COST_PER_SQFT;

      const miscellaneous = (miscPercent / 100) * total;
      const labour = buildUpArea * labourRate;
      const management = buildUpArea * managementRate;
      const final = total + miscellaneous + labour + management;

      return {
        inclusion_settings: newInclusionSettings,
        all_prices: updatedPrices,
        calculationMetadata: newMetadata,
        total_prices: total,
        miscellaneous_cost: miscellaneous,
        labour_cost: labour,
        management_cost: management,
        total_final_cost: final,
      };
    }),

  removePriceByName: (categoryName: string) =>
    set((state) => {
      const updatedPrices = state.all_prices.filter(
        (item) => item.NAME !== categoryName
      );

      const newMetadata = new Map(state.calculationMetadata);
      newMetadata.delete(categoryName);

      const total = updatedPrices.reduce((sum, item) => sum + item.AMOUNT, 0);
      const buildUpArea = get().constructionData.total_build_up_area;
      const miscPercent = get().MISCELLANEOUS_COST_PERCENT;
      const labourRate = get().LABOUR_COST_PER_SQFT;
      const managementRate = get().MANAGEMENT_COST_PER_SQFT;

      const miscellaneous = (miscPercent / 100) * total;
      const labour = buildUpArea * labourRate;
      const management = buildUpArea * managementRate;
      const final = total + miscellaneous + labour + management;

      return {
        all_prices: updatedPrices,
        calculationMetadata: newMetadata,
        total_prices: total,
        miscellaneous_cost: miscellaneous,
        labour_cost: labour,
        management_cost: management,
        total_final_cost: final,
      };
    }),

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

  // NEW: Method to recalculate all prices based on stored metadata
  recalculateAllPrices: () => {
    const state = get();
    const { calculationMetadata, constructionData } = state;
    const { total_build_up_area, ground_floor_area, no_of_floors } =
      constructionData;

    const updatedPrices: PriceItem[] = [];

    // Iterate through all stored calculation metadata and recalculate
    calculationMetadata.forEach((params, categoryName) => {
      const {
        type,
        name,
        per_unit_rate,
        per_sqft_rate,
        standard_quantity,
        amount,
      } = params;

      let calculatedAmount = 0;

      switch (type) {
        case "BRICKS":
        case "CEMENT":
        case "RMC":
        case "PCC":
        case "SAND":
        case "STEEL":
        case "STONE":
          calculatedAmount =
            standard_quantity * total_build_up_area * per_unit_rate;
          break;

        case "WATER-PROOFING":
        case "TERMITE-SOLUTION":
          calculatedAmount =
            standard_quantity * ground_floor_area * per_sqft_rate;
          break;

        case "DOOR-SHUTTER":
        case "DOOR-FRAME-SINGLE-REBATE-ELS0100":
        case "ELECTRICAL-SLAB-AND-WALL-MATERIAL":
        case "WIRES-AND-CABLES-EWC0100-FLAT":
        case "SHEET-AND-SWITCHES-EWC0100-FLAT":
        case "VETRIFIED-TILES":
        case "WINDOW-MATERIAL":
        case "PLUMBING-PVC-INTERNAL-AND-EXTERNAL":
        case "PLUMBING-CPVC-INTERNAL-AND-EXTERNAL":
          calculatedAmount = total_build_up_area * per_sqft_rate;
          break;

        case "CERAMIC-WALL-TILE-TOILED-AND-KITCHEN":
        case "GRANITE-DOOR_FRAME-WINDOW_FRAME-KITCHEN_TOP-STAIRCASE":
        case "ROUGH-STONE-TERRACE-AND-PARKING-AREA":
        case "WALL-FINISH-POP-FALSE-CEILING":
        case "WALL-FINISH-POP-IN-WALLS":
        case "WALL-FINISH-INTERNAL-WALL-PAINT":
          calculatedAmount =
            total_build_up_area * standard_quantity * per_sqft_rate;
          break;

        case "STAIR-HANDRAIL":
        case "BALCONY-HANDRAIL":
          calculatedAmount = standard_quantity * no_of_floors * per_unit_rate;
          break;

        case "MAIN-DOOR":
        case "KITCHEN":
        case "WATER-TANK":
          calculatedAmount = amount; // Fixed amounts
          break;

        default:
          calculatedAmount = params.originalAmount || 0;
      }

      updatedPrices.push({
        NAME: categoryName,
        AMOUNT: calculatedAmount,
        BRAND: name,
      });
    });

    // Update the store with recalculated prices
    set((state) => {
      const total = updatedPrices.reduce((sum, item) => sum + item.AMOUNT, 0);
      const buildUpArea = total_build_up_area;
      const miscPercent = state.MISCELLANEOUS_COST_PERCENT;
      const labourRate = state.LABOUR_COST_PER_SQFT;
      const managementRate = state.MANAGEMENT_COST_PER_SQFT;

      const miscellaneous = (miscPercent / 100) * total;
      const labour = buildUpArea * labourRate;
      const management = buildUpArea * managementRate;
      const final = total + miscellaneous + labour + management;

      return {
        all_prices: updatedPrices,
        total_prices: total,
        miscellaneous_cost: miscellaneous,
        labour_cost: labour,
        management_cost: management,
        total_final_cost: final,
      };
    });
  },

  // Enhanced method to update construction data and trigger recalculation
  updateConstructionData: (data: Partial<ConstructionData>) =>
    set((state) => {
      const newConstructionData = {
        ...state.constructionData,
        ...data,
        total_build_up_area:
          (data.ground_floor_area || state.constructionData.ground_floor_area) *
          (data.no_of_floors || state.constructionData.no_of_floors),
      };

      // Update construction data first
      const updatedState = {
        ...state,
        constructionData: newConstructionData,
      };

      // Trigger recalculation after state update
      setTimeout(() => {
        get().recalculateAllPrices();
      }, 0);

      return {
        constructionData: newConstructionData,
      };
    }),

  // Initial values for computed fields
  miscellaneous_cost: 0,
  labour_cost: 0,
  management_cost: 0,
  total_final_cost: 0,
}));

// Optional: Export types for use in components
export type {
  PriceItem,
  ConstructionData,
  DataStore,
  DataStoreState,
  DataStoreActions,
};
