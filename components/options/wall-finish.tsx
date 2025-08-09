"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, WALL_FINISHES } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const WallFinishes = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    addAndCalculate,
    all_prices,
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
  } = useDataStore();
  const [selectedCeiling, setSelectedCeiling] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["WALL-FINISH-POP-FALSE-CEILING"],
      all_prices
    )
  );
  const [selectedWalls, setSelectedWalls] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["WALL-FINISH-POP-IN-WALLS"], all_prices)
  );
  const [selectedPaint, setSelectedPaint] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["WALL-FINISH-INTERNAL-WALL-PAINT"],
      all_prices
    )
  );

  const calculatePopFalseCeiling = (name, per_sqft_rate, standard_quantity) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WALL-FINISH-POP-FALSE-CEILING"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const calculatePopInWalls = (name, per_sqft_rate, standard_quantity) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WALL-FINISH-POP-IN-WALLS"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const calculateInternalWallPaint = (
    name,
    per_sqft_rate,
    standard_quantity
  ) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WALL-FINISH-INTERNAL-WALL-PAINT"],
      AMOUNT: amount,
      BRAND: name,
    });
  };

  const handlePopFalseCeiling = (name) => {
    setSelectedCeiling(name);
    const selected = WALL_FINISHES.POP_FALSE_CEILING.find(
      (wall) => wall.NAME === name
    );
    if (selected) {
      calculatePopFalseCeiling(
        selected?.NAME,
        selected?.PER_SQFT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };

  const handlePopInWalls = (name) => {
    setSelectedWalls(name);
    const selected = WALL_FINISHES.POP_IN_WALLS.find(
      (wall) => wall.NAME === name
    );
    if (selected) {
      calculatePopInWalls(
        selected?.NAME,
        selected?.PER_SQFT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };

  const handleWallPaint = (name) => {
    setSelectedPaint(name);
    const selected = WALL_FINISHES.INTERMNAL_WALL_PAINT.find(
      (wall) => wall.NAME === name
    );
    if (selected) {
      calculateInternalWallPaint(
        selected?.NAME,
        selected?.PER_SQRT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };

  return (
    <Card className="w-full bg-main">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Wall Finishes
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">POP False Ceiling</h3>
          <RadioGroup
            value={selectedCeiling}
            onValueChange={setSelectedCeiling}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WALL_FINISHES.POP_FALSE_CEILING.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative flex flex-col justify-center items-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedCeiling === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handlePopFalseCeiling(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`ceiling-${index}`}
                    className="absolute top-2 right-2"
                  />
                  <img src={item?.IMAGE} />
                  {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">POP in Walls</h3>
          <RadioGroup value={selectedWalls} onValueChange={setSelectedWalls}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WALL_FINISHES.POP_IN_WALLS.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative flex flex-col justify-center items-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedWalls === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handlePopInWalls(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`walls-${index}`}
                    className="absolute top-2 right-2"
                  />
                  <img src={item?.IMAGE} />
                  {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Internal Wall Paint</h3>
          <RadioGroup value={selectedPaint} onValueChange={setSelectedPaint}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WALL_FINISHES.INTERMNAL_WALL_PAINT.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative flex flex-col justify-center items-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedPaint === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleWallPaint(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`paint-${index}`}
                    className="absolute top-2 right-2"
                  />
                  <img src={item?.IMAGE} />
                  {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
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
