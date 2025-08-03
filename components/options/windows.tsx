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
  const calculateMaterial = (name, per_sqft_rate) => {
    const upvc = 65;
    const aluminium = 55;
    const wooden = 65;
    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = total_build_up_area * per_sqft_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WINDOW-MATERIAL"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const handleMaterial = (name) => {
    setSelectedMaterial(name);
    const selected = WINDOWS_CATEGORY.MATERIAL.find(
      (material) => material.NAME === name
    );
    if (selected) {
      calculateMaterial(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
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
                  <div key={index} className="relative">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`window-${index}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`window-${index}`}
                      className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                    >
                      <div className="w-16 h-12 bg-blue-100 rounded mb-3 flex items-center justify-center">
                        <div className="w-12 h-8 border-2 border-blue-300 rounded-sm"></div>
                      </div>
                      <span className="text-sm font-medium">{item.NAME}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        ₹{item.PER_SQFT_RATE}/sqft
                      </span>
                    </Label>
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
    </div>
  );
};
