import { useDataStore } from "@/store/useDataStore";
import { Button } from "../ui/button";
import { ArrowRight, ChevronUp, Edit2, ShoppingCart, X } from "lucide-react";
import { useStepStore } from "@/store/useStepStore";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useEffect, useState } from "react";

export const StepIndicator = () => {
  const { all_prices, total_prices, constructionData } = useDataStore();
  const { stepChange, currentStep, nextStep } = useStepStore();
  const [isMobile, setIsMobile] = useState(false);
  const handleRemoveItem = (brand: string) => {
    // Implement your remove logic here
    console.log("Remove item:", brand);
  };

  const handleProceed = () => {
    // Implement your proceed logic here
    console.log("Proceed to next step");
  };
  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Group items by category
  const groupedItems = all_prices.reduce((acc, price) => {
    const category = price.NAME || "Other"; // Use CATEGORY field or default to 'Other'
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(price);
    return acc;
  }, {});

  const MobileSheet = () => {
    return (
      <Sheet>
        <div className="w-full">
          <SheetTrigger className="w-full rounded-t-lg">
            <div className="bg-black w-full flex flex-col text-white px-2 py-4 rounded-t-lg  cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {all_prices.length} items added to cart
                    </span>
                  </div>
                </div>

                {/* <div className="flex items-center gap-2">
                <span className="text-sm">View Cart</span>
                <ChevronUp className="w-4 h-4" />
              </div> */}
              </div>
              <PropertyInfoCard
                build_up_area={constructionData?.total_build_up_area}
                location={constructionData?.location}
                no_of_floors={constructionData?.no_of_floors}
              />
            </div>
          </SheetTrigger>
          <div className="">
            {currentStep < 15 && (
              <button
                className="bg-white  text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                onClick={nextStep}
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {/* Right side - Proceed button */}
            {currentStep == 15 && (
              <div className="flex-shrink-0 ml-4">
                <Link
                  href={"/total-cost"}
                  className="bg-white absolute right-0 bottom-0 text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  Proceed
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
        <SheetContent
          side="bottom"
          className="w-[400px] h-[400px] bg-black text-white"
        >
          <SheetHeader>
            <SheetTitle className="flex justify-end items-center mt-10">
              <ShoppingCart className="w-3 h-3 text-white" />
              <div className="flex text-white flex-col">
                <span className="text-sm font-medium">
                  {all_prices.length} items added to cart
                </span>
              </div>
            </SheetTitle>
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {category === "Wall finishes"
                          ? "🧱"
                          : category === "Plumbing"
                          ? "🔧"
                          : "📦"}
                      </span>
                    </div>
                    <h3 className="text-white text-lg font-semibold">
                      {category}
                    </h3>
                  </div>

                  {/* Category Items */}
                  <div className="space-y-2">
                    {items?.map((price, index) => (
                      <div
                        key={`${price?.BRAND}-${index}`}
                        className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3 group hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {/* Item Icon */}
                          <div className="w-10 h-8 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">
                              {price?.BRAND?.slice(0, 1)}
                            </span>
                          </div>

                          {/* Item Details */}
                          <div className="flex flex-col">
                            <span className="text-gray-300 text-sm">
                              {price.NAME}
                            </span>
                            <span className="text-white font-semibold">
                              {price.BRAND || "up to ₹50/sqft."}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(price?.BRAND)}
                          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition-all p-1 rounded"
                          aria-label={`Remove ${price.NAME}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              {currentStep < 15 && (
                <button
                  className="bg-white  text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  onClick={nextStep}
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {/* Right side - Proceed button */}
              {currentStep == 15 && (
                <div className="flex-shrink-0 ml-4">
                  <Link
                    href={"/total-cost"}
                    className="bg-white absolute right-0 bottom-0 text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    Proceed
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  };
  const DesktopView = () => {
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

        {currentStep < 15 && (
          <button
            className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
            onClick={nextStep}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

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
  return isMobile ? <MobileSheet /> : <DesktopView />;
};

function PropertyInfoCard({ location, build_up_area, no_of_floors }) {
  return (
    <div className="  text-white mt-4 mx-3">
      <div className="flex justify-between items-start">
        <div className="space-y-1 space-x-3">
          {/* Header labels */}
          <div className="flex space-x-4 text-gray-400 text-sm">
            <span>Location</span>
            <span>built-up area</span>
            <span>Number of floors</span>
          </div>

          {/* Main content */}
          <div className="flex items-baseline justify-between space-x-4">
            <div className="text-white text-xs font-medium">{location}</div>
            <div className="text-white text-xs font-medium">
              {build_up_area}
              <span className="text-sm text-gray-400 ">Sq.ft.</span>
            </div>
            <div className="text-white text-xs font-medium">
              {no_of_floors}
              <span className="text-sm text-gray-400 ">
                (ground+ 1st floor)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
