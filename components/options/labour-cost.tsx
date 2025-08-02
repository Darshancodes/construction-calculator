"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { LABOUR_COST } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";

export const LabourCost = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculatelaboutCost = () => {
    // const per_sqft_rate = 290;
    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = total_build_up_area * LABOUR_COST.PER_SQFT_RATE;
    addAndCalculate({ NAME: "LABOUR-COST", AMOUNT: amount, BRAND: "WORKING" });
    // return amount;
  };

  return (
    <div>
      LabourCost
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
