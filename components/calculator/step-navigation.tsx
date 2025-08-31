"use client";

import Image from "next/image";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { CATEGORY_NAMES, STEPS_IMAGES } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { Micro_5 } from "next/font/google";
import { CONSTRUCTION_STEPS } from "@/lib/material-constants";

interface StepNavigationProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function StepNavigation() {
  const { currentStep, stepChange } = useStepStore();
  const { all_prices } = useDataStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if a specific step can be accessed
  const canAccessStep = (targetStep: number) => {
    // Always allow going to current or previous steps
    if (targetStep <= currentStep) return true;

    // For future steps, check if all previous steps are complete
    for (let i = 1; i < targetStep; i++) {
      const stepData = CONSTRUCTION_STEPS.find((step) => step.id === i);
      if (!stepData) continue;

      const isStepComplete = stepData.category.every((category) => {
        return all_prices.some((item) => {
          return (
            item.NAME === category ||
            item.NAME?.startsWith(category + "-") ||
            item.NAME?.startsWith(category + "_")
          );
        });
      });

      if (!isStepComplete) return false;
    }

    return true;
  };

  // Handle step navigation with validation
  const handleStepChange = (targetStep: number) => {
    if (canAccessStep(targetStep)) {
      stepChange(targetStep);
    } else {
      // Find the first incomplete step
      let firstIncompleteStep = null;
      for (let i = 1; i < targetStep; i++) {
        const stepData = CONSTRUCTION_STEPS.find((step) => step.id === i);
        if (!stepData) continue;

        const isStepComplete = stepData.category.every((category) => {
          return all_prices.some((item) => {
            return (
              item.NAME === category ||
              item.NAME?.startsWith(category + "-") ||
              item.NAME?.startsWith(category + "_")
            );
          });
        });

        if (!isStepComplete) {
          firstIncompleteStep = i;
          break;
        }
      }

      const stepName =
        CONSTRUCTION_STEPS.find((s) => s.id === firstIncompleteStep)?.name ||
        "previous step";
      alert(
        `Please complete the ${stepName} step before proceeding to this step.`
      );
    }
  };

