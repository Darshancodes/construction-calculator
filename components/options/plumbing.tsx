"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, PLUMBING_QUANTITY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
export const Plumbing = () => {
  const [selectedPVC, setSelectedPVC] = useState("");
  const [selectedCPVC, setSelectedCPVC] = useState("");
  const [selectedVitreous, setSelectedVitreous] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculatePVC = (name, per_sqft_rate) => {
    // const per_sqft_rate = 35;
    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["PLUMBING-PVC-INTERNAL-AND-EXTERNAL"],
      AMOUNT: amount,
      BRAND: name,
    });
    // return amount;
  };
  const calculateCPVC = (name, per_sqft_rate) => {
    // const per_sqft_rate = 30;
    // const ground_floor_area = 2000;
    // const no_of_floors = 5;
    // const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["PLUMBING-CPVC-INTERNAL-AND-EXTERNAL"],
      AMOUNT: amount,
      BRAND: name,
    });
    // return amount;
  };
  const calculateCPVitreous = (name, per_unit_rate, standard_quantity) => {
    // const per_unit_rate = 35000;
    // const standard_quantity = 2;
    // const no_of_floors = 5;
    const total_quantity = standard_quantity * no_of_floors;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["PLUMBING-CP-AND-VITREOUS"],
      AMOUNT: amount,
      BRAND: name,
    });
    // return amount;
  };

  const handlePVC = (name) => {
    setSelectedPVC(name);
    const selected = PLUMBING_QUANTITY["PVC-(INTERNAL & EXTERNAL)"].find(
      (plumbing) => plumbing.NAME === name
    );
    if (selected) {
      calculatePVC(selected?.NAME, selected?.PER_SQRT_RATE);
    }
  };

  const handleCPVC = (name) => {
    setSelectedCPVC(name);
    const selected = PLUMBING_QUANTITY["CPVC-(INTERNAL & EXTERNAL)"].find(
      (plumbing) => plumbing.NAME === name
    );
    if (selected) {
      calculateCPVC(selected?.NAME, selected?.PER_SQRT_RATE);
    }
  };

  const handleCPVitreous = (name) => {
    setSelectedVitreous(name);
    const selected = PLUMBING_QUANTITY["CP-VITREOUS"].find(
      (plumbing) => plumbing.NAME === name
    );
    if (selected) {
      calculateCPVitreous(
        selected?.NAME,
        selected?.PER_UNIT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };

  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Plumbing
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">
              PVC (Internal & External)
            </h3>
            <RadioGroup value={selectedPVC} onValueChange={handlePVC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLUMBING_QUANTITY["PVC-(INTERNAL & EXTERNAL)"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`bg-white relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        selectedPVC === item.NAME
                          ? "border-black"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePVC(item.NAME)}
                    >
                      <RadioGroupItem value={item.NAME} id={`pvc-${index}`} />
                      <Label
                        htmlFor={`pvc-${index}`}
                        className="cursor-pointer"
                      >
                        <img src={item?.IMAGE} />
                        {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              CPVC (Internal & External)
            </h3>
            <RadioGroup value={selectedCPVC} onValueChange={handleCPVC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLUMBING_QUANTITY["CPVC-(INTERNAL & EXTERNAL)"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`bg-white relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        selectedCPVC === item.NAME
                          ? "border-black"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleCPVC(item.NAME)}
                    >
                      <RadioGroupItem value={item.NAME} id={`cpvc-${index}`} />
                      <Label
                        htmlFor={`cpvc-${index}`}
                        className="cursor-pointer"
                      >
                        <img src={item?.IMAGE} />
                        {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">CP-Vitreous</h3>
            <RadioGroup
              value={selectedVitreous}
              onValueChange={handleCPVitreous}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PLUMBING_QUANTITY["CP-VITREOUS"].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedVitreous === item.NAME
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleCPVitreous(item.NAME)}
                  >
                    <RadioGroupItem
                      value={item.NAME}
                      id={`vitreous-${index}`}
                    />
                    <Label
                      htmlFor={`vitreous-${index}`}
                      className="cursor-pointer"
                    >
                      <img src={item?.IMAGE} />
                      {item.NAME} - ₹{item.PER_UNIT_RATE.toLocaleString()}/
                      {item.PER_UNIT}
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
