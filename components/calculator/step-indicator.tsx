import { useDataStore } from "@/store/useDataStore";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, X } from "lucide-react";
import { useStepStore } from "@/store/useStepStore";
import Link from "next/link";

export const StepIndicator = () => {
  const { all_prices, total_prices } = useDataStore();
  const { stepChange, currentStep } = useStepStore();

  const handleRemoveItem = (brand: string) => {
    // Implement your remove logic here
    console.log("Remove item:", brand);
  };

  const handleProceed = () => {
    // Implement your proceed logic here
    console.log("Proceed to next step");
  };
  return (
    <div className="bg-black text-white px-4 py-3 flex items-center justify-between min-h-[60px] w-full mt-6">
      {/* Left side - Cart icon and items */}
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        <div className="flex items-center gap-2 text-sm">
          <ShoppingCart className="w-4 h-4" />
          <span>Added to cart</span>
        </div>

        {/* Scrollable items container */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
          {all_prices.map((price, index) => (
            <div
              key={`${price?.BRAND}-${index}`}
              className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1.5 text-sm whitespace-nowrap flex-shrink-0"
            >
              <span className="text-white">{price.BRAND}</span>
              <button
                onClick={() => handleRemoveItem(price?.BRAND)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Remove ${price.NAME}`}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Proceed button */}
      {currentStep == 15 && (
        <div className="flex-shrink-0 ml-4">
          <Link
            href={"/total-cost"}
            className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
          >
            Proceed
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};
