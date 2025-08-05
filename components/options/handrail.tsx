"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, HANDRAILS } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
export const HandRails = () => {
  const [selectedStair, setSelectedStair] = useState("");
  const [selectedBalcony, setSelectedBalcony] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculateStairHandRail = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = standard_quantity * no_of_floors;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["STAIR-HANDRAIL"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const calculateBalconyHandRail = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = standard_quantity * no_of_floors;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["BALCONY-HANDRAIL"],
      AMOUNT: amount,
      BRAND: name,
    });
    // return amount;
  };

  const handleStairHandRail = (name) => {
    setSelectedStair(name);
    const selected = HANDRAILS.STAIR_HANDRAIL.find(
      (hand) => hand.NAME === name
    );
    if (selected) {
      calculateStairHandRail(
        selected?.NAME,
        selected?.PER_UNIT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };
  const handleBalconyHandRail = (name) => {
    setSelectedBalcony(name);
    const selected = HANDRAILS.STAIR_HANDRAIL.find(
      (hand) => hand?.NAME === name
    );
    if (selected) {
      calculateBalconyHandRail(
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
          Handrails
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Stair Handrail</h3>
          <RadioGroup value={selectedStair} onValueChange={handleStairHandRail}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HANDRAILS.STAIR_HANDRAIL.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedStair === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleStairHandRail(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`stair-${index}`}
                    className="absolute top-1 right-1"
                  />
                  <img src={item.IMAGE} />
                  {item.NAME} - ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Balcony Handrail</h3>
          <RadioGroup
            value={selectedBalcony}
            onValueChange={handleBalconyHandRail}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HANDRAILS.BALCONY_HANDRAIL.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedBalcony === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleBalconyHandRail(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`balcony-${index}`}
                    className="absolute top-1 right-1"
                  />
                  <img src={item.IMAGE} />
                  {item.NAME} - ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
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
