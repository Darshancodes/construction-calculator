"use client";

import Image from "next/image";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { CATEGORY_NAMES, STEPS_IMAGES } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { Micro_5 } from "next/font/google";

const CONSTRUCTION_STEPS = [
  {
    id: 1,
    category: CATEGORY_NAMES?.STEEL,
    name: "TMT Steel",
    image: STEPS_IMAGES.TMT_STEEL,
  },
  {
    id: 2,
    category: CATEGORY_NAMES?.BRICKS,
    name: "Bricks",
    image: STEPS_IMAGES.BRICKS,
  },
  {
    id: 3,
    category: CATEGORY_NAMES?.CEMENT,
    name: "Cement",
    image: STEPS_IMAGES.CEMENT,
  },
  {
    id: 4,
    category:
      CATEGORY_NAMES?.["ELECTRICAL-SLAB-AND-WALL-MATERIAL"] &&
      CATEGORY_NAMES?.["WIRES-AND-CABLES-EWC0100-FLAT"] &&
      CATEGORY_NAMES?.["SHEET-AND-SWITCHES-EWC0100-FLAT"],
    name: "Electrical",
    image: STEPS_IMAGES.ELECTRICAL,
  },
  {
    id: 5,
    category:
      CATEGORY_NAMES?.["VETRIFIED-TILES"] &&
      CATEGORY_NAMES?.["CERAMIC-WALL-TILE-TOILED-AND-KITCHEN"] &&
      CATEGORY_NAMES?.[
        "GRANITE-DOOR_FRAME-WINDOW_FRAME-KITCHEN_TOP-STAIRCASE"
      ] &&
      CATEGORY_NAMES?.["ROUGH-STONE-TERRACE-AND-PARKING-AREA"],
    name: "Flooring",
    image: STEPS_IMAGES.FLOORING,
  },
  {
    id: 6,
    category:
      CATEGORY_NAMES?.["DOOR-FRAME-SINGLE-REBATE-ELS0100"] &&
      CATEGORY_NAMES?.["DOOR-SHUTTER"] &&
      CATEGORY_NAMES?.["MAIN-DOOR"],
    name: "Door",
    image: STEPS_IMAGES.DOOR,
  },
  {
    id: 7,
    category: CATEGORY_NAMES?.["WINDOW-MATERIAL"],
    name: "Windows",
    image: STEPS_IMAGES.WINDOWS,
  },
  {
    id: 8,
    category:
      CATEGORY_NAMES?.["WALL-FINISH-POP-FALSE-CEILING"] &&
      CATEGORY_NAMES?.["WALL-FINISH-POP-IN-WALLS"] &&
      CATEGORY_NAMES?.["WALL-FINISH-INTERNAL-WALL-PAINT"],
    name: "Wall Finish",
    image: STEPS_IMAGES.WALL_FINISH,
  },
  {
    id: 9,
    category:
      CATEGORY_NAMES?.["STAIR-HANDRAIL"] &&
      CATEGORY_NAMES?.["BALCONY-HANDRAIL"],
    name: "Hand Rails",
    image: STEPS_IMAGES.RAILINGS,
  },
  {
    id: 10,
    category: CATEGORY_NAMES?.["WATER-TANK"],
    name: "Water Tank",
    image: STEPS_IMAGES.WATER_TANK,
  },
  {
    id: 11,
    category: CATEGORY_NAMES?.KITCHEN,
    name: "Kitchen",
    image: STEPS_IMAGES.KITCHEN,
  },
  {
    id: 12,
    category:
      CATEGORY_NAMES?.["MIX-CONCRETE-PCC"] &&
      CATEGORY_NAMES?.["MIX-CONCRETE-RMC"],
    name: "Mix Concrete",
    image: STEPS_IMAGES.MIX_CONCRETE,
  },
  {
    id: 13,
    category: CATEGORY_NAMES?.SAND,
    name: "Sand",
    image: STEPS_IMAGES.SAND,
  },
  {
    id: 14,
    category:
      CATEGORY_NAMES?.["PLUMBING-CP-AND-VITREOUS"] &&
      CATEGORY_NAMES?.["PLUMBING-CPVC-INTERNAL-AND-EXTERNAL"] &&
      CATEGORY_NAMES?.["PLUMBING-PVC-INTERNAL-AND-EXTERNAL"],
    name: "Plumbing",
    image: STEPS_IMAGES.PLUMBING,
  },
  {
    id: 15,
    category: CATEGORY_NAMES?.STONE,
    name: "Stone",
    image: STEPS_IMAGES.BRICKS,
  },
];

