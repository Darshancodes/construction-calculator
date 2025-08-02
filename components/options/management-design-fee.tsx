"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { LABOUR_COST } from "@/lib/constants";

export const ManagementDesignFees = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculateManagementDesignFees = () => {
    // const per_sqft_rate = 249;
    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = total_build_up_area * LABOUR_COST.PER_SQFT_RATE;
    addAndCalculate({
      NAME: "MANAGEMENT-DESIGN-FEES",
      AMOUNT: amount,
      BRAND: "MANAGEMENT-DESIGN-FEES",
    });
    // return amount;
  };
  return (
    <div>
      Managemnt Design Fees
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
