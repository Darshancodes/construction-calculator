import { PriceItem } from "@/types/types";

// Helper function to get stored brand by category name
export const getStoredBrand = (
  categoryName: string,
  all_prices: PriceItem[]
) => {
  const storedItem = all_prices.find((item) => item.NAME === categoryName);
  return storedItem ? storedItem.BRAND : "";
};
