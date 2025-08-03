"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { STEPS_IMAGES } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";

const CONSTRUCTION_STEPS = [
  { id: 1, name: "TMT Steel", image: STEPS_IMAGES.TMT_STEEL },
  { id: 2, name: "Bricks", image: STEPS_IMAGES.BRICKS },
  { id: 3, name: "Cement", image: STEPS_IMAGES.CEMENT },
  { id: 4, name: "Electrical", image: STEPS_IMAGES.ELECTRICAL },
  { id: 5, name: "Flooring", image: STEPS_IMAGES.FLOORING },
  { id: 6, name: "Door", image: STEPS_IMAGES.DOOR },
  { id: 7, name: "Windows", image: STEPS_IMAGES.WINDOWS },
  { id: 8, name: "Wall Finish", image: STEPS_IMAGES.WALL_FINISH },
  { id: 9, name: "Hand Rails", image: STEPS_IMAGES.RAILINGS },
  { id: 10, name: "Water Tank", image: STEPS_IMAGES.WATER_TANK },
  { id: 11, name: "Kitchen", image: STEPS_IMAGES.KITCHEN },
  { id: 12, name: "Mix Concrete", image: STEPS_IMAGES.MIX_CONCRETE },
  { id: 13, name: "Sand", image: STEPS_IMAGES.SAND },
  { id: 14, name: "Plumbing", image: STEPS_IMAGES.PLUMBING },
  {
    id: 15,
    name: "Stone",
    image: STEPS_IMAGES.BRICKS,
  },
  { id: 16, name: "Total Cost", image: "/placeholder.svg?height=60&width=60" },
  //   {
  //     id: 18,
  //     name: "Miscellaneous",
  //     image: "/placeholder.svg?height=60&width=60",
  //   },
  //   { id: 17, name: "Management", image: "/placeholder.svg?height=60&width=60" },
];

interface StepNavigationProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function StepNavigation() {
  const { currentStep, stepChange } = useStepStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="w-full bg-white">
      <div className="px-4 py-6">
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
                onClick={() => stepChange(step.id)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  currentStep === step.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full p-2">
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
  );
}
