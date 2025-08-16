"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, PLUMBING_QUANTITY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const Plumbing = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
    all_prices,
  } = useDataStore();
  const [selectedPVC, setSelectedPVC] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["PLUMBING-PVC-INTERNAL-AND-EXTERNAL"],
      all_prices
    )
  );
  const [selectedCPVC, setSelectedCPVC] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["PLUMBING-CPVC-INTERNAL-AND-EXTERNAL"],
      all_prices
    )
  );
  const [selectedVitreous, setSelectedVitreous] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["PLUMBING-CP-AND-VITREOUS"], all_prices)
  );
  const calculatePVC = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["PLUMBING-PVC-INTERNAL-AND-EXTERNAL"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const calculateCPVC = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["PLUMBING-CPVC-INTERNAL-AND-EXTERNAL"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const calculateCPVitreous = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = standard_quantity * no_of_floors;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["PLUMBING-CP-AND-VITREOUS"],
      AMOUNT: amount,
      BRAND: name,
    });
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
    <div className="w-full bg-main">
      <div className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">
              PVC (Internal & External)
            </h3>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedPVC} onValueChange={handlePVC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLUMBING_QUANTITY["PVC-(INTERNAL & EXTERNAL)"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`bg-white flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        selectedPVC === item.NAME
                          ? "border-black"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePVC(item.NAME)}
                    >
                      <RadioGroupItem
                        value={item.NAME}
                        id={`pvc-${index}`}
                        className="absolute top-2 right-2"
                      />
                      <img src={item?.IMAGE} />
                      {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">
              CPVC (Internal & External)
            </h3>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedCPVC} onValueChange={handleCPVC}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLUMBING_QUANTITY["CPVC-(INTERNAL & EXTERNAL)"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`bg-white flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        selectedCPVC === item.NAME
                          ? "border-black"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleCPVC(item.NAME)}
                    >
                      <RadioGroupItem
                        value={item.NAME}
                        id={`cpvc-${index}`}
                        className="absolute top-2 right-2"
                      />
                      <img src={item?.IMAGE} />
                      {item.NAME} - ₹{item.PER_SQRT_RATE}/sqft
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">CP-Vitreous</h3>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedVitreous}
              onValueChange={handleCPVitreous}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLUMBING_QUANTITY["CP-VITREOUS"].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedVitreous === item.NAME
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleCPVitreous(item.NAME)}
                  >
                    <RadioGroupItem
                      value={item.NAME}
                      id={`vitreous-${index}`}
                      className="absolute top-2 right-2"
                    />
                    <img src={item?.IMAGE} />
                    {item.NAME} - ₹{item.PER_UNIT_RATE.toLocaleString()}/
                    {item.PER_UNIT}
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
