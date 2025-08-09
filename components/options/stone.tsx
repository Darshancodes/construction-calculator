"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, STONE_QUANTITY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const Stone = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
    all_prices,
  } = useDataStore();
  const [selectedStone, setSelectedStone] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["STONE"], all_prices)
  );
  const calculateStonePrice = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES.STONE,
      AMOUNT: amount,
      BRAND: name,
    });
  };

  const handleStonePrice = (name) => {
    setSelectedStone(name);
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
    <Card className="w-full bg-main">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Stone
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div>
          <RadioGroup value={selectedStone} onValueChange={handleStonePrice}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STONE_QUANTITY.BRANDS.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative flex flex-col justify-center items-center  rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedStone === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleStonePrice(item?.NAME)}
                >
                  {/* <RadioGroupItem
                    value={item.NAME}
                    id={`stone-${index}`}
                    className="peer sr-only"
                  /> */}

                  <RadioGroupItem
                    value={item.NAME}
                    id={`vitreous-${index}`}
                    className="absolute top-1 right-1"
                  />
                  <img src={item?.IMAGE} />
                  {/* <div className="w-16 h-16 bg-gray-400 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-600 rounded"></div>
                  </div> */}
                  <span className="text-sm font-medium">{item.NAME}</span>
                  <span className="text-xs text-gray-500 mt-1">
                    ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
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
