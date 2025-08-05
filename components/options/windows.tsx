"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, WINDOWS_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";

export const Windows = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const {
    addAndCalculate,
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
  } = useDataStore();
  const calculateMaterial = (name: string, per_sqft_rate: number) => {
    const amount = total_build_up_area * per_sqft_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WINDOW-MATERIAL"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const handleMaterial = (name: string) => {
    setSelectedMaterial(name);
    const selected = WINDOWS_CATEGORY.MATERIAL.find(
      (material) => material.NAME === name
    );
    if (selected) {
      calculateMaterial(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  return (
    <Card className="w-full bg-main">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Windows
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Material</h3>
          <RadioGroup
            value={selectedMaterial}
            onValueChange={setSelectedMaterial}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WINDOWS_CATEGORY.MATERIAL.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedMaterial === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleMaterial(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`window-${index}`}
                    className="absolute top-0 right-0"
                  />

                  <div className=" bg-blue-100 rounded mb-3 flex items-center justify-center">
                    <img src={item?.IMAGE} />
                  </div>
                  <span className="text-sm font-medium">{item.NAME}</span>
                  <span className="text-xs text-gray-500 mt-1">
                    ₹{item.PER_SQFT_RATE}/sqft
                  </span>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
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
      </CardContent>
    </Card>
  );
};
