"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { BRICKS_CATEGORY } from "@/lib/constants";
import { useDataStore } from "@/store/useDataStore";

export const Bricks = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [waterProofing, setWaterProofing] = useState("");
  const [termiteSolution, setTermiteSolution] = useState("");
  const {
    constructionData: { ground_floor_area, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const { nextStep, prevStep } = useStepStore();
  const brands = [
    "fly ash bricks",
    "renwal or other red clay brick",
    "kanota or hanumargarah",
  ];

  const calculateBricks = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({ NAME: "BRICKS", AMOUNT: amount, BRAND: name });
  };
  const calculateWaterProofing = (name, per_sqft_rate, standard_quantity) => {
    // const per_sqft_rate = 40;
    // const standard_quantity = 0.3;

    const total_quantity = standard_quantity * ground_floor_area;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({ NAME: "BRICKS", AMOUNT: amount, BRAND: name });
    return amount;
  };
  const calculateTermiteSolution = (name, per_sqft_rate, standard_quantity) => {
    // const per_sqft_rate = 15;
    // const standard_quantity = 0.9;
    const total_quantity = standard_quantity * ground_floor_area;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({ NAME: "BRICKS", AMOUNT: amount, BRAND: name });
    return amount;
  };

  // Handle brand selection and calculation
  const handleBrandChange = (brandName) => {
    setSelectedBrand(brandName);
    const selectedBrandData = BRICKS_CATEGORY.BRANDS.find(
      (brand) => brand.NAME === brandName
    );
    if (selectedBrandData) {
      calculateBricks(
        selectedBrandData.NAME,
        selectedBrandData.PER_UNIT_RATE,
        selectedBrandData.STANDARD_QUANTITY
      );
    }
  };

  // Handle water proofing selection and calculation
  const handleWaterProofingChange = (optionName) => {
    setWaterProofing(optionName);
    const selectedOption = BRICKS_CATEGORY.WATER_PROOFING.find(
      (option) => option.NAME === optionName
    );
    if (selectedOption && selectedOption.PER_SQFT_RATE > 0) {
      calculateWaterProofing(
        selectedOption.NAME,
        selectedOption.PER_SQFT_RATE,
        selectedOption.STANDARD_QUANTITY
      );
    }
  };

  // Handle termite solution selection and calculation
  const handleTermiteSolutionChange = (optionName) => {
    setTermiteSolution(optionName);
    const selectedOption = BRICKS_CATEGORY.TERMITE_SOLUTION.find(
      (option) => option.NAME === optionName
    );
    if (selectedOption && selectedOption.PER_SQFT_RATE > 0) {
      calculateTermiteSolution(
        selectedOption.NAME,
        selectedOption.PER_SQFT_RATE,
        selectedOption.STANDARD_QUANTITY
      );
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-yellow-50">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Bricks
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Select Brand</h3>
          <RadioGroup value={selectedBrand} onValueChange={handleBrandChange}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {BRICKS_CATEGORY.BRANDS.map((brand, index) => (
                <div key={index} className="relative">
                  <RadioGroupItem
                    value={brand.NAME}
                    id={`brick-${index}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`brick-${index}`}
                    className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                  >
                    <div className="w-16 h-12 bg-red-200 rounded mb-3 flex items-center justify-center">
                      <div className="w-12 h-8 bg-red-400 rounded-sm"></div>
                    </div>
                    <span className="text-sm font-medium text-center">
                      {brand.NAME}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      ₹{brand.PER_UNIT_RATE}/{brand.PER_UNIT}
                    </span>
                    <span className="text-xs text-gray-400">
                      {brand.STANDARD_QUANTITY} {brand.STANDARD_QUANTITY_UNIT}
                    </span>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Water proofing</h3>
            <RadioGroup
              value={waterProofing}
              onValueChange={handleWaterProofingChange}
            >
              <div className="flex gap-4">
                {BRICKS_CATEGORY.WATER_PROOFING.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.NAME} id={`water-${index}`} />
                    <Label
                      htmlFor={`water-${index}`}
                      className="cursor-pointer"
                    >
                      {option.NAME}
                      {option.PER_SQFT_RATE > 0 && (
                        <span className="text-xs text-gray-500 ml-1">
                          (₹{option.PER_SQFT_RATE}/sqft)
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Termite solution</h3>
            <RadioGroup
              value={termiteSolution}
              onValueChange={handleTermiteSolutionChange}
            >
              <div className="flex gap-4">
                {BRICKS_CATEGORY.TERMITE_SOLUTION.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option.NAME}
                      id={`termite-${index}`}
                    />
                    <Label
                      htmlFor={`termite-${index}`}
                      className="cursor-pointer"
                    >
                      {option.NAME}
                      {option.PER_SQFT_RATE > 0 && (
                        <span className="text-xs text-gray-500 ml-1">
                          (₹{option.PER_SQFT_RATE}/sqft)
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
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

{
  /* <div>
      {brands?.map((brand) => (
        <h2 key={brand}>{brand}</h2>
      ))}
      <div>water proofing - yes or no {calculateWaterProofing()}</div>
      <div>termite solution - yes or no{calculateTermiteSolution()}</div>
      <button
        className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        onClick={nextStep}
      >
        nextStep
      </button>
      <button
        className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        onClick={prevStep}
      >
        prevStep
      </button>
    </div> */
}
