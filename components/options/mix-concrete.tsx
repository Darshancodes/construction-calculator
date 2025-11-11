"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { CATEGORY_NAMES, MIX_CONCRETE_CATEGORY } from "@/lib/constants";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const MixConcrete = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
    all_prices,
  } = useDataStore();
  const [selectedRMC, setSelectedRMC] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["MIX-CONCRETE-RMC"], all_prices)
  );
  const [selectedPCC, setSelectedPCC] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["MIX-CONCRETE-PCC"], all_prices)
  );
  const calculateRMC = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["MIX-CONCRETE-RMC"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const calculatePCC = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["MIX-CONCRETE-PCC"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const handleRMC = (name) => {
    setSelectedRMC(name);
    const selected = MIX_CONCRETE_CATEGORY.CONCRETE.find(
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
    <div className="w-full ">
      <div className="p-6 space-y-6">
        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">Concrete</h3>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedRMC} onValueChange={handleRMC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MIX_CONCRETE_CATEGORY?.CONCRETE?.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white relative flex flex-col justify-center items-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedRMC === item.NAME
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleRMC(item.NAME)}
                  >
                    <RadioGroupItem
                      value={item.NAME}
                      id={`concrete-${index}`}
                      className="absolute top-2 right-2"
                    />
                    <img src={item?.IMAGE} />
                    <Label
                      htmlFor={`concrete-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">
              PCC (Plain Cement Concrete)
            </h3>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedPCC} onValueChange={handlePCC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MIX_CONCRETE_CATEGORY?.PCC?.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white flex flex-col justify-center items-center w-full relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedPCC === item.NAME
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handlePCC(item.NAME)}
                  >
                    <RadioGroupItem
                      value={item.NAME}
                      id={`pcc-${index}`}
                      className="absolute top-2 right-2"
                    />
                    <img src={item.IMAGE} />
                    <Label htmlFor={`pcc-${index}`} className="cursor-pointer">
                      {item.NAME} - ₹{item.PER_UNIT_RATE}/{item.PER_UNIT}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
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
      </div>
    </div>
  );
};
