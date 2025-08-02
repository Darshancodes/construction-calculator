"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HANDRAILS } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
export const HandRails = () => {
  const [selectedStair, setSelectedStair] = useState("");
  const [selectedBalcony, setSelectedBalcony] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const calculateStairHandRail = () => {
    const per_unit_rate = 400; //rft
    const standard_quantity = 30;
    const total_no_of_floors = 5;
    const total_quantity = standard_quantity * total_no_of_floors;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  const calculateBalconyHandRail = () => {
    const per_unit_rate = 1200; //rft
    const standard_quantity = 35;
    const total_no_of_floors = 5;
    const total_quantity = standard_quantity * total_no_of_floors;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Handrails
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Stair Handrail</h3>
            <RadioGroup value={selectedStair} onValueChange={setSelectedStair}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {HANDRAILS.STAIR_HANDRAIL.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`stair-${index}`} />
                    <Label
                      htmlFor={`stair-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Balcony Handrail</h3>
            <RadioGroup
              value={selectedBalcony}
              onValueChange={setSelectedBalcony}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {HANDRAILS.BALCONY_HANDRAIL.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`balcony-${index}`} />
                    <Label
                      htmlFor={`balcony-${index}`}
                      className="cursor-pointer"
                    >
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
