"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { WALL_FINISHES } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
export const WallFinishes = () => {
  const { nextStep, prevStep } = useStepStore();
  const calculatePopFalseCeiling = () => {
    const per_sqft_rate = 120;
    const standard_quantity = 0.7;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const calculatePopInWalls = () => {
    const per_sqft_rate = 18;
    const standard_quantity = 3;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const calculateInternalWallPaint = () => {
    const per_sqft_rate = 45;
    const standard_quantity = 3.5;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const [selectedCeiling, setSelectedCeiling] = useState("");
  const [selectedWalls, setSelectedWalls] = useState("");
  const [selectedPaint, setSelectedPaint] = useState("");
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
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
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`ceiling-${index}`} />
                    <Label
                      htmlFor={`ceiling-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                    </Label>
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
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`walls-${index}`} />
                    <Label
                      htmlFor={`walls-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                    </Label>
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
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`paint-${index}`} />
                    <Label
                      htmlFor={`paint-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
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
