"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, SAND_QUANTITY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const Sand = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
    all_prices,
  } = useDataStore();
  const [selectedSand, setSelectedSand] = useState(
    () => () => getStoredBrand(CATEGORY_NAMES?.["SAND"], all_prices)
  );
  const calculateSand = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({ NAME: CATEGORY_NAMES.SAND, AMOUNT: amount, BRAND: name });
  };
  // const calculateMESand = (name, per_unit_rate, standard_quantity) => {
  //   // const per_unit_rate = 900;
  //   // const standard_quantity = 0.05;

  //   // const ground_floor_area = 2000;
  //   // const no_of_floors = 5;
  //   // const total_build_up_area = ground_floor_area * no_of_floors;

  //   const total_quantity = total_build_up_area * standard_quantity;
  //   const amount = per_unit_rate * total_quantity;
  //   addAndCalculate({ NAME: CATEGORY_NAMES.SAND, AMOUNT: amount, BRAND: name });
  //   // return amount;
  // };

  // const handleRiverSand = (name) => {
  //   const selected = SAND_QUANTITY.BRANDS.find((sand) => sand.NAME === name);
  //   if (selected) {
  //     calculateRiverSand(
  //       selected?.NAME,
  //       selected?.PER_UNIT_RATE,
  //       selected?.STANDARD_QUANTITY
  //     );
  //   }
  // };

  const handleSand = (name) => {
    setSelectedSand(name);
    const selected = SAND_QUANTITY.BRANDS.find((sand) => sand.NAME === name);
    if (selected) {
      calculateSand(
        selected?.NAME,
        selected?.PER_UNIT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };

  return (
    <div>
      <Card className="w-full bg-yellow-50">
        <CardHeader className="">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Sand
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div>
            <RadioGroup value={selectedSand} onValueChange={setSelectedSand}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SAND_QUANTITY.BRANDS.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedSand === item.NAME
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleSand(item.NAME)}
                  >
                    <RadioGroupItem
                      value={item.NAME}
                      id={`sand-${index}`}
                      className="absolute top-1 right-1"
                    />

                    <img src={item?.IMAGE} />

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
    </div>
  );
};
