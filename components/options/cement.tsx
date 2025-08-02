"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { CEMENT_CATEGORY } from "@/lib/constants";

export const Cement = () => {
  const { nextStep, prevStep } = useStepStore();
  const [selectedBrand, setSelectedBrand] = useState("");
  const brands = ["UltraTech or Ambhuja", "JK", "Wonder or shree"];
  const calculateCementPrice = () => {
    const per_unit_rate = 340;
    const ground_floor_area = 2000;
    const standard_quantity = 0.17;
    const total_build_up_area = 10000; // ground_floor_area * total_no_of_floors = 2000*5
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = total_quantity * per_unit_rate;
    return amount;
  };
  return (
    <Card className="w-full">
      <CardHeader className="bg-yellow-50">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Cement
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-4">Select Brand</h3>
          <RadioGroup value={selectedBrand} onValueChange={setSelectedBrand}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CEMENT_CATEGORY.BRANDS.map((brand, index) => (
                <div key={index} className="relative">
                  <RadioGroupItem
                    value={brand.NAME}
                    id={`cement-${index}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`cement-${index}`}
                    className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                  >
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700 text-center">
                        {brand.NAME.split(" ")[0]}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-center">
                      {brand.NAME}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      ₹{brand.PER_UNIT_RATE}/{brand.PER_UNIT}
                    </span>
                    <span className="text-xs text-gray-400">
                      {brand.STANDARD_QUANTITY} {brand.STANDARD_QUANTITY_UNIT}
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
  );
};

// <div>
//   {brands?.map((brand) => (
//     <h2 key={brand}>{brand}</h2>
//   ))}
//   {calculateCementPrice()}
//   <button
//     className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
//     onClick={nextStep}
//   >
//     nextStep
//   </button>
//   <button
//     className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
//     onClick={prevStep}
//   >
//     prevStep
//   </button>
// </div>