  // Auto-scroll to selected tab when step changes
  useEffect(() => {
    const scrollToActiveStep = (
      containerRef: React.RefObject<HTMLDivElement>
    ) => {
      if (!containerRef.current) return;

      // Add a small delay to ensure DOM is fully rendered
      setTimeout(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const activeElement = container.querySelector(
          `[data-step-id="${currentStep}"]`
        ) as HTMLElement;

        if (!activeElement) return;

        const elementLeft = activeElement.offsetLeft;
        const elementWidth = activeElement.offsetWidth;
        const containerWidth = container.clientWidth;
        const scrollLeft = container.scrollLeft;

        // Calculate if element is outside visible area
        const elementStart = elementLeft - scrollLeft;
        const elementEnd = elementStart + elementWidth;

        let targetScrollLeft = scrollLeft;

        // If element is to the left of visible area
        if (elementStart < 50) {
          targetScrollLeft = elementLeft - 50; // 50px padding from left edge
        }
        // If element is to the right of visible area
        else if (elementEnd > containerWidth - 50) {
          targetScrollLeft = elementLeft - containerWidth + elementWidth + 50; // 50px padding from right edge
        }

        // Only scroll if we need to move more than 10px
        if (Math.abs(targetScrollLeft - scrollLeft) > 10) {
          container.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: "smooth",
          });
        }
      }, 100);
    };

    // Scroll both desktop and mobile containers
    scrollToActiveStep(scrollContainerRef);
    scrollToActiveStep(mobileScrollContainerRef);
  }, [currentStep]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const hasSelectedItems = (categories: string[]) => {
    console.log("categories=", categories);

    // Filter out undefined/null categories
    const validCategories = categories.filter(Boolean);

    if (validCategories.length === 0) return false;

    // Check if ALL categories have selected items
    return validCategories.every((category) => {
      const hasItemsInCategory = all_prices.some((item: any) => {
        return (
          item.NAME === category ||
          item.NAME?.startsWith(category + "-") ||
          item.NAME?.startsWith(category + "_")
        );
      });

      console.log(
        `Category ${category}: ${hasItemsInCategory ? "HAS" : "NO"} items`
      );
      return hasItemsInCategory;
    });
  };

  // Hide navigation when user is on Miscellaneous step (id: 14)
  // if (currentStep === 14) {
  //   return null;
  // }

  return (
    <>
      <div className="hidden md:block w-full bg-white sticky top-0 z-50">
        <div className="px-4 ">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 mt-10">
            Select materials
          </h2>

          <div className="relative">
            {/* Left scroll button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute cursor-pointer -left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full h-8 w-8"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-10 py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {CONSTRUCTION_STEPS.map((step) => {
                const stepAccessible = canAccessStep(step.id);
                const isComplete = hasSelectedItems(step.category);

                return (
                  <div
                    key={step.id}
                    data-step-id={step.id}
                    onClick={() => handleStepChange(step.id)}
                    className={`flex-shrink-0 relative w-24 h-24 rounded-xl border-2 transition-all duration-200 ${
                      currentStep === step.id
                        ? "bg-main border-black cursor-pointer"
                        : stepAccessible
                        ? "border-gray-200 bg-white hover:border-gray-300 cursor-pointer hover:shadow-md"
                        : "border-gray-100 bg-gray-50 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-2">
                      {isComplete && (
                        <div className="absolute top-1 right-1 z-10">
                          <img src={"/icons/green-check.svg"} alt="Complete" />
                        </div>
                      )}

                      <div className="w-10 h-10 mb-1 flex items-center justify-center">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.name}
                          width={40}
                          height={40}
                          className={`object-contain ${
                            !stepAccessible ? "grayscale" : ""
                          }`}
                        />
                      </div>
                      <span
                        className={`text-xs text-center leading-tight ${
                          stepAccessible ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {step.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right scroll button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute cursor-pointer -right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full h-8 w-8"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden bg-white border-t border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-3">
          <div
            ref={mobileScrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CONSTRUCTION_STEPS.map((step) => {
              const stepAccessible = canAccessStep(step.id);
              const isComplete = hasSelectedItems(step.category);

              return (
                <div
                  key={step.id}
                  data-step-id={step.id}
                  onClick={() => handleStepChange(step.id)}
                  className={`flex-shrink-0 flex flex-col relative gap-2 items-center transition-all duration-200 px-3 ${
                    currentStep === step.id
                      ? "bg-yellow-100 border-b-4 border-black cursor-pointer"
                      : stepAccessible
                      ? "bg-transparent hover:bg-gray-50 cursor-pointer"
                      : "bg-transparent cursor-not-allowed opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {isComplete && (
                      <div className="absolute top-0 right-0 z-10">
                        <img src={"/icons/green-check.svg"} alt="Complete" />
                      </div>
                    )}

                    {!stepAccessible && step.id > currentStep && (
                      <div className="absolute top-0 right-0 z-10">
                        <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🔒</span>
                        </div>
                      </div>
                    )}

                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.name}
                      width={0}
                      height={0}
                      className={`object-contain w-20 h-[60px] ${
                        !stepAccessible ? "grayscale" : ""
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs text-center leading-tight ${
                      stepAccessible ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// {CONSTRUCTION_STEPS.map((step) => (
//               <div
//                 key={step.id}
//                 data-step-id={step.id}
//                 onClick={() => stepChange(step.id)}
//                 className={`flex-shrink-0 flex flex-col relative gap-2 items-center cursor-pointer transition-all duration-200 px-3 ${
//                   currentStep === step.id
//                     ? "bg-yellow-100 border-b-4 border-black"
//                     : "bg-transparent hover:bg-gray-50"
//                 }`}
//               >
//                 <div className="flex items-center justify-center">
//                   {hasSelectedItems(step.category) && (
//                     <div className="absolute top-0 right-0 z-10">
//                       <img src={"/icons/green-check.svg"} />
//                       {/* <CheckCircle className="w-5 h-5 text-green-500 bg-white rounded-full" /> */}
//                     </div>
//                   )}
//                   <Image
//                     src={step.image || "/placeholder.svg"}
//                     alt={step.name}
//                     width={0}
//                     height={0}
//                     className="object-contain w-20 h-[60px]"
//                   />
//                 </div>
//                 <span className="text-xs text-gray-600 text-center leading-tight">
//                   {step.name}
//                 </span>
//               </div>
//             ))}

// {CONSTRUCTION_STEPS?.map((step) => (
//                 <div
//                   key={step.id}
//                   data-step-id={step.id}
//                   onClick={() => stepChange(step.id)}
//                   className={`flex-shrink-0 relative w-24 h-24 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
//                     currentStep === step.id
//                       ? "bg-main border-black"
//                       : "border-gray-200 bg-white hover:border-gray-300"
//                   }`}
//                 >
//                   <div className="flex flex-col items-center justify-center h-full p-2">
//                     {/* Green check circle for selected items */}
//                     {hasSelectedItems(step.category) && (
//                       <div className="absolute top-1 right-1 z-10">
//                         <img src={"/icons/green-check.svg"} />
//                       </div>
//                     )}
//                     <div className="w-10 h-10 mb-1 flex items-center justify-center">
//                       <Image
//                         src={step.image || "/placeholder.svg"}
//                         alt={step.name}
//                         width={40}
//                         height={40}
//                         className="object-contain"
//                       />
//                     </div>
//                     <span className="text-xs text-gray-600 text-center leading-tight">
//                       {step.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}

// Helper function to check if step has selected items
// const hasSelectedItems = (category: string) => {
//   // Find the step that contains this category
//   const step = CONSTRUCTION_STEPS.find((s) => s.category === category);
//   if (!step) return false;

//   return all_prices.some((item: any) => {
//     // Check if item matches the current category
//     return (
//       item.NAME &&
//       (item.NAME.includes(category) ||
//         item.category === category ||
//         // Add any other matching logic you need
//         item.stepCategory === category)
//     );
//   });

// return all_prices.some((item: any) => {
//   const step = CONSTRUCTION_STEPS.find((s) => s.category === category);
//   return step && item.NAME.includes(step.category);
// });
// };

// export default function StepNavigation() {
//   const { currentStep, stepChange } = useStepStore();
//   const { all_prices } = useDataStore();
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const mobileScrollContainerRef = useRef<HTMLDivElement>(null);

//   // Auto-scroll to selected tab when step changes
//   useEffect(() => {
//     const scrollToActiveStep = (
//       containerRef: React.RefObject<HTMLDivElement>
//     ) => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const activeElement = container.querySelector(
//         `[data-step-id="${currentStep}"]`
//       ) as HTMLElement;

//       if (!activeElement) return;

//       const containerRect = container.getBoundingClientRect();
//       const elementRect = activeElement.getBoundingClientRect();
//       const elementLeft = activeElement.offsetLeft;
//       const elementWidth = activeElement.offsetWidth;
//       const containerWidth = container.clientWidth;
//       const scrollLeft = container.scrollLeft;

//       // Calculate if element is outside visible area
//       const elementStart = elementLeft - scrollLeft;
//       const elementEnd = elementStart + elementWidth;

//       let targetScrollLeft = scrollLeft;

//       // If element is to the left of visible area
//       if (elementStart < 0) {
//         targetScrollLeft = elementLeft - 20; // 20px padding from left edge
//       }
//       // If element is to the right of visible area
//       else if (elementEnd > containerWidth) {
//         targetScrollLeft = elementLeft - containerWidth + elementWidth + 20; // 20px padding from right edge
//       }
//       // If element is partially visible, center it
//       else if (elementStart < 50 || elementEnd > containerWidth - 50) {
//         targetScrollLeft = elementLeft - containerWidth / 2 + elementWidth / 2;
//       }

//       // Only scroll if we need to
//       if (Math.abs(targetScrollLeft - scrollLeft) > 10) {
//         container.scrollTo({
//           left: Math.max(0, targetScrollLeft),
//           behavior: "smooth",
//         });
//       }
//     };

//     // Scroll both desktop and mobile containers
//     scrollToActiveStep(scrollContainerRef);
//     scrollToActiveStep(mobileScrollContainerRef);
//   }, [currentStep]);
//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };
//   // Helper function to check if step has selected items
//   const hasSelectedItems = (stepId: string) => {
//     return all_prices.some((item: any) => {
//       const step = CONSTRUCTION_STEPS.find((s) => s.category === stepId);

//       return step && item.NAME.includes(step.name);
//     });
//   };
//   return (
//     <>
//       <div className="hidden md:block w-full bg-white">
//         <div className="px-4 ">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">
//             Select materials
//           </h2>

//           <div className="relative">
//             {/* Left scroll button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full h-8 w-8 cursor-pointer"
//               onClick={scrollLeft}
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>

//             {/* Scrollable container */}
//             <div
//               ref={scrollContainerRef}
//               className="flex gap-3 overflow-x-auto scrollbar-hide px-10 py-2"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//             >
//               {CONSTRUCTION_STEPS.map((step) => (
//                 <div
//                   key={step.id}
//                   data-step-id={step.id}
//                   onClick={() => stepChange(step.id)}
//                   className={`flex-shrink-0 relative w-24 h-24 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
//                     currentStep === step.id
//                       ? "bg-main border-black"
//                       : // ? "border-green-500 bg-green-50"
//                         "border-gray-200 bg-white hover:border-gray-300"
//                   }`}
//                 >
//                   <div className="flex flex-col items-center justify-center h-full p-2">
//                     {/* Green check circle for selected items */}
//                     {/* {hasSelectedItems(step.category) && (
//                       <div className="absolute -top-1 -right-1 z-10">
//                         <CheckCircle className="w-5 h-5 text-green-500 bg-white rounded-full" />
//                       </div>
//                     )} */}
//                     <div className="w-10 h-10 mb-1 flex items-center justify-center">
//                       <Image
//                         src={step.image || "/placeholder.svg"}
//                         alt={step.name}
//                         width={40}
//                         height={40}
//                         className="object-contain"
//                       />
//                     </div>
//                     <span className="text-xs text-gray-600 text-center leading-tight">
//                       {step.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right scroll button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full h-8 w-8 cursor-pointer"
//               onClick={scrollRight}
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Version */}
//       <div className="md:hidden  bg-white border-t border-gray-200 z-50">
//         <div className="px-4 py-3">
//           <div
//             ref={mobileScrollContainerRef}
//             className="flex gap-4 overflow-x-auto scrollbar-hide"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {CONSTRUCTION_STEPS.map((step) => (
//               <div
//                 key={step.id}
//                 data-step-id={step.id}
//                 onClick={() => stepChange(step.id)}
//                 className={`flex-shrink-0 flex  flex-col gap-2 items-center cursor-pointer transition-all duration-200 px-3  ${
//                   currentStep === step.id
//                     ? "bg-yellow-100 border-b-4 border-black"
//                     : "bg-transparent hover:bg-gray-50"
//                 }`}
//               >
//                 <div className=" flex items-center justify-center">
//                   <Image
//                     src={step.image || "/placeholder.svg"}
//                     alt={step.name}
//                     width={0}
//                     height={0}
//                     className="object-contain w-20 h-[60px]"
//                   />
//                 </div>
//                 <span className="text-xs text-gray-600 text-center leading-tight">
//                   {step.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

{
  /* <span
                  className={`text-xs text-center leading-tight min-w-0 ${
                    currentStep === step.id
                      ? "text-gray-900 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {step.name}
                </span> */
}
{
  /* {currentStep === step.id && (
                  <div className="w-8 h-0.5 bg-yellow-500 mt-1 rounded-full" />
                )} */
}
