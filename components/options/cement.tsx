"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useStepStore } from "@/store/useStepStore";
import { CATEGORY_NAMES, CEMENT_CATEGORY } from "@/lib/constants";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
import { ProductCard } from "./product-card";

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
  const handleCementPrice = (brandName: string) => {
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
                  className={`relative h-full bg-white border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
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

                  <Label
                    htmlFor={`cement-${index}`}
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
                                className="max-w-full max-h-16 object-contain mb-2"
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
