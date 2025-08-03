"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { CATEGORY_NAMES } from "@/lib/constants";

export const MiscallenousCost = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    total_prices,
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculateMiscallenousCost = () => {
    // 5% of total material cost
    const total = total_prices * 0.05;
    addAndCalculate({
      NAME: CATEGORY_NAMES["MISCALLENOUS-COST"],
      AMOUNT: total,
      BRAND: "MISCALLENOUS",
    });
  };
  return (
    <div>
      MiscallenousCost
      <button
        className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        onClick={nextStep}
      >
        nextStep
      </button>
      <button
        className="w-44 mt-6  bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        onClick={prevStep}
      >
        prevStep
      </button>
    </div>
  );
};
