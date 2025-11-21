"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, ELECTRICAL_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const Electrical = () => {
  const brands = ["shiva/jindal", "other brands"];
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
    all_prices,
  } = useDataStore();
  const [selectedWallMaterial, setSelectedWallMaterial] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["ELECTRICAL-SLAB-AND-WALL-MATERIAL"],
      all_prices
    )
  );
  const [selectedWiresCables, setSelectedWiresCables] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["WIRES-AND-CABLES-EWC0100-FLAT"],
      all_prices
    )
  );
  const [selectedSwitches, setSelectedSwitches] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["SHEET-AND-SWITCHES-EWC0100-FLAT"],
      all_prices
    )
  );

  const calculateSlabWallMaterial = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["ELECTRICAL-SLAB-AND-WALL-MATERIAL"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateWiresCables = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WIRES-AND-CABLES-EWC0100-FLAT"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateSheetsSwitches = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["SHEET-AND-SWITCHES-EWC0100-FLAT"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };

  const handleSlabWall = (name) => {
    setSelectedWallMaterial(name);
    const selected = ELECTRICAL_CATEGORY.ELECTRICAL_OR_WALL_MATERIAL.find(
      (material) => material.NAME === name
    );
    if (selected) {
      calculateSlabWallMaterial(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  const handleWireCables = (name) => {
    setSelectedWiresCables(name);
    const selected = ELECTRICAL_CATEGORY["WIRES_AND_CABLES_EWC0100-FLAT"].find(
      (material) => material?.NAME === name
    );
    if (selected) {
      calculateWiresCables(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  const handleSheetsSwitches = (name) => {
    setSelectedSwitches(name);
    const selected = ELECTRICAL_CATEGORY[
      "SHEET-AND-SWITCHES_EWC0100-FLAT"
    ].find((material) => material?.NAME === name);
    if (selected) {
      calculateSheetsSwitches(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  return (
    <div className="w-full ">
      <div className="p-6 space-y-6">
        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">
              Electrical/Wall Material
            </h3>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedWallMaterial}
              onValueChange={handleSlabWall}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ELECTRICAL_CATEGORY.ELECTRICAL_OR_WALL_MATERIAL.map(
                  (brand, index) => (
                    <div
                      key={index}
                      className={`flex flex-col justify-center  items-center min-h-44 space-x-2 bg-white border-2 border-black relative ${
                        selectedWallMaterial === brand?.NAME
                          ? "border-black shadow-md"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleSlabWall(brand?.NAME)}
                    >
                      <RadioGroupItem
                        value={brand.NAME}
                        id={`wall-${index}`}
                        className="absolute top-3 right-2"
                      />
                      <Label
                        htmlFor={`wall-${index}`}
                        className="flex flex-col items-center justify-center w-full  rounded-lg cursor-pointer"
                      >
                        {/* Images Section */}
                        <div className="flex  justify-center mb-3 w-full min-h-[160px]">
                          {brand.IMAGE2 ? (
                            // Two images with "Or" between them
                            <div className="flex items-center justify-center gap-3 w-full">
                              <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="h-20 flex items-center justify-center mb-2">
                                  <img
                                    src={brand.IMAGE}
                                    alt={brand.NAME}
                                    className="max-w-full max-h-16 object-contain "
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
                                  className="max-w-full max-h-20 object-contain"
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
                  )
                )}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">Wires and Cables</h3>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedWiresCables}
              onValueChange={handleWireCables}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ELECTRICAL_CATEGORY["WIRES_AND_CABLES_EWC0100-FLAT"].map(
                  (brand, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center min-h-44 space-x-2 bg-white border-2 flex-col relative ${
                        selectedWiresCables === brand.NAME
                          ? "border-black shadow-md"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleWireCables(brand?.NAME)}
                    >
                      <RadioGroupItem
                        value={brand.NAME}
                        id={`wires-${index}`}
                        className="absolute top-3 right-2"
                      />
                      <Label
                        htmlFor={`wires-${index}`}
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
                                  className="max-w-full max-h-20 object-contain mb-2"
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
                  )
                )}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">Sheets and Switches</h3>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedSwitches}
              onValueChange={handleSheetsSwitches}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ELECTRICAL_CATEGORY["SHEET-AND-SWITCHES_EWC0100-FLAT"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center min-h-44 space-x-2 bg-white border-2 flex-col relative ${
                        selectedSwitches === item.NAME
                          ? "border-black shadow-md"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleSheetsSwitches(item?.NAME)}
                    >
                      <RadioGroupItem
                        value={item.NAME}
                        id={`switches-${index}`}
                        className="absolute top-3 right-2"
                      />
                      <img src={item?.IMAGE} />
                      <Label
                        htmlFor={`switches-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                      </Label>
                    </div>
                  )
                )}
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

{
  /* <div>
      <div>
        Electrical slab & wall material -
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
        {calculateSlabWallMaterial()}
      </div>
      <div>
        Wires & cables (EWC0100)-{" "}
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
        {calculateWiresCables()}
      </div>
      <div>
        sheet & switches - anchor penta,havells,Schneider/GM
        {calculateSheetsSwitches()}
      </div>
    </div> */
}
