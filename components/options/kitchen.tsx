"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, KITCHEN_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
export const Kitchen = () => {
  const [selectedKitchen, setSelectedKitchen] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const { addAndCalculate } = useDataStore();
  const kitchenList = [
    { name: "basic", price: "100000" },
    { name: "premium", price: "150000" },
    { name: "classic", price: "200000" },
  ];
  const calculateKitchenPrice = (name, amount) => {
    // const amount = 0;
    addAndCalculate({
      NAME: CATEGORY_NAMES.KITCHEN,
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const handleKitchenPrice = (name) => {
    setSelectedKitchen(name);
    const selected = KITCHEN_CATEGORY.BRANDS.find(
      (kitchen) => kitchen.NAME === name
    );
    if (selected) {
      calculateKitchenPrice(selected?.NAME, selected?.PER_UNIT_RATE);
    }
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Kitchen
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Kitchen Type</h3>
            <RadioGroup
              value={selectedKitchen}
              onValueChange={handleKitchenPrice}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {KITCHEN_CATEGORY.BRANDS.map((item, index) => (
                  <div key={index} className="relative">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`kitchen-${index}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`kitchen-${index}`}
                      className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                    >
                      <div className="w-16 h-16 bg-orange-200 rounded-lg mb-3 flex items-center justify-center">
                        <div className="w-10 h-10 bg-orange-400 rounded"></div>
                      </div>
                      <span className="text-sm font-medium">{item.NAME}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        ₹{item.PER_UNIT_RATE.toLocaleString()}
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
