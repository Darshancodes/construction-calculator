"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, STONE_QUANTITY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
export const Stone = () => {
  const [selectedStone, setSelectedStone] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculateStonePrice = (name, per_unit_rate, standard_quantity) => {
    // const per_unit_rate = 750;
    // const standard_quantity = 0.05;

    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;

    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES.STONE,
      AMOUNT: amount,
      BRAND: name,
    });
    // return amount;
  };

  const handleStonePrice = (name) => {
    const selected = STONE_QUANTITY.BRANDS.find((stone) => stone.NAME === name);
    if (selected) {
      calculateStonePrice(
        selected?.NAME,
        selected?.PER_UNIT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };

  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Stone
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Stone Type</h3>
            <RadioGroup value={selectedStone} onValueChange={handleStonePrice}>
              <div className="grid grid-cols-1 gap-4">
                {STONE_QUANTITY.BRANDS.map((item, index) => (
                  <div key={index} className="relative">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`stone-${index}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`stone-${index}`}
                      className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                    >
                      <div className="w-16 h-16 bg-gray-400 rounded-lg mb-3 flex items-center justify-center">
                        <div className="w-10 h-10 bg-gray-600 rounded"></div>
                      </div>
                      <span className="text-sm font-medium">{item.NAME}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
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
