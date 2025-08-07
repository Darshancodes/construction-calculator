import { useDataStore } from "@/store/useDataStore";
import { Button } from "../ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Edit2,
  ShoppingCart,
  X,
} from "lucide-react";
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
import { useEffect, useRef, useState } from "react";

export const StepIndicator = () => {
  const scrollRef = useRef(null);
  const { all_prices, total_prices, constructionData, removePriceByName } =
    useDataStore();
  const { stepChange, currentStep, nextStep } = useStepStore();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleRemoveItem = (brand: string) => {
    // Implement your remove logic here
    console.log("Remove item:", brand);
    removePriceByName(brand);
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

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);

      return () => {
        scrollElement.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [all_prices]);

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
        <div className="w-full fixed mt-20 left-0 right-0 z-50 rounded-t-lg bg-black text-white px-2 py-4 cursor-pointer bottom-0">
          <SheetTrigger className="w-full">
            <div className="w-full">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  {all_prices?.length > 0 ? (
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {all_prices.length} items added to cart
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-medium">
                      add items to cart
                    </span>
                  )}
                  <img src={"/icons/arrow-drop-up.svg"} />
                </div>

                <div
                  className="flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {currentStep < 15 ? (
                    <div
                      className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 cursor-pointer"
                      onClick={nextStep}
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <Link
                      href="/total-cost"
                      className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Proceed
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              <PropertyInfoCard
                build_up_area={constructionData?.total_build_up_area}
                location={constructionData?.location}
                no_of_floors={constructionData?.no_of_floors}
              />
            </div>
          </SheetTrigger>
        </div>
        <SheetContent side="bottom" className="w-full bg-black  text-white">
          <SheetHeader>
            <div className="flex justify-between items-center">
              <SheetTitle className="flex items-center gap-3">
                <ShoppingCart className="w-3 h-3 text-white" />
                <div className="flex text-white flex-col">
                  <span className="text-sm font-medium">
                    {all_prices.length} items added to cart
                  </span>
                </div>
              </SheetTitle>
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
            <div className="space-y-6 overflow-y-auto max-h-[40vh]">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="space-y-3 my-3">
                  {/* Category Header */}
                  <div className="flex items-center gap-2">
                    <span className="text-white w-10 h-5 text-lg font-semibold">
                      <img src={"/steps-images/cement.svg"} />
                    </span>

                    <h3 className="text-white text-lg font-semibold">
                      {category}
                    </h3>
                  </div>

                  {/* Category Items */}
                  <div className="space-y-2">
                    {items?.map((price, index) => (
                      <div
                        key={`${price?.BRAND}-${index}`}
                        className="flex items-center justify-between rounded-lg px-4 py-3 group bg-[#1B1B1B] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {/* Item Icon */}
                          <div className="w-10 h-8 bg-gray-600/90 rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">
                              <img src={"/steps-images/cement.svg"} />
                            </span>
                          </div>

                          {/* Item Details */}
                          <div className="flex flex-col">
                            <span className="text-gray-300 text-sm">
                              {price.NAME}
                            </span>
                            <span className="text-white font-semibold">
                              {price.BRAND}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <Button
                          onClick={() => handleRemoveItem(price?.NAME)}
                          className="text-white transition-all p-1 rounded-lg"
                          aria-label={`Remove ${price.NAME}`}
                        >
                          <X className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  };
  const DesktopView = () => {
    return (
      <div className="bg-black text-white px-4 py-3 flex items-center justify-between min-h-[60px] w-full mt-6 rounded-t-lg">
        {/* Left side - Cart icon and items */}
        <div className="flex flex-col items-start gap-3 flex-1 overflow-hidden min-w-0">
          <div className="flex gap-3 items-start text-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>Added to cart</span>
          </div>

          {/* Items container with scroll arrows */}
          <div className="flex items-center gap-2 w-full min-w-0">
            {/* Left scroll arrow */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="flex-shrink-0 p-1 hover:bg-gray-700 rounded transition-colors z-10"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {/* Scrollable items container */}
            <div
              ref={scrollRef}
              className="flex items-center gap-2 overflow-x-auto flex-1 min-w-0 py-1"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {all_prices.map((price, index) => (
                <div
                  key={`${price?.BRAND}-${index}`}
                  className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1.5 text-sm whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-white">{price.BRAND}</span>
                  <button
                    onClick={() => handleRemoveItem(price?.NAME)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Remove ${price.NAME}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* Right scroll arrow */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="flex-shrink-0 p-1 hover:bg-gray-700 rounded transition-colors z-10"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Action buttons */}
        {currentStep < 15 && (
          <button
            className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ml-4 flex-shrink-0"
            onClick={nextStep}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        {currentStep === 15 && (
          <div className="flex-shrink-0 ml-4">
            <button
              onClick={() => console.log("Proceeding to total cost")}
              className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
            >
              Proceed
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      // {/* CSS to hide scrollbar */}
      // <style jsx>{`
      //   div::-webkit-scrollbar {
      //     display: none;
      //   }
      // `}</style>
    );
  };
  return isMobile ? <MobileSheet /> : <DesktopView />;
};

function PropertyInfoCard({ location, build_up_area, no_of_floors }) {
  return (
    <div className="  text-white mt-4 mx-3 bg-[#1B1B1B] rounded-lg py-3">
      <div className="flex justify-between items-start">
        <div className="space-y-1 space-x-8 px-3">
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

// <div className="bg-black text-white px-4 py-3 flex items-center justify-between min-h-[60px] w-full mt-6">
//         {/* Left side - Cart icon and items */}
//         <div className="flex flex-col items-start gap-3 flex-1 overflow-hidden">
//           <div className="flex gap-3 items-start text-sm">
//             <ShoppingCart className="w-4 h-4" />
//             <span>Added to cart</span>
//           </div>

//           {/* Left scroll arrow */}
//           {canScrollLeft && (
//             <button
//               onClick={scrollLeft}
//               className="flex-shrink-0 p-1 hover:bg-gray-700 rounded transition-colors"
//               aria-label="Scroll left"
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </button>
//           )}

//           {/* Scrollable items container */}
//           {/* <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
//             {all_prices.map((price, index) => (
//               <div
//                 key={`${price?.BRAND}-${index}`}
//                 className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1.5 text-sm whitespace-nowrap flex-shrink-0"
//               >
//                 <span className="text-white">{price.BRAND}</span>
//                 <button
//                   onClick={() => handleRemoveItem(price?.NAME)}
//                   className="text-gray-400 hover:text-white transition-colors"
//                   aria-label={`Remove ${price.NAME}`}
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </div>
//             ))}
//           </div> */}
//           {/* Scrollable items container */}
//           <div
//             ref={scrollRef}
//             className="flex items-center gap-2 overflow-x-auto flex-1 min-w-0"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               // WebkitScrollbar: { display: "none" },
//             }}
//           >
//             <style jsx>{`
//               div::-webkit-scrollbar {
//                 display: none;
//               }
//             `}</style>
//             {all_prices.map((price, index) => (
//               <div
//                 key={`${price?.BRAND}-${index}`}
//                 className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1.5 text-sm whitespace-nowrap flex-shrink-0"
//               >
//                 <span className="text-white">{price.BRAND}</span>
//                 <button
//                   onClick={() => handleRemoveItem(price?.NAME)}
//                   className="text-gray-400 hover:text-white transition-colors"
//                   aria-label={`Remove ${price.NAME}`}
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </div>
//             ))}
//             {/* Right scroll arrow */}
//             {canScrollRight && (
//               <button
//                 onClick={scrollRight}
//                 className="flex-shrink-0 p-1 hover:bg-gray-700 rounded transition-colors"
//                 aria-label="Scroll right"
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             )}
//           </div>
//         </div>

//         {currentStep < 15 && (
//           <button
//             className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
//             onClick={nextStep}
//           >
//             Next
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         )}

//         {/* Right side - Proceed button */}
//         {currentStep == 15 && (
//           <div className="flex-shrink-0 ml-4">
//             <Link
//               href={"/total-cost"}
//               className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
//             >
//               Proceed
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         )}
//       </div>

// <div className="w-full">
//           <SheetTrigger className="w-full rounded-t-lg">
//             <div className="bg-black w-full flex flex-col text-white px-2 py-4 rounded-t-lg  cursor-pointer">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center justify-between gap-3">
//                   <ShoppingCart className="w-5 h-5" />
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium">
//                       {all_prices.length} items added to cart
//                     </span>
//                   </div>
//                 </div>

//                 {/* <div className="flex items-center gap-2">
//                 <span className="text-sm">View Cart</span>
//                 <ChevronUp className="w-4 h-4" />
//               </div> */}
//               </div>
//               <PropertyInfoCard
//                 build_up_area={constructionData?.total_build_up_area}
//                 location={constructionData?.location}
//                 no_of_floors={constructionData?.no_of_floors}
//               />
//             </div>
//           </SheetTrigger>
//           <div className="">
//             {currentStep < 15 && (
//               <button
//                 className="bg-white  text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
//                 onClick={nextStep}
//               >
//                 Next
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             )}

//             {/* Right side - Proceed button */}
//             {currentStep == 15 && (
//               <div className="flex-shrink-0 ml-4">
//                 <Link
//                   href={"/total-cost"}
//                   className="bg-white absolute right-0 bottom-0 text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
//                 >
//                   Proceed
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
