"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, KITCHEN_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const Kitchen = () => {
  const { nextStep, prevStep } = useStepStore();
  const { addAndCalculate, all_prices } = useDataStore();
  const [selectedKitchen, setSelectedKitchen] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["KITCHEN"], all_prices)
  );
  const kitchenList = [
    { name: "basic", price: "100000" },
    { name: "premium", price: "150000" },
    { name: "classic", price: "200000" },
  ];
  const calculateKitchenPrice = (name, amount) => {
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
    <Card className="w-full bg-main">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Kitchen
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div>
          <RadioGroup
            value={selectedKitchen}
            onValueChange={handleKitchenPrice}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {KITCHEN_CATEGORY.BRANDS.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedKitchen === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleKitchenPrice(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`kitchen-${index}`}
                    className="absolute top-1 right-1"
                  />

                  <img src={"/brand-images/kitchen.svg"} />
                  <span className="text-sm font-medium">{item.NAME}</span>
                  <span className="text-xs text-gray-500 mt-1">
                    ₹{item.PER_UNIT_RATE.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        {/* <button
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
        </button> */}
      </CardContent>
    </Card>
  );
};
