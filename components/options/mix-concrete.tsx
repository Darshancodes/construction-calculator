"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { MIX_CONCRETE_CATEGORY } from "@/lib/constants";
export const MixConcrete = () => {
  const [selectedRMC, setSelectedRMC] = useState("");
  const [selectedPCC, setSelectedPCC] = useState("");
  const { nextStep, prevStep } = useStepStore();

  const calculateRMC = () => {
    const per_unit_rate = 4200;
    const standard_quantity = 0.04;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    return amount;
  };
  const calculatePCC = () => {
    const per_unit_rate = 2800;
    const standard_quantity = 0.012;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    return amount;
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Mix Concrete
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">
              RMC (Ready Mix Concrete)
            </h3>
            <RadioGroup value={selectedRMC} onValueChange={setSelectedRMC}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MIX_CONCRETE_CATEGORY.RMC.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`rmc-${index}`} />
                    <Label htmlFor={`rmc-${index}`} className="cursor-pointer">
                      {item.NAME} - ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              PCC (Plain Cement Concrete)
            </h3>
            <RadioGroup value={selectedPCC} onValueChange={setSelectedPCC}>
              <div className="grid grid-cols-1 gap-4">
                {MIX_CONCRETE_CATEGORY.PCC.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`pcc-${index}`} />
                    <Label htmlFor={`pcc-${index}`} className="cursor-pointer">
                      {item.NAME} - ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
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
