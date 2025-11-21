"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { BRICKS_CATEGORY, CATEGORY_NAMES } from "@/lib/constants";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
import { ProductCard } from "./product-card";

export const Bricks = () => {
  const {
    constructionData: { ground_floor_area, total_build_up_area },
    addAndCalculate,
    removePriceByName,
    all_prices,
  } = useDataStore();
  const { nextStep, prevStep } = useStepStore();
  const [selectedBrand, setSelectedBrand] = useState(() =>
    getStoredBrand(CATEGORY_NAMES.BRICKS, all_prices)
  );
  const [waterProofing, setWaterProofing] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["WATER-PROOFING"], all_prices)
  );
  const [termiteSolution, setTermiteSolution] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["TERMITE-SOLUTION"], all_prices)
  );
  const brands = [
    "fly ash bricks",
    "renwal or other red clay brick",
    "kanota or hanumargarah",
  ];

  const calculateBricks = (
    name: string,
    per_unit_rate: number,
    standard_quantity: number
  ) => {
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES.BRICKS,
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const calculateWaterProofing = (
    name: string,
    per_unit_rate: number,
    standard_quantity: number
  ) => {
    // const per_sqft_rate = 40;
    // const standard_quantity = 0.3;

    const total_quantity = standard_quantity * ground_floor_area;
    const amount = per_unit_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WATER-PROOFING"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateTermiteSolution = (
    name: string,
    per_sqft_rate: number,
    standard_quantity: number
  ) => {
    // const per_sqft_rate = 15;
    // const standard_quantity = 0.9;
    const total_quantity = standard_quantity * ground_floor_area;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["TERMITE-SOLUTION"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };

  // Handle brand selection and calculation
  const handleBrandChange = (brandName: string) => {
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
  const handleWaterProofingChange = (optionName: string) => {
    setWaterProofing(optionName);
    const selectedOption = BRICKS_CATEGORY.WATER_PROOFING.find(
      (option) => option.NAME === optionName
    );
    if (selectedOption) {
      calculateWaterProofing(
        selectedOption.NAME,
        selectedOption.PER_SQFT_RATE,
        selectedOption.STANDARD_QUANTITY
      );
    }
  };

  // Handle termite solution selection and calculation
  const handleTermiteSolutionChange = (optionName: string) => {
    setTermiteSolution(optionName);
    const selectedOption = BRICKS_CATEGORY.TERMITE_SOLUTION.find(
      (option) => option.NAME === optionName
    );
    if (selectedOption) {
      calculateTermiteSolution(
        selectedOption.NAME,
        selectedOption.PER_SQFT_RATE,
        selectedOption.STANDARD_QUANTITY
      );
    }
  };

  return (
    <Card className="w-full  bg-yellow-50">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Bricks
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6 ">
          <RadioGroup value={selectedBrand} onValueChange={handleBrandChange}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {BRICKS_CATEGORY.BRANDS.map((brand, index) => (
                <div
                  key={index}
                  className={`relative h-full bg-white border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedBrand === brand.NAME
                      ? "border-black shadow-md"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleBrandChange(brand?.NAME)}
                >
                  <div className="absolute top-3 right-3">
                    <RadioGroupItem
                      value={brand.NAME}
                      id={`bricks-${index}`}
                      className="absolute top-0 right-0"
                    />
                  </div>

                  <Label
                    htmlFor={`brick-${index}`}
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-lg cursor-pointer"
                  >
                    {/* Images Section */}
                    <div className="flex items-center justify-center mb-3 w-full min-h-[80px]">
                      {brand.IMAGE2 ? (
                        // Two images with "Or" between them
                        <div className="flex items-center justify-center gap-3 w-full">
                          <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="h-20 flex items-center justify-center mb-2">
                              <img
                                src={brand.IMAGE}
                                alt={brand.NAME}
                                className="max-w-full max-h-16 object-contain mb-2"
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-700 text-center">
                              {brand.NAME}
                            </span>
                          </div>

                          <div className="flex flex-col items-center justify-center gap-1 px-2">
                            <div className="w-px h-6 bg-gray-300"></div>
                            <span className="text-xs font-medium text-gray-400">
                              Or
                            </span>
                            <div className="w-px h-6 bg-gray-300"></div>
                          </div>

                          <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="h-20 flex items-center justify-center mb-2">
                              <img
                                src={brand.IMAGE2}
                                alt={brand.NAME2}
                                className="max-w-full max-h-20 object-contain mb-2"
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-700 text-center">
                              {brand.NAME2}
                            </span>
                          </div>
                        </div>
                      ) : (
                        // Single image
                        <div className="flex flex-col items-center justify-center">
                          <div className="h-20 flex items-center justify-center mb-2">
                            <img
                              src={brand.IMAGE}
                              alt={brand.NAME}
                              className="max-w-full max-h-16 object-contain mb-2"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 text-center">
                            {brand.NAME}
                          </span>
                        </div>
                      )}
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1  gap-6">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-medium mb-3">Water proofing</h3>
            <RadioGroup
              value={waterProofing}
              onValueChange={handleWaterProofingChange}
            >
              <div className="flex gap-4">
                {BRICKS_CATEGORY.WATER_PROOFING.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 bg-white py-4 px-2 ${
                      selectedBrand === option.NAME
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <Label
                      htmlFor={`water-${index}`}
                      className="cursor-pointer "
                    >
                      {option.NAME}
                    </Label>
                    <RadioGroupItem
                      className={`w-5 h-5 rounded-full cursor-pointer border-2 flex items-center justify-center `}
                      value={option.NAME}
                      id={`water-${index}`}
                    />
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center gap-4">
            <h3 className="text-lg font-medium mb-3">Termite solution</h3>
            <RadioGroup
              value={termiteSolution}
              onValueChange={handleTermiteSolutionChange}
            >
              <div className="flex gap-4">
                {BRICKS_CATEGORY.TERMITE_SOLUTION.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white py-4 px-2"
                  >
                    <Label
                      htmlFor={`termite-${index}`}
                      className="cursor-pointer"
                    >
                      {option.NAME}
                    </Label>
                    <RadioGroupItem
                      value={option.NAME}
                      id={`termite-${index}`}
                    />
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
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
