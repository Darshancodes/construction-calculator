"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { CATEGORY_NAMES, MIX_CONCRETE_CATEGORY } from "@/lib/constants";
import { useDataStore } from "@/store/useDataStore";
export const MixConcrete = () => {
  const [selectedRMC, setSelectedRMC] = useState("");
  const [selectedPCC, setSelectedPCC] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculateRMC = (name, per_unit_rate, standard_quantity) => {
    // const per_unit_rate = 4200;
    // const standard_quantity = 0.04;
    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["MIX-CONCRETE-RMC"],
      AMOUNT: amount,
      BRAND: name,
    });
    // return amount;
  };
  const calculatePCC = (name, per_unit_rate, standard_quantity) => {
    // const per_unit_rate = 2800;
    // const standard_quantity = 0.012;
    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["MIX-CONCRETE-PCC"],
      AMOUNT: amount,
      BRAND: name,
    });
    // return amount;
  };
  const handleRMC = (name) => {
    setSelectedRMC(name);
    const selected = MIX_CONCRETE_CATEGORY.RMC.find(
      (concrete) => concrete.NAME === name
    );
    if (selected) {
      calculateRMC(
        selected?.NAME,
        selected?.PER_UNIT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };
  const handlePCC = (name) => {
    setSelectedPCC(name);
    const selected = MIX_CONCRETE_CATEGORY.PCC.find(
      (concrete) => concrete.NAME === name
    );
    if (selected) {
      calculatePCC(
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
          Mix Concrete
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">RMC (Ready Mix Concrete)</h3>
          <RadioGroup value={selectedRMC} onValueChange={handleRMC}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MIX_CONCRETE_CATEGORY.RMC.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedRMC === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleRMC(item.NAME)}
                >
                  <RadioGroupItem value={item.NAME} id={`rmc-${index}`} />
                  <img src={item?.IMAGE} />
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
          <RadioGroup value={selectedPCC} onValueChange={handlePCC}>
            <div className="grid grid-cols-1 gap-4">
              {MIX_CONCRETE_CATEGORY.PCC.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedPCC === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handlePCC(item.NAME)}
                >
                  <RadioGroupItem value={item.NAME} id={`pcc-${index}`} />
                  <img src={item.IMAGE} />
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
  );
};