interface StepNavigationProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function StepNavigation() {
  const { currentStep, stepChange } = useStepStore();
  const { all_prices } = useDataStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to selected tab when step changes
  useEffect(() => {
    const scrollToActiveStep = (
      containerRef: React.RefObject<HTMLDivElement>
    ) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const activeElement = container.querySelector(
        `[data-step-id="${currentStep}"]`
      ) as HTMLElement;

      if (!activeElement) return;

      const containerRect = container.getBoundingClientRect();
      const elementRect = activeElement.getBoundingClientRect();
      const elementLeft = activeElement.offsetLeft;
      const elementWidth = activeElement.offsetWidth;
      const containerWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;

      // Calculate if element is outside visible area
      const elementStart = elementLeft - scrollLeft;
      const elementEnd = elementStart + elementWidth;

      let targetScrollLeft = scrollLeft;

      // If element is to the left of visible area
      if (elementStart < 0) {
        targetScrollLeft = elementLeft - 20; // 20px padding from left edge
      }
      // If element is to the right of visible area
      else if (elementEnd > containerWidth) {
        targetScrollLeft = elementLeft - containerWidth + elementWidth + 20; // 20px padding from right edge
      }
      // If element is partially visible, center it
      else if (elementStart < 50 || elementEnd > containerWidth - 50) {
        targetScrollLeft = elementLeft - containerWidth / 2 + elementWidth / 2;
      }

      // Only scroll if we need to
      if (Math.abs(targetScrollLeft - scrollLeft) > 10) {
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
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
  // Helper function to check if step has selected items
  const hasSelectedItems = (stepId: string) => {
    return all_prices.some((item: any) => {
      const step = CONSTRUCTION_STEPS.find((s) => s.category === stepId);

      return step && item.NAME.includes(step.name);
    });
  };
  return (
    <>
      <div className="hidden md:block w-full bg-white">
        <div className="px-4 ">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Select materials
          </h2>

          <div className="relative">
            {/* Left scroll button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full h-8 w-8"
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
              {CONSTRUCTION_STEPS.map((step) => (
                <div
                  key={step.id}
                  data-step-id={step.id}
                  onClick={() => stepChange(step.id)}
                  className={`flex-shrink-0 relative w-24 h-24 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    currentStep === step.id
                      ? "bg-main border-black"
                      : // ? "border-green-500 bg-green-50"
                        "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center h-full p-2">
                    {/* Green check circle for selected items */}
                    {/* {hasSelectedItems(step.category) && (
                      <div className="absolute -top-1 -right-1 z-10">
                        <CheckCircle className="w-5 h-5 text-green-500 bg-white rounded-full" />
                      </div>
                    )} */}
                    <div className="w-10 h-10 mb-1 flex items-center justify-center">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-gray-600 text-center leading-tight">
                      {step.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right scroll button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full h-8 w-8"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="md:hidden  bg-white border-t border-gray-200 z-50">
        <div className="px-4 py-3">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CONSTRUCTION_STEPS.map((step) => (
              <div
                key={step.id}
                data-step-id={step.id}
                onClick={() => stepChange(step.id)}
                className={`flex-shrink-0 flex  flex-col gap-2 items-center cursor-pointer transition-all duration-200 px-3  ${
                  currentStep === step.id
                    ? "bg-yellow-100 border-b-4 border-black"
                    : "bg-transparent hover:bg-gray-50"
                }`}
              >
                <div className=" flex items-center justify-center">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.name}
                    width={0}
                    height={0}
                    className="object-contain w-20 h-[60px]"
                  />
                </div>
                <span className="text-xs text-gray-600 text-center leading-tight">
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

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
