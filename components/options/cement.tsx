"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { CATEGORY_NAMES, CEMENT_CATEGORY } from "@/lib/constants";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";

export const Cement = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { total_build_up_area },
    addAndCalculate,
    all_prices,
  } = useDataStore();
  const [selectedBrand, setSelectedBrand] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.CEMENT, all_prices)
  );
  const brands = ["UltraTech or Ambhuja", "JK", "Wonder or shree"];
  const calculateCementPrice = (name, per_unit_rate, standard_quantity) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = total_quantity * per_unit_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES.CEMENT,
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const handleCementPrice = (brandName) => {
    setSelectedBrand(brandName);
    const selectedBrandData = CEMENT_CATEGORY.BRANDS.find(
      (brand) => brand.NAME === brandName
    );
    if (selectedBrandData) {
      calculateCementPrice(
        selectedBrandData.NAME,
        selectedBrandData.PER_UNIT_RATE,
        selectedBrandData.STANDARD_QUANTITY
      );
    }
  };
  return (
    <Card className="w-full bg-yellow-50">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Cement
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <RadioGroup value={selectedBrand} onValueChange={handleCementPrice}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CEMENT_CATEGORY.BRANDS.map((brand, index) => (
                <div
                  key={index}
                  className={`relative border-2 rounded-lg h-full ${
                    selectedBrand === brand.NAME
                      ? "border-black shadow-md"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleCementPrice(brand?.NAME)}
                >
                  <RadioGroupItem
                    value={brand.NAME}
                    id={`cement-${index}`}
                    className="absolute top-2 right-2"
                  />
                  {/* <div className="absolute top-3 right-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedBrand === brand.NAME
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedBrand === brand.NAME && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div> */}
                  <Label
                    htmlFor={`cement-${index}`}
                    className="flex flex-col items-center justify-center p-4 h-full bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                  >
                    <div className=" rounded-lg mb-3 flex items-center justify-center">
                      <img src={brand?.IMAGE} />
                    </div>
                    <h3>{brand?.NAME}</h3>
                  </Label>
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

// <div>
//   {brands?.map((brand) => (
//     <h2 key={brand}>{brand}</h2>
//   ))}
//   {calculateCementPrice()}
//   <button
//     className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
//     onClick={nextStep}
//   >
//     nextStep
//   </button>
//   <button
//     className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
//     onClick={prevStep}
//   >
//     prevStep
//   </button>
// </div>
